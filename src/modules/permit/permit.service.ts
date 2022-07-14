import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import * as axios from 'axios';
import * as moment from 'moment';
import sequelize from 'sequelize';
import { imageAfter } from 'src/entities/imageAfter';
import { imageBefore } from 'src/entities/imageBefore';
import { imageProcess } from 'src/entities/imageProcess';
import { lantai } from 'src/entities/lantai';
import { location } from 'src/entities/location';
import { noRack } from 'src/entities/noRack';
import { permit } from 'src/entities/permit';
import { ruangan } from 'src/entities/ruangan';
import { teknisiAuth } from 'src/entities/teknisiAuth';
import { teknisiData } from 'src/entities/teknisiData';
import { CreatePermitDto } from './dto/create-permit.dto';
import { UpdateStatusPermitDto } from './dto/update-status-permit.dto';
import { UpdateStatusSecurityPermitDto } from './dto/update-status-security-permit.dto';
import { UploadImageDto } from './dto/upload-image.dto';

@Injectable()
export class PermitService {
    constructor(
        @InjectModel(permit) private readonly permitEntities: typeof permit,
        @InjectModel(imageBefore) private readonly imageBeforeEntities: typeof imageBefore,
        @InjectModel(imageProcess) private readonly imageProcessEntities: typeof imageProcess,
        @InjectModel(imageAfter) private readonly imageAfterEntities: typeof imageAfter,
        @InjectModel(teknisiData) private readonly teknisiDataEntities: typeof teknisiData,
        @InjectModel(teknisiAuth) private readonly teknisiAuthEntities: typeof teknisiAuth,
        @InjectModel(location) private readonly locationEntities: typeof location,
        @InjectModel(lantai) private readonly lantaiEntities: typeof lantai,
        @InjectModel(ruangan) private readonly ruanganEntities: typeof ruangan,
        @InjectModel(noRack) private readonly noRackEntities: typeof noRack,
    ) { }

    async create(vendor: string, code: string, nde: string, simaru: string, createPermitDto: CreatePermitDto) {
        let permitToCreate = {
            adminId: createPermitDto.adminId,
            teknisiDataId: createPermitDto.teknisiDataId,
            waspangId: createPermitDto.waspangId,
            vendorId: createPermitDto.vendorId,
            vendor: vendor,
            status: "PROCESS",
            statusSecurity: "NEED APPROVAL",
            code: code,
            nde: nde,
            simaru: simaru,
            toDo: createPermitDto.toDo,
            description: createPermitDto.description,
            locationId: createPermitDto.locationId,
            lantaiId: createPermitDto.lantaiId,
            ruanganId: createPermitDto.ruanganId,
            noRackId: createPermitDto.noRackId,
            token: "",
            title: createPermitDto.description,
            createdAt: moment().format("YYYY-MM-DD HH:mm:ss")
        }

        let permitData = await this.permitEntities.create(permitToCreate)

        let teknisiArray = createPermitDto.teknisiDataId.replace(/[\[\]\'\"]/g, "").split(",")

        let teknisiAuthArray = []

        for (const key in teknisiArray) {
            await this.teknisiAuthEntities.findOne({ where: { teknisiDataId: teknisiArray[key] } }).then((resp) => {
                teknisiAuthArray.push(resp.id)
            })
        }

        console.log("teknisi auth id array" + teknisiAuthArray)

        // let teknisiAuth = await this.teknisiAuthEntities.findOne({ where: { teknisiDataId: createPermitDto.teknisiDataId } })

        let url = "https://onesignal.com/api/v1/notifications"
        let appId = "9dc29363-22d5-4d8c-ab65-a4f24579670e"
        let auth = "ZDEzMzZmNmUtZTAzMS00OGYyLTljZTUtOWIzYzg4MTg4ZGFl"
        let adnroidChannelId = "4eea4261-26d7-438f-8add-9ec1a78131e8"

        let data = {
            app_id: appId,
            include_external_user_ids: teknisiAuthArray,
            included_segments: ["all"],
            channel_for_external_user_ids: "push",
            data: { "permitId": `${permitData.id}` },
            headings: { "en": "Permit baru telah dibuat" },
            contents: { "en": `${createPermitDto.toDo}` },
            android_channel_id: adnroidChannelId
        }

        console.log(data)

        let options = {
            headers: {
                "Authorization": `Basic ${auth}`
            }
        }

        let notifikasi = await axios.default.post(url, data, options).then((response) => {
            console.log(response.data)
        })

        console.log(notifikasi)

        return permitData;
    }

    async findOneLatest() {
        return this.permitEntities.findOne({
            order: [['id', 'desc']]
        })
    }

    async findOne(id) {
        let teknisiDataArray = (await this.permitEntities.findByPk(id)).teknisiDataId.replace(/[\[\]\'\"]/g, "").split(",")

        let teknisiDataName = []
        for (const key in teknisiDataArray) {
            await this.teknisiDataEntities.findByPk(teknisiDataArray[key]).then((result) => {
                teknisiDataName.push(result.name)
            })
        }

        console.log(teknisiDataName)

        let data = await this.permitEntities.sequelize.query(`
                select p.id, a.user_name as admin, t.name as teknisi, w.name as waspang,
                    p.vendor, p.status, p.status_security, p.code, p.nde, p.simaru,
                    p.to_do as pekerjaan, p.created_at as tanggal, p.description, lc.name as lokasi, lt.name as lantai, 
                    r.name as ruangan, nr.name as nomor_rack, ib.image as image_before, ib.description as image_before_desc,
                    ip.image as image_process, ip.description as image_process_desc, ia.image as image_after, ia.description as image_after_desc
                from permit p 
                left join admin a on p.admin_id = a.id
                left join (select * from teknisi_data where role_id = 2) t on p.teknisi_data_id = t.id
                left join (select * from teknisi_data where role_id = 3) w on p.waspang_id = w.id
                left join location lc on p.location_id = lc.id
                left join lantai lt on p.lantai_id = lt.id
                left join ruangan r on p.ruangan_id = r.id
                left join no_rack nr on p.no_rack_id = nr.id
                left join image_before ib on p.image_before_id = ib.id
                left join image_process ip on p.image_process_id = ip.id
                left join image_after ia on p.image_after_id = ia.id
            where p.id = ${id};
        `, { type: sequelize.QueryTypes.SELECT })

        console.log(data)

        let result = {
            id: data[0]["id" as keyof typeof data[0]],
            admin: data[0]["admin" as keyof typeof data[0]],
            teknisi: teknisiDataName,
            waspang: data[0]["waspang" as keyof typeof data[0]],
            vendor: data[0]["vendor" as keyof typeof data[0]],
            status: data[0]["status" as keyof typeof data[0]],
            status_security: data[0]["status_security" as keyof typeof data[0]],
            code: data[0]["code" as keyof typeof data[0]],
            nde: data[0]["nde" as keyof typeof data[0]],
            simaru: data[0]["simaru" as keyof typeof data[0]],
            pekerjaan: data[0]["pekerjaan" as keyof typeof data[0]],
            tanggal: data[0]["tanggal" as keyof typeof data[0]],
            description: data[0]["description" as keyof typeof data[0]],
            lokasi: data[0]["lokasi" as keyof typeof data[0]],
            lantai: data[0]["lantai" as keyof typeof data[0]],
            ruangan: data[0]["ruangan" as keyof typeof data[0]],
            nomor_rack: data[0]["nomor_rack" as keyof typeof data[0]],
            image_before: data[0]["image_before" as keyof typeof data[0]],
            image_before_desc: data[0]["image_before_desc" as keyof typeof data[0]],
            image_process: data[0]["image_process" as keyof typeof data[0]],
            image_process_desc: data[0]["image_process_desc" as keyof typeof data[0]],
            image_after: data[0]["image_after" as keyof typeof data[0]],
            image_after_desc: data[0]["image_after_desc" as keyof typeof data[0]]
        }

        return result

        // if ("tanggal" in data[0]) {
        //     data[0]["tanggal" as keyof typeof data[0]] = "saat ini bosku"
        //     console.log(data[0]["tanggal" as keyof typeof data[0]]);
        //   }
    }

    async findAllPermit() {
        let data = await this.permitEntities.sequelize.query(`
                select p.id, a.user_name as admin, t.name as teknisi, w.name as waspang,
                    p.vendor, p.status, p.status_security, p.code, p.nde, p.simaru,
                    p.to_do as pekerjaan, p.created_at as tanggal, p.description, lc.name as lokasi, lt.name as lantai, 
                    r.name as ruangan, nr.name as nomor_rack, ib.image as image_before, ib.description as image_before_desc,
                    ip.image as image_process, ip.description as image_process_desc, ia.image as image_after, ia.description as image_after_desc
                from permit p 
                left join admin a on p.admin_id = a.id
                left join (select * from teknisi_data where role_id = 2) t on p.teknisi_data_id = t.id
                left join (select * from teknisi_data where role_id = 3) w on p.waspang_id = w.id
                left join location lc on p.location_id = lc.id
                left join lantai lt on p.lantai_id = lt.id
                left join ruangan r on p.ruangan_id = r.id
                left join no_rack nr on p.no_rack_id = nr.id
                left join image_before ib on p.image_before_id = ib.id
                left join image_process ip on p.image_process_id = ip.id
                left join image_after ia on p.image_after_id = ia.id order by p.id desc;
        `, { type: sequelize.QueryTypes.SELECT })

        let dataReturn = []

        for (const index in data) {
            let teknisiDataArray = (await this.permitEntities.findByPk(data[index]["id" as keyof typeof data[0]])).teknisiDataId.replace(/[\[\]\'\"]/g, "").split(",")

            let teknisiDataName = []
            for (const key in teknisiDataArray) {
                await this.teknisiDataEntities.findByPk(teknisiDataArray[key]).then((result) => {
                    teknisiDataName.push(result.name)
                })
            }

            let result = {
                id: data[index]["id" as keyof typeof data[0]],
                admin: data[index]["admin" as keyof typeof data[0]],
                teknisi: teknisiDataName,
                waspang: data[index]["waspang" as keyof typeof data[0]],
                vendor: data[index]["vendor" as keyof typeof data[0]],
                status: data[index]["status" as keyof typeof data[0]],
                status_security: data[index]["status_security" as keyof typeof data[0]],
                code: data[index]["code" as keyof typeof data[0]],
                nde: data[index]["nde" as keyof typeof data[0]],
                simaru: data[index]["simaru" as keyof typeof data[0]],
                pekerjaan: data[index]["pekerjaan" as keyof typeof data[0]],
                tanggal: data[index]["tanggal" as keyof typeof data[0]],
                description: data[index]["description" as keyof typeof data[0]],
                lokasi: data[index]["lokasi" as keyof typeof data[0]],
                lantai: data[index]["lantai" as keyof typeof data[0]],
                ruangan: data[index]["ruangan" as keyof typeof data[0]],
                nomor_rack: data[index]["nomor_rack" as keyof typeof data[0]],
                image_before: data[index]["image_before" as keyof typeof data[0]],
                image_before_desc: data[index]["image_before_desc" as keyof typeof data[0]],
                image_process: data[index]["image_process" as keyof typeof data[0]],
                image_process_desc: data[index]["image_process_desc" as keyof typeof data[0]],
                image_after: data[index]["image_after" as keyof typeof data[0]],
                image_after_desc: data[index]["image_after_desc" as keyof typeof data[0]]
            }

            dataReturn.push(result)
        }

        return dataReturn
    }

    async updateStatusPermit(updateStatusPermitDto: UpdateStatusPermitDto) {
        let data = await this.permitEntities.update(updateStatusPermitDto, { where: { id: updateStatusPermitDto.id } })

        if (updateStatusPermitDto.status.replace(/\s/g, '').toUpperCase() == "NEEDAPPROVAL") {
            let permit = await this.permitEntities.findByPk(updateStatusPermitDto.id)

            let waspangAuth = await this.teknisiAuthEntities.findOne({ where: { teknisiDataId: permit.waspangId } })

            let url = "https://onesignal.com/api/v1/notifications"
            let appId = "9dc29363-22d5-4d8c-ab65-a4f24579670e"
            let auth = "ZDEzMzZmNmUtZTAzMS00OGYyLTljZTUtOWIzYzg4MTg4ZGFl"
            let adnroidChannelId = "4eea4261-26d7-438f-8add-9ec1a78131e8"

            let json = {
                app_id: appId,
                include_external_user_ids: [waspangAuth.id],
                included_segments: ["All"],
                channel_for_external_user_ids: "push",
                data: { "permitId": `${updateStatusPermitDto.id}` },
                headings: { "en": "Need Approval" },
                contents: { "en": `${permit.toDo}` },
                android_channel_id: adnroidChannelId
            }

            console.log(json)

            let options = {
                headers: {
                    "Authorization": `Basic ${auth}`
                }
            }

            await axios.default.post(url, json, options).then((response) => {
                console.log(response.data)
            })
        }

        return data;
    }

    async updateStatusSecurityPermit(updateStatusSecurityPermitDto: UpdateStatusSecurityPermitDto) {
        return this.permitEntities.update(updateStatusSecurityPermitDto, { where: { id: updateStatusSecurityPermitDto.id } })
    }

    async uploadImageBefore(uploadImageDto: UploadImageDto) {
        return this.imageBeforeEntities.create(uploadImageDto)
    }

    async uploadImageProcess(uploadImageDto: UploadImageDto) {
        return this.imageProcessEntities.create(uploadImageDto)
    }

    async uploadImageAfter(uploadImageDto: UploadImageDto) {
        return this.imageAfterEntities.create(uploadImageDto)
    }

    async updatePermitImageBefore(id, idPermit) {
        return this.permitEntities.update({ imageBeforeId: id }, { where: { id: idPermit } })
    }

    async updatePermitImageProcess(id, idPermit) {
        return this.permitEntities.update({ imageProcessId: id }, { where: { id: idPermit } })
    }

    async updatePermitImageAfter(id, idPermit) {
        return this.permitEntities.update({ imageAfterId: id }, { where: { id: idPermit } })
    }
}

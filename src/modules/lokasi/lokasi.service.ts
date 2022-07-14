import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { lantai } from 'src/entities/lantai';
import { location } from 'src/entities/location';
import { noRack } from 'src/entities/noRack';
import { ruangan } from 'src/entities/ruangan';

@Injectable()
export class LokasiService {
    constructor(
        @InjectModel(location) private readonly locationEntities: typeof location,
        @InjectModel(lantai) private readonly lantaiEntities: typeof lantai,
        @InjectModel(ruangan) private readonly ruangannEntities: typeof ruangan,
        @InjectModel(noRack) private readonly noRackEntities: typeof noRack,
    ) { }

    async findAllLocation(){
        return this.locationEntities.findAll()
    }

    async findOneLocation(id){
        return this.locationEntities.findByPk(id)
    }

    async findAllLantaiByLocation(id){
        return this.lantaiEntities.findAll({
            where: {
                locationId: id
            }
        })
    }

    async findAllRuanganByLocationAndLantai(locationId, lantaiId){
        return this.ruangannEntities.findAll({
            where: {
                locationId: locationId,
                lantaiId: lantaiId
            }
        })
    }

    async findAllNoRackByLocationAndLantaiAndRuangan(locationId, lantaiId, ruanganId){
        return this.noRackEntities.findAll({
            where: {
                locationId: locationId,
                lantaiId: lantaiId,
                ruanganId: ruanganId
            }
        })
    }
}

import { Injectable } from '@nestjs/common';
import * as jwt from 'jsonwebtoken';
import * as CryptoJs from 'crypto-js';
import * as bcrypt from 'bcrypt';
import { v4 as uuidv4 } from 'uuid'
import { InjectModel } from '@nestjs/sequelize';
import { teknisiAuth } from 'src/entities/teknisiAuth';
import { RegisterTeknisiDto } from './dto/register-teknisi.dto';
import { teknisiData } from 'src/entities/teknisiData';
import { LoginTeknisiDto } from './dto/login-teknisi.dto';

@Injectable()
export class TeknisiService {
    constructor(
        @InjectModel(teknisiAuth) private readonly teknisiAuthEntities: typeof teknisiAuth,
        @InjectModel(teknisiData) private readonly teknisiDataEntities: typeof teknisiData,
    ) { }

    async findAll() {
        return this.teknisiAuthEntities.findAll()
    }

    async login(req, loginTeknisiDto: LoginTeknisiDto) {

        // let teknisiData = await this.findOneByEmail(loginTeknisiDto.email)
        let teknisiData = await this.findOneByUserName(loginTeknisiDto.userName)
        console.log("teknisi Data mush")
        console.log(teknisiData)
        if (!teknisiData) {
            return 1;
        }

        const isMatch = await bcrypt.compare(loginTeknisiDto.password, teknisiData.password);
        if (!isMatch) {
            return 2;
        }

        let signOptionsAccess = {
            issuer: process.env.JWT_ISSUER,
            subject: process.env.JWT_SUBJECT,
            audience: process.env.JWT_AUDIENCE,
            expiresIn: process.env.JWT_ACCESS_EXP,
            // algorithm: 'RS256'
        };

        let dataAccess = { userName: teknisiData.userName, email: teknisiData.email };
        let encryptDataAccess = CryptoJs.AES.encrypt(JSON.stringify(dataAccess), process.env.AES_SECRET_KEY).toString();
        let accessToken = await jwt.sign({ data: encryptDataAccess }, process.env.JWT_ACCESS_SECRET, signOptionsAccess);

        let signOptionsRefresh = {
            issuer: process.env.JWT_ISSUER,
            subject: process.env.JWT_SUBJECT,
            audience: process.env.JWT_AUDIENCE,
            expiresIn: process.env.JWT_REFRESH_EXP,
            // algorithm: 'RS256'
        };

        let dataRefresh = { userName: teknisiData.userName, email: teknisiData.email };
        let encryptDataRefresh = CryptoJs.AES.encrypt(JSON.stringify(dataRefresh), process.env.AES_SECRET_KEY).toString();
        let refreshToken = await jwt.sign({ data: encryptDataRefresh }, process.env.JWT_REFRESH_SECRET, signOptionsRefresh);

        let otp = Math.floor(100000 + Math.random() * 900000);

        let teknisiAuthCreate = {
            otp: otp.toString(),
            isOtp: true,
            isEmailVerified: false,
            accessToken: accessToken,
            refreshToken: refreshToken
        }

        await this.teknisiAuthEntities.update(teknisiAuthCreate, { where: { id: teknisiData.id, email: teknisiData.email } });

        return { id: teknisiData.id, fullName: teknisiData.teknisiData.name, userName: teknisiData.userName, email: teknisiData.email, phone: teknisiData.phone, roleId: teknisiData.teknisiData.roleId, accessToken: accessToken, refreshToken: refreshToken }
    }

    async register(registerTeknisiDto: RegisterTeknisiDto) {

        let signOptionsAccess = {
            issuer: process.env.JWT_ISSUER,
            subject: process.env.JWT_SUBJECT,
            audience: process.env.JWT_AUDIENCE,
            expiresIn: process.env.JWT_ACCESS_EXP,
            // algorithm: 'RS256'
        };

        let dataAccess = { userName: registerTeknisiDto.userName, email: registerTeknisiDto.email };
        let encryptDataAccess = CryptoJs.AES.encrypt(JSON.stringify(dataAccess), process.env.AES_SECRET_KEY).toString();
        let accessToken = await jwt.sign({ data: encryptDataAccess }, process.env.JWT_ACCESS_SECRET, signOptionsAccess);

        let signOptionsRefresh = {
            issuer: process.env.JWT_ISSUER,
            subject: process.env.JWT_SUBJECT,
            audience: process.env.JWT_AUDIENCE,
            expiresIn: process.env.JWT_REFRESH_EXP,
            // algorithm: 'RS256'
        };

        let dataRefresh = { userName: registerTeknisiDto.userName, email: registerTeknisiDto.email };
        let encryptDataRefresh = CryptoJs.AES.encrypt(JSON.stringify(dataRefresh), process.env.AES_SECRET_KEY).toString();
        let refreshToken = await jwt.sign({ data: encryptDataRefresh }, process.env.JWT_REFRESH_SECRET, signOptionsRefresh);

        const hashedPassword = await bcrypt.hash(registerTeknisiDto.password, 12);
        let otp = Math.floor(100000 + Math.random() * 900000);

        let teknisiDataCreate = {
            id: uuidv4(),
            name: registerTeknisiDto.fullName,
            roleId: parseInt(registerTeknisiDto.roleId),
            vendorId: registerTeknisiDto.vendorId
        }

        let result = await this.teknisiDataEntities.create(teknisiDataCreate)

        let teknisiAuthCreate = {
            id: uuidv4(),
            teknisiDataId: result.id,
            phone: registerTeknisiDto.phone,
            email: registerTeknisiDto.email,
            userName: registerTeknisiDto.userName,
            password: hashedPassword,
            isSuspend: false,
            otp: otp.toString(),
            isOtp: true,
            isEmailVerified: false,
            accessToken: accessToken,
            refreshToken: refreshToken,
            createdBy: registerTeknisiDto.email
        }

        let teknisiAuth = await this.teknisiAuthEntities.create(teknisiAuthCreate);

        return { id: teknisiAuth.id, fullName: result.name, userName: teknisiAuth.userName, email: teknisiAuth.email, phone: teknisiAuth.phone, roleId: result.roleId, accessToken: teknisiAuth.accessToken, refreshToken: teknisiAuth.refreshToken }
    }

    async findOneByEmail(email) {
        return this.teknisiAuthEntities.findOne({
            include: [{
                model: teknisiData
            }],
            where: { email: email }
        })
    }

    async findOneByUserName(userName) {
        return this.teknisiAuthEntities.findOne({
            include: [{
                model: teknisiData
            }],
            where: { userName: userName }
        })
    }

    async findOneById(id) {
        return this.teknisiAuthEntities.findByPk(id)
    }

    async findOneByTeknisiDataId(id) {
        return this.teknisiAuthEntities.findOne({where: {teknisiDataId: id}})
    }

    async findOneByPhone(phone) {
        return this.teknisiAuthEntities.findOne({
            where: { phone: phone }
        })
    }

    async findAllTeknisiByVendor(id) {
        return this.teknisiDataEntities.findAll({
            where: {
                vendorId: id,
                roleId: 2
            }
        })
    }

    async findAllWaspangByVendor(id) {
        return this.teknisiDataEntities.findAll({
            where: {
                vendorId: id,
                roleId: 3
            }
        })
    }

    async updateAuth(id, updateAuthDto) {
        return this.teknisiAuthEntities.update(updateAuthDto, { where: { id: id } })
    }

    async refreshToken(req, res) {

        let adminData = req.dataTokenAuth;

        let signOptionsAccess = {
            issuer: process.env.JWT_ISSUER,
            subject: process.env.JWT_SUBJECT,
            audience: process.env.JWT_AUDIENCE,
            expiresIn: process.env.JWT_ACCESS_EXP,
            // algorithm: 'RS256'
        };

        let dataAccess = { userName: adminData.userName, email: adminData.email };
        let encryptDataAccess = CryptoJs.AES.encrypt(JSON.stringify(dataAccess), process.env.AES_SECRET_KEY).toString();
        let accessToken = await jwt.sign({ data: encryptDataAccess }, process.env.JWT_ACCESS_SECRET, signOptionsAccess);

        let signOptionsRefresh = {
            issuer: process.env.JWT_ISSUER,
            subject: process.env.JWT_SUBJECT,
            audience: process.env.JWT_AUDIENCE,
            expiresIn: process.env.JWT_REFRESH_EXP,
            // algorithm: 'RS256'
        };

        let dataRefresh = { userName: adminData.userName, email: adminData.email };
        let encryptDataRefresh = CryptoJs.AES.encrypt(JSON.stringify(dataRefresh), process.env.AES_SECRET_KEY).toString();
        let refreshToken = await jwt.sign({ data: encryptDataRefresh }, process.env.JWT_REFRESH_SECRET, signOptionsRefresh);

        let otp = Math.floor(100000 + Math.random() * 900000);

        let adminUpdate = {
            otp: otp.toString(),
            isOtp: true,
            isEmailVerified: false,
            accessToken: accessToken,
            refreshToken: refreshToken
        }

        await this.teknisiAuthEntities.update(adminUpdate, {where: {email: adminData.email}});

        return { accessToken: accessToken, refreshToken: refreshToken }
    }
}

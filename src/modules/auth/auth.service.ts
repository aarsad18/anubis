import { Injectable } from '@nestjs/common';
import * as jwt from 'jsonwebtoken';
import * as CryptoJs from 'crypto-js';
import * as bcrypt from 'bcrypt';
import { v4 as uuidv4 } from 'uuid'
import { InjectModel } from '@nestjs/sequelize';
import { admin } from 'src/entities/admin';
import { RegisterAkunDto } from './dto/register-akun.dto';
import { LoginAkunDto } from './dto/login-akun.dto';

@Injectable()
export class AuthService {
    constructor(
        @InjectModel(admin) private readonly adminEntities: typeof admin,
    ) { }

    async register(req, registerAkunDto: RegisterAkunDto) {

        let signOptionsAccess = {
            issuer: process.env.JWT_ISSUER,
            subject: process.env.JWT_SUBJECT,
            audience: process.env.JWT_AUDIENCE,
            expiresIn: process.env.JWT_ACCESS_EXP,
            // algorithm: 'RS256'
        };

        let dataAccess = { userName: registerAkunDto.userName, email: registerAkunDto.email };
        let encryptDataAccess = CryptoJs.AES.encrypt(JSON.stringify(dataAccess), process.env.AES_SECRET_KEY).toString();
        let accessToken = await jwt.sign({ data: encryptDataAccess }, process.env.JWT_ACCESS_SECRET, signOptionsAccess);

        let signOptionsRefresh = {
            issuer: process.env.JWT_ISSUER,
            subject: process.env.JWT_SUBJECT,
            audience: process.env.JWT_AUDIENCE,
            expiresIn: process.env.JWT_REFRESH_EXP,
            // algorithm: 'RS256'
        };

        let dataRefresh = { userName: registerAkunDto.userName, email: registerAkunDto.email };
        let encryptDataRefresh = CryptoJs.AES.encrypt(JSON.stringify(dataRefresh), process.env.AES_SECRET_KEY).toString();
        let refreshToken = await jwt.sign({ data: encryptDataRefresh }, process.env.JWT_REFRESH_SECRET, signOptionsRefresh);

        const hashedPassword = await bcrypt.hash(registerAkunDto.password, 12);
        let otp = Math.floor(100000 + Math.random() * 900000);

        let adminCreate = {
            id: uuidv4(),
            roleId: parseInt(registerAkunDto.roleId),
            phone: registerAkunDto.phone,
            email: registerAkunDto.email,
            userName: registerAkunDto.userName,
            password: hashedPassword,
            isSuspend: false,
            otp: otp.toString(),
            isOtp: true,
            isEmailVerified: false,
            accessToken: accessToken,
            refreshToken: refreshToken,
            createdBy: registerAkunDto.email
        }

        let admin = await this.adminEntities.create(adminCreate);

        return { id: admin.id, userName: registerAkunDto.userName, email: admin.email, phone: admin.phone, roleId: admin.roleId, accessToken: admin.accessToken, refreshToken: admin.refreshToken }
    }

    async findOneByEmail(email) {
        return this.adminEntities.findOne({
            where: { email: email }
        })
    }

    async findOneByUsername(userName) {
        return this.adminEntities.findOne({
            where: { userName: userName }
        })
    }

    async findOneById(id) {
        return this.adminEntities.findByPk(id)
    }

    async login(req, loginAkunDto: LoginAkunDto) {
        // let adminData = await this.findOneByEmail(loginAkunDto.email)
        // if (!adminData) {
        //     return 1;
        // }

        let adminData = await this.findOneByUsername(loginAkunDto.userName)
        if (!adminData) {
            return 1;
        }

        const isMatch = await bcrypt.compare(loginAkunDto.password, adminData.password);
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

        let data = await this.adminEntities.update(adminUpdate, {where: {id: adminData.id, email: adminData.email}});

        return { id: adminData.id, userName: loginAkunDto.userName, email: adminData.email, phone: adminData.phone, roleId: adminData.roleId, accessToken: accessToken, refreshToken: refreshToken }
    }

    async findOneByPhone(phone) {
        return this.adminEntities.findOne({
            where: { phone: phone }
        })
    }

    update(data, akunId: string) {
        return this.adminEntities.update(data, { where: { email: akunId } });
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

        await this.adminEntities.update(adminUpdate, {where: {email: adminData.email}});

        return { accessToken: accessToken, refreshToken: refreshToken }
    }
}

import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { vendor } from 'src/entities/vendor';
import { v4 as uuidv4 } from 'uuid'

@Injectable()
export class VendorService {
    constructor(
        @InjectModel(vendor) private readonly vendorEntities: typeof vendor,
    ) { }

    async findAll(){
        return this.vendorEntities.findAll()
    }

    async findOne(id){
        return this.vendorEntities.findByPk(id)
    }
}

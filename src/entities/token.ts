import { Model, Table, Column, DataType, Index, Sequelize } from "sequelize-typescript";

interface tokenAttributes {
    id?: number;
    token?: string;
    statusToken?: string;
    permitId?: number;
    locationId?: number;
    teknisiAuthId?: string;
    vendorId?: string;
    vendor?: string;
}

@Table({ tableName: "token", timestamps: false })
export class token extends Model<tokenAttributes, tokenAttributes> implements tokenAttributes {
    @Column({ primaryKey: true, allowNull: false, type: DataType.NUMBER, autoIncrement: true })
    @Index({ name: "token_pkey", using: "btree", unique: true })
    id?: number;
    @Column({ allowNull: false, type: DataType.STRING })
    token?: string;
    @Column({ field: "status_token", allowNull: false, type: DataType.STRING })
    statusToken?: string;
    @Column({ field: "permit_id", allowNull: false, type: DataType.NUMBER })
    permitId?: number;
    @Column({ field: "location_id", allowNull: false, type: DataType.NUMBER })
    locationId?: number;
    @Column({ field: "teknisi_auth_id", allowNull: false, type: DataType.STRING })
    teknisiAuthId?: string;
    @Column({ field: "vendor_id", allowNull: false, type: DataType.STRING })
    vendorId?: string;
    @Column({ allowNull: true, type: DataType.STRING })
    vendor?: string;
}
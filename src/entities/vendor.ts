import { Model, Table, Column, DataType, Index, Sequelize } from "sequelize-typescript";

interface vendorAfterAttributes {
    id?: string
    name?: string
}

@Table({ tableName: "vendor", timestamps: false })
export class vendor extends Model<vendorAfterAttributes, vendorAfterAttributes> implements vendorAfterAttributes {
    @Column({ primaryKey: true, type: DataType.STRING, allowNull: false })
    @Index({ name: "vendor_pkey", using: "btree", unique: true })
    id?: string;
    @Column({ allowNull: true, type: DataType.STRING })
    name?: string;
}
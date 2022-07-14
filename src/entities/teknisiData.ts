import { Model, Table, Column, DataType, Index, Sequelize } from "sequelize-typescript";

interface teknisiDataAttributes {
    id?: string;
    roleId?: number;
    vendorId?: string;
    name?: string;
    gender?: string;
    jobDesc?: string;
}

@Table({ tableName: "teknisi_data", timestamps: false })
export class teknisiData extends Model<teknisiDataAttributes, teknisiDataAttributes> implements teknisiDataAttributes {
    @Column({ primaryKey: true, allowNull: false, type: DataType.STRING })
    @Index({ name: "teknisi_data_pkey", using: "btree", unique: true })
    id?: string;
    @Column({ field: "role_id", allowNull: false, type: DataType.NUMBER })
    roleId?: number;
    @Column({ field: "vendor_id", allowNull: false, type: DataType.STRING })
    vendorId?: string;
    @Column({ allowNull: true, type: DataType.STRING })
    name?: string;
    @Column({ allowNull: true, type: DataType.STRING })
    gender?: string;
    @Column({ field: "job_desc", type: DataType.STRING })
    @Column({ allowNull: true, type: DataType.TEXT })
    jobDesc?: string;
}
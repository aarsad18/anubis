import { Model, Table, Column, DataType, Index, Sequelize } from "sequelize-typescript";

interface roleAttributes {
    id?: number;
    name?: string;
    kode?: string;
    description?: string;
}

@Table({ tableName: "role", timestamps: false })
export class role extends Model<roleAttributes, roleAttributes> implements roleAttributes {
    @Column({ primaryKey: true, type: DataType.NUMBER, autoIncrement: true })
    @Index({ name: "role_pkey", using: "btree", unique: true })
    id?: number;
    @Column({ allowNull: false, type: DataType.STRING })
    name?: string;
    @Column({ allowNull: false, type: DataType.STRING })
    kode?: string;
    @Column({ allowNull: true, type: DataType.TEXT })
    description?: string;
}
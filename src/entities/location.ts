import { Model, Table, Column, DataType, Index, Sequelize } from "sequelize-typescript";

interface locationAttributes {
    id?: number;
    name?: string;
}

@Table({ tableName: "location", timestamps: false })
export class location extends Model<locationAttributes, locationAttributes> implements locationAttributes {
    @Column({ primaryKey: true, type: DataType.NUMBER, autoIncrement: true })
    @Index({ name: "location_pkey", using: "btree", unique: true })
    id?: number;
    @Column({ allowNull: false, type: DataType.STRING })
    @Index({ name: "location_name_pkey", using: "btree", unique: true })
    name?: string;
}
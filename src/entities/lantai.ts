import { Model, Table, Column, DataType, Index, Sequelize } from "sequelize-typescript";

interface lantaiAttributes {
    id?: number;
    name?: string;
    locationId?: number;
}

@Table({ tableName: "lantai", timestamps: false })
export class lantai extends Model<lantaiAttributes, lantaiAttributes> implements lantaiAttributes {
    @Column({ primaryKey: true, type: DataType.NUMBER, autoIncrement: true })
    @Index({ name: "lantai_pkey", using: "btree", unique: true })
    id?: number;
    @Column({ allowNull: false, type: DataType.STRING })
    @Index({ name: "lantai_name_pkey", using: "btree", unique: true })
    name?: string;
    @Column({ field: "location_id", allowNull: false, type: DataType.NUMBER })
    locationId?: number;
}
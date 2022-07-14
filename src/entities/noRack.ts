import { Model, Table, Column, DataType, Index, Sequelize } from "sequelize-typescript";

interface noRackAttributes {
    id?: number;
    name?: string;
    locationId?: number;
    lantaiId?: number;
    ruanganId?: number;
}

@Table({ tableName: "no_rack", timestamps: false })
export class noRack extends Model<noRackAttributes, noRackAttributes> implements noRackAttributes {
    @Column({ primaryKey: true, type: DataType.NUMBER, autoIncrement: true })
    @Index({ name: "ruangan_pkey", using: "btree", unique: true })
    id?: number;
    @Column({ allowNull: false, type: DataType.STRING })
    @Index({ name: "ruangan_name_pkey", using: "btree", unique: true })
    name?: string;
    @Column({ field: "location_id", allowNull: false, type: DataType.NUMBER })
    locationId?: number;
    @Column({ field: "lantai_id", allowNull: false, type: DataType.NUMBER })
    lantaiId?: number;
    @Column({ field: "ruangan_id", allowNull: false, type: DataType.NUMBER })
    ruanganId?: number;
}
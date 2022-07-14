import { Model, Table, Column, DataType, Index, Sequelize } from "sequelize-typescript";

interface locationDataAttributes {
    id?: number;
    name?: string;
    locationId?: number;
    lantaiId?: number;
    ruanganId?: number;
    noRackId?: number;
}

@Table({ tableName: "location_data", timestamps: false })
export class locationData extends Model<locationDataAttributes, locationDataAttributes> implements locationDataAttributes {
    @Column({ primaryKey: true, type: DataType.NUMBER, autoIncrement: true })
    @Index({ name: "location_data_pkey", using: "btree", unique: true })
    id?: number;
    @Column({ allowNull: false, type: DataType.STRING })
    @Index({ name: "location_data_name_pkey", using: "btree", unique: true })
    name?: string;
    @Column({ field: "location_id", allowNull: true, type: DataType.NUMBER })
    locationId?: number;
    @Column({ field: "lantai_id", allowNull: true, type: DataType.NUMBER })
    lantaiId?: number;
    @Column({ field: "ruangan_id", allowNull: true, type: DataType.NUMBER })
    ruanganId?: number;
    @Column({ field: "no_rack_id", allowNull: true, type: DataType.NUMBER })
    noRackId?: number;
}
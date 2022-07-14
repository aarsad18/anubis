import { Model, Table, Column, DataType, Index, Sequelize } from "sequelize-typescript";

interface imageProcessAttributes {
    id?: string;
    image?: string;
    name?: string;
    description?: string;
}

@Table({ tableName: "image_process", timestamps: false })
export class imageProcess extends Model<imageProcessAttributes, imageProcessAttributes> implements imageProcessAttributes {
    @Column({ primaryKey: true, type: DataType.NUMBER, autoIncrement: true })
    @Index({ name: "image_process_pkey", using: "btree", unique: true })
    id?: string;
    @Column({ allowNull: true, type: DataType.STRING })
    @Index({ name: "image_process_image_pkey", using: "btree", unique: true })
    image?: string;
    @Column({ allowNull: true, type: DataType.STRING })
    name?: string;
    @Column({ allowNull: true, type: DataType.TEXT })
    description?: string;
}
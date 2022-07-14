import { Model, Table, Column, DataType, Index, Sequelize } from "sequelize-typescript";

interface imageAfterAttributes {
    id?: number;
    image?: string;
    name?: string;
    description?: string;
}

@Table({ tableName: "image_after", timestamps: false })
export class imageAfter extends Model<imageAfterAttributes, imageAfterAttributes> implements imageAfterAttributes {
    @Column({ primaryKey: true, type: DataType.NUMBER, autoIncrement: true })
    @Index({ name: "image_after_pkey", using: "btree", unique: true })
    id?: number;
    @Column({ allowNull: true, type: DataType.STRING })
    @Index({ name: "image_after_image_pkey", using: "btree", unique: true })
    image?: string;
    @Column({ allowNull: true, type: DataType.STRING })
    name?: string;
    @Column({ allowNull: true, type: DataType.TEXT })
    description?: string;
}
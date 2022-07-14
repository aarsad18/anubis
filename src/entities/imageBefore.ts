import { Model, Table, Column, DataType, Index, Sequelize } from "sequelize-typescript";

interface imageBeforeAttributes {
    id?: string;
    image?: string;
    name?: string;
    description?: string;
}

@Table({ tableName: "image_before", timestamps: false })
export class imageBefore extends Model<imageBeforeAttributes, imageBeforeAttributes> implements imageBeforeAttributes {
    @Column({ primaryKey: true, type: DataType.NUMBER, autoIncrement: true })
    @Index({ name: "image_before_pkey", using: "btree", unique: true })
    id?: string;
    @Column({ allowNull: true, type: DataType.STRING })
    @Index({ name: "image_before_image_pkey", using: "btree", unique: true })
    image?: string;
    @Column({ allowNull: true, type: DataType.STRING })
    name?: string;
    @Column({ allowNull: true, type: DataType.TEXT })
    description?: string;
}
import { Model, Table, Column, DataType, Index, Sequelize } from "sequelize-typescript";

interface adminAttributes {
  id?: string;
  roleId?: number;
  email?: string;
  phone?: string;
  userName?: string;
  password?: string;
  isSuspend?: boolean;
  authToken?: string;
  accessToken?: string;
  refreshToken?: string;
  otp?: string;
  isOtp?: boolean;
  isEmailVerified?: boolean;
  createAt?: Date,
  createBy?: string;
  updateAt?: Date;
  updateBy?: string;
}

@Table({ tableName: "admin", timestamps: false })
export class admin extends Model<adminAttributes, adminAttributes> implements adminAttributes {
  @Column({ primaryKey: true, type: DataType.STRING(36), allowNull: false })
  @Index({ name: "admin_pkey", using: "btree", unique: true })
  id?: string;
  @Column({ field: "role_id", allowNull: false, type: DataType.NUMBER })
  roleId?: number;
  @Column({ allowNull: false, type: DataType.STRING })
  @Index({ name: "admin_email_key", using: "btree", unique: true })
  email?: string;
  @Column({ allowNull: false, type: DataType.STRING })
  @Index({ name: "admin_phone_key", using: "btree", unique: true })
  phone?: string;
  @Column({ field: "user_name", allowNull: false, type: DataType.STRING })
  @Index({ name: "admin_user_name_key", using: "btree", unique: true })
  userName?: string;
  @Column({ allowNull: false, type: DataType.STRING })
  password?: string;
  @Column({ field: "is_suspend", allowNull: true, type: DataType.BOOLEAN })
  isSuspend?: boolean;
  @Column({ field: "auth_token", allowNull: true, type: DataType.TEXT })
  authToken?: string;
  @Column({ field: "access_token", allowNull: true, type: DataType.TEXT })
  accessToken?: string;
  @Column({ field: "refresh_token", allowNull: true, type: DataType.TEXT })
  refreshToken?: string;
  @Column({ allowNull: true, type: DataType.STRING })
  otp?: string;
  @Column({ field: "is_otp", allowNull: true, type: DataType.BOOLEAN })
  isOtp?: boolean;
  @Column({ field: "is_email_verified", allowNull: true, type: DataType.BOOLEAN })
  isEmailVerified?: boolean;
  @Column({ field: "created_at", allowNull: true, type: DataType.DATE, defaultValue: Sequelize.literal('TIMESTAMP(DATE(now()), TIME(now()))') })
  createdAt?: Date;
  @Column({ field: "created_by", allowNull: true, type: DataType.STRING })
  createBy?: string;
  @Column({ field: "update_at", allowNull: true, type: DataType.DATE, defaultValue: Sequelize.literal('TIMESTAMP(DATE(now()), TIME(now()))') })
  updateAt?: Date;
  @Column({ field: "update_by", allowNull: true, type: DataType.STRING })
  updateBy?: string;
}
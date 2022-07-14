import { Transform } from "class-transformer";
import * as moment from "moment";
import { Model, Table, Column, DataType, Index, Sequelize } from "sequelize-typescript";

interface permitAttributes {
  id?: number;
  adminId?: string;
  teknisiDataId?: string;
  waspangId?: string;
  vendorId?: string;
  vendor?: string;
  status?: string;
  statusSecurity?: string;
  code?: string;
  nde?: string;
  simaru?: string;
  title?: string;
  description?: string;
  locationId?: number;
  lantaiId?: number;
  ruanganId?: number;
  noRackId?: number;
  token?: string;
  toDo?: string;
  imageBeforeId?: number;
  imageProcessId?: number;
  imageAfterId?: number;
  createdAt?: string;
}

@Table({ tableName: "permit", timestamps: false })
export class permit extends Model<permitAttributes, permitAttributes> implements permitAttributes {
  @Column({ primaryKey: true, type: DataType.NUMBER, autoIncrement: true })
  @Index({ name: "permit_pkey", using: "btree", unique: true })
  id?: number;
  @Column({ field: "admin_id", allowNull: false, type: DataType.STRING })
  @Index({ name: "permit_admin_id_pkey", using: "btree" })
  adminId?: string;
  @Column({ field: "teknisi_data_id", allowNull: false, type: DataType.STRING })
  @Index({ name: "permit_teknisi_data_id_pkey", using: "btree" })
  teknisiDataId?: string;
  @Column({ field: "waspang_id", allowNull: false, type: DataType.STRING })
  waspangId?: string;
  @Column({ field: "vendor_id", allowNull: false, type: DataType.STRING })
  @Index({ name: "permit_vendor_id_pkey", using: "btree" })
  vendorId?: string;
  @Column({ allowNull: true, type: DataType.STRING })
  @Index({ name: "permit_vendor_key", using: "btree" })
  vendor?: string;
  @Column({ allowNull: true, type: DataType.STRING })
  @Index({ name: "permit_status_key", using: "btree" })
  status?: string;
  @Column({ field: "status_security", allowNull: true, type: DataType.STRING })
  @Index({ name: "permit_status_security_key", using: "btree" })
  statusSecurity?: string;
  @Column({ allowNull: false, type: DataType.STRING })
  @Index({ name: "permit_code_key", using: "btree" })
  code?: string;
  @Column({ allowNull: true, type: DataType.STRING })
  nde?: string;
  @Column({ allowNull: true, type: DataType.STRING })
  simaru?: string;
  @Column({ allowNull: false, type: DataType.STRING })
  title?: string;
  @Column({ allowNull: true, type: DataType.TEXT })
  description?: string;
  @Column({ field: "location_id", allowNull: false, type: DataType.NUMBER })
  @Index({ name: "permit_location_id_pkey", using: "btree" })
  locationId?: number;
  @Column({ field: "lantai_id", allowNull: false, type: DataType.NUMBER })
  lantaiId?: number;
  @Column({ field: "ruangan_id", allowNull: false, type: DataType.NUMBER })
  ruanganId?: number;
  @Column({ field: "no_rack_id", allowNull: false, type: DataType.NUMBER })
  noRackId?: number;
  @Column({ allowNull: true, type: DataType.TEXT })
  token?: string;
  @Column({ field: "to_do", allowNull: true, type: DataType.TEXT })
  toDo?: string;
  @Column({ field: "image_before_id", allowNull: true, type: DataType.NUMBER })
  imageBeforeId?: number;
  @Column({ field: "image_process_id", allowNull: true, type: DataType.NUMBER })
  imageProcessId?: number;
  @Column({ field: "image_after_id", allowNull: true, type: DataType.NUMBER })
  imageAfterId?: number;
  @Column({ field: "created_at", allowNull: true, type: DataType.STRING })
  createdAt?: string;
}
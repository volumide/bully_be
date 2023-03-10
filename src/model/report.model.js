import { Model, DataTypes } from "sequelize"
import sequelize from "../config/db.js"

class Report extends Model {}
Report.init(
  {
    id: { type: DataTypes.INTEGER, allowNull: false, primaryKey: true, autoIncrement: true },
    user_id: { type: DataTypes.STRING, allowNull: false },
    first_name: DataTypes.STRING,
    last_name: DataTypes.STRING,
    phone: DataTypes.STRING,
    report_type: DataTypes.STRING,
    email: DataTypes.STRING,
    school_name: DataTypes.STRING,
    zip_code: DataTypes.STRING,
    admin_email: DataTypes.STRING,
    bully_teacher: DataTypes.STRING,
    bully_fname: DataTypes.STRING,
    bully_lname: DataTypes.STRING,
    bully_gender: DataTypes.STRING,
    bully_grade: DataTypes.STRING,
    incident_date: DataTypes.STRING,
    incident_time: DataTypes.STRING,
    incident_time: DataTypes.STRING,
    staff_witnessed: DataTypes.STRING,
    staff_witness: DataTypes.STRING,
    staff_action: DataTypes.STRING,
    incident_place: DataTypes.STRING,
    physical_abused: DataTypes.STRING,
    victim_handicapped: DataTypes.STRING,
    victim_younger: DataTypes.STRING,
    details: DataTypes.STRING,
    serail_bully: DataTypes.STRING,
    other_incidents: DataTypes.STRING,
    video_link: DataTypes.STRING,

    threat_name: DataTypes.STRING,
    threat_gender: DataTypes.STRING,
    threat_grade: DataTypes.STRING,
    threat_teacher: DataTypes.STRING,
    threat_date: DataTypes.STRING,
    threat_student_aware: DataTypes.STRING,
    threat_other_student: DataTypes.STRING,
    threat_details: DataTypes.STRING,

    w_name: DataTypes.STRING,
    w_gender: DataTypes.STRING,
    w_grade: DataTypes.STRING,
    w_teacher: DataTypes.STRING,
    w_type: DataTypes.STRING,
    w_other_students: DataTypes.STRING,
    w_sknow: DataTypes.STRING,
    w_details: DataTypes.STRING,
    bully_witnessed: DataTypes.STRING,
    bully_witness: DataTypes.STRING,
    bully_witnesses: DataTypes.STRING,
    w_keep: DataTypes.STRING,
    w_student_aware: DataTypes.STRING,

    blyg_first_name1: DataTypes.STRING,
    blyg_first_name2: DataTypes.STRING,
    blyg_first_name3: DataTypes.STRING,

    blyg_last_name1: DataTypes.STRING,
    blyg_last_name2: DataTypes.STRING,
    blyg_last_name3: DataTypes.STRING,

    blyg_gender1: DataTypes.STRING,
    blyg_gender2: DataTypes.STRING,
    blyg_gender3: DataTypes.STRING,

    blyg_grade1: DataTypes.STRING,
    blyg_grade2: DataTypes.STRING,
    blyg_grade3: DataTypes.STRING,

    blyg_teacher1: DataTypes.STRING,
    blyg_teacher2: DataTypes.STRING,
    blyg_teacher3: DataTypes.STRING,

    blyv_first_name1: DataTypes.STRING,
    blyv_first_name2: DataTypes.STRING,
    blyv_first_name3: DataTypes.STRING,

    blyv_last_name1: DataTypes.STRING,
    blyv_last_name2: DataTypes.STRING,
    blyv_last_name3: DataTypes.STRING,

    blyv_gender1: DataTypes.STRING,
    blyv_gender2: DataTypes.STRING,
    blyv_gender3: DataTypes.STRING,

    blyv_grade1: DataTypes.STRING,
    blyv_grade2: DataTypes.STRING,
    blyv_grade3: DataTypes.STRING,

    blyv_teacher1: DataTypes.STRING,
    blyv_teacher2: DataTypes.STRING,
    blyv_teacher3: DataTypes.STRING,

    blyw_first_name1: DataTypes.STRING,
    blyw_first_name2: DataTypes.STRING,
    blyw_first_name3: DataTypes.STRING,

    blyw_last_name1: DataTypes.STRING,
    blyw_last_name2: DataTypes.STRING,
    blyw_last_name3: DataTypes.STRING,

    blyw_gender1: DataTypes.STRING,
    blyw_gender2: DataTypes.STRING,
    blyw_gender3: DataTypes.STRING,

    blyw_grade1: DataTypes.STRING,
    blyw_grade2: DataTypes.STRING,
    blyw_grade3: DataTypes.STRING,

    blyw_teacher1: DataTypes.STRING,
    blyw_teacher2: DataTypes.STRING,
    blyw_teacher3: DataTypes.STRING,
    details_total: DataTypes.STRING,
    trustee: DataTypes.TEXT,
    deletedAt: DataTypes.DATE
  },
  { sequelize, tableName: "reports", paranoid: true }
)
export default Report

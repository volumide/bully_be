import { Model, DataTypes } from "sequelize"
import sequelize from "../config/db.js"

class Content extends Model {}
Content.init(
  {
    id: { type: DataTypes.INTEGER, allowNull: false, primaryKey: true },
    title: { type: DataTypes.STRING, allowNull: false },
    content: DataTypes.TEXT,
    videoLink: DataTypes.TEXT,
    deletedAt: DataTypes.DATE
  },
  { sequelize, tableName: "contents", paranoid: true }
)
export default Content

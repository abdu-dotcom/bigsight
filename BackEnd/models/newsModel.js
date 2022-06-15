import { Sequelize } from "sequelize";
import db from "../config/database.js";

const { DataTypes } = Sequelize;

const News = db.define('news', {
    title: {
        type: DataTypes.STRING
    },
    description: {
        type: DataTypes.STRING
    },
    img: {
        type: DataTypes.STRING
    }
}, {
    freezeTableName: true
})

export default News;
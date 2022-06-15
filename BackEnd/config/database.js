import { Sequelize } from "sequelize";

const db = new Sequelize('bigsight', 'root', '', {
    host: "localhost",
    dialect: "mysql"
})

export default db;
import { config } from "dotenv";
config()
import { Sequelize } from "sequelize";



const {SERVICE_URI} = process.env

const sequelize = new Sequelize(SERVICE_URI, {
    dialect: "postgres"
})


export default sequelize;
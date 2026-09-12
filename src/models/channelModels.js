import { truncates } from "bcryptjs";
import sequelize from "../config/dbConnection.js";
import { DataTypes } from "sequelize";



const Channel = sequelize.define("Channel", {

    id : {
        type: DataTypes.STRING,
        primaryKey: true,
        autoIncrement: true,
        unique: true
    },
    uuid: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        unique: true
    },
    name: {
        type: DataTypes.STRING,
        unique: true,
        allowNull: false
    },
    streamUrl: {
        type: DataTypes.STRING,
        allowNull: false

    },
    type: {
        type: DataTypes.STRING,
        allowNull: false
    },
    category : {
        type: DataTypes.STRING,
        defaultValue : "all"
    },
    description: {
        type: DataTypes.STRING,
        allowNull: true,

    },
    isLive: {
        type: DataTypes.STRING
    },
    logo: {
        type: DataTypes.STRING,
        defaultValue: "https://placehold.net/default.png"
    }
})

Channel.sync()


export default Channel;
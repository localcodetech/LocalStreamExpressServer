import app from "./src/init.js";
import { config } from "dotenv";
config();
import sequelize from "./src/config/dbConnection.js";
import {writeFile, readFile} from "fs/promises";


const {PORT} = process.env;
const ERROR_FILE = "logs/logging.txt"


const main =async ()=>{
    console.log("... \n STARTING SERVER .... PLEASE WAIT .... \n ")

    try{
        await sequelize.authenticate()

        console.log("...  DATABASE CONNECTED SUCCESSFULLY ... ")


        app.use("/", (_,res)=>{
            res.status(200).json({message: "ok"})
        })
        app.listen(PORT,
            ()=>{
                console.log(`\n express is running on http://127.0.0.1:${PORT} \n`)
            }
        )
    }catch(error){
            await  writeFile(ERROR_FILE,error.message, {mode: '007'} )
    }



};

main();
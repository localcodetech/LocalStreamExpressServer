import app from "./src/init.js";
import { config } from "dotenv";
config();


const {PORT} = process.env;



const main =async ()=>{


    try{


        app.use("/", (_,res)=>{
            res.status(200).json({message: "ok"})
        })
        app.listen(PORT,
            ()=>{
                console.log("")
            }
        )
    }catch(error){

    }



};

main();
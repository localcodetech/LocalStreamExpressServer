// import { registerNewChannel } from "../controllers/channelControllers.js";

import { Router } from "express";

    const router  = Router();
//     const postController =  registerNewChannel()


    // router.post("/channel", postController);

    router.get("/health", (_,res)=>{res.status(200).json({message: "Channel Route is reachable"})})

 
    
    export default router;



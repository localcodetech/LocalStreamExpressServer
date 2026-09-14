import { registerNewChannel, getAllChannel } from "../controllers/channelControllers.js";

import { Router } from "express";

    const router  = Router();


    router.post("/channel", registerNewChannel);
    router.get("/channel", getAllChannel)

    router.get("/health", (_,res)=>{res.status(200).json({message: "Channel Route is reachable"})})

 
    
    export default router;



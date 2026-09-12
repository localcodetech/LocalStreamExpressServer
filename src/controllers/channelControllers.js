import schema from "../schemas/channelSchema.js";


import { ChannelServices } from "../services/channelServices.js";



export const registerNewChannel = async (req, res) =>{

    const channelValidation = await schema.safeParseAsync(req.body)

    if (!channelValidation.success){
        return res.status(400).json({error: channelValidation.error.message})
    };



    try{

        const data =  await ChannelServices(channelValidation.data)

        res.status(201).json({message: "data created", data:data})

    }catch(err){

    }

}
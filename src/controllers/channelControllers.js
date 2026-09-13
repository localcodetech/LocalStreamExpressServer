import schema from "../schemas/channelSchema.js";


import { ChannelServices } from "../services/channelServices.js";



export const registerNewChannel = async (req, res) =>{
    console.log(req.body)
    const channelValidation = await schema.safeParseAsync(req.body)

    if (!channelValidation.success){
        return res.status(400).json({error: channelValidation.error.message})
    };



    try{

        const data =  await ChannelServices(channelValidation.data)

       return  res.status(201).json({message: "data created", data:data})

    }catch(err){
          return  res.status(500).json({error: err.message})
    }

}
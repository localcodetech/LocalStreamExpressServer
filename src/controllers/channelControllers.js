import schema from "../schemas/channelSchema.js";


import { ChannelServices, findChannels } from "../services/channelServices.js";



export const registerNewChannel = async (req, res) =>{
    console.log(req.body)
    const channelValidation = await schema.safeParseAsync(req.body)

    if (!channelValidation.success){
        return res.status(400).json({error: channelValidation.error.message})
    };



    try{

        const data =   ChannelServices(channelValidation.data)

       return  res.status(201).json({message: "data created", data:data})

    }catch(err){
          return  res.status(500).json({error: err.message})
    }

};


export const getAllChannel = async (req, res) =>{

    const channels = await findChannels()

    try{
      return   res.status(200).json(channels);
    }
    catch(err){
        return res.status(500).json({error: err.message})
    }

}
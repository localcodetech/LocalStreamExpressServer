import { findAllChannel,findByCategory, findByName, findByPk, findByType, createNewChannel } from "../repositories/channelRepositories.js";

import { isStreamUrlActive } from "../utils/isStreamurlActve.js";



export const ChannelServices = async ({name, category, type, isLive, description, streamUrl, logo }) =>{


    const sanitize = (channel)=>{
        return {
            name: channel.name,
            type: channel.type,
            category: channel.category,
            description: channel.description,
            logo : channel.logo,
            streamUrl: channel.streamUrl,
            createdAt: channel.createdAt
        }
    }


    const isChannelExist = await findByName(name);

    const streamActive = await isStreamUrlActive(streamUrl);



if (isChannelExist){
    throw new Error ("Error: Channel already in our Database ...")
};



        const createChannel =  createNewChannel({name, logo, description,type,category, streamUrl, isLive:streamActive })


        return sanitize(createChannel)
};

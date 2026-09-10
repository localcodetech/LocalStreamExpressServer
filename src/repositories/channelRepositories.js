import Channel from "../models/channelModels.js";




// QUERIES HERE 

export const findAllChannel = async () => {
    return await Channel.findAll();
};


export const findByName = async (name) =>{
    return await Channel.findOne({where: {name: name}})
}


export const findByPk = async  (id) =>{
    return await Channel.findByPk(id)
}


export const findByType = async (type) =>{
    return await Channel.findOne({where: {type: type}});
};

export const findByCategory = async (category) =>{
    return await Channel.findOne({where: {category:category }})
}



// create 

export const createNewChannel = async (channel)=>{
            return await Channel.create(channel)
}
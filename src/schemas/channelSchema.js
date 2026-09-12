import {z as zod} from "zod"



const schema = zod.object({
    name: zod.string().trim().min(3),
    category : zod.enum(["all", "news", "gospel", "music", "sports", "movies", "documentary"]),
    type : zod.enum(["radio", "tv"]),
    streamUrl: zod.url(),
    description : zod.string().trim().optional(),
    logo: zod.url(),
    
})


export default schema;
import {z as zod} from "zod"



const schema = zod.object({
    name: zod.string().trim().min(3),
    category : zod.enum([])
})
import z from "zod"


export const registerSchema = z.object({
    name:z.string()
    .min(3,"name must be at latest 3 charcters")
    .max(10,"name must be at most 10 charcters")
    .min(1,"name is required"),
    email:z.string().min(1,"email is required").pipe(z.email("invaild email")),
    password:z.string().min(1,"password is required").min(6,"password must be at leaest 6 charcters"),
    rePassword:z.string().min(1,"rePassword is required"),
    phone:z.string().min(1,"phone is required").regex(/^01[0125][0-9]{8}$/,"phone must be egyption number"),
}).refine((object)=>object.password === object.rePassword,{
    path:["repassword"],
    error:"password and rePassword must be same"
});


export type registerSchemaType = z.infer<typeof registerSchema >
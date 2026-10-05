import z from "zod"

export const loginSchema = z.object({
   
    email:z.string().min(1,"email is required").pipe(z.email("invaild email")),
    password:z.string().min(1,"password is required").min(6,"password must be at leaest 6 charcters"),
    
});


export type loginSchemaType = z.infer<typeof loginSchema >
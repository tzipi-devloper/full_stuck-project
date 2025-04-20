import { z } from "zod";

const schema = z.object({
    name: z.string().min(1, { message: "name is required" }),
    email: z.string().email({ message: "invalid email address" }),
    password: z.string().min(1, { message: "password is required" }),
    confirmPassword: z.string().min(1, { message: "confirmPassword is required" }),
    phone:z.string().regex(/^\d{9,10}$/, { message: "Phone must be 9 or 10 digits" })
}).refine(data => data.password === data.confirmPassword, {
    message: "Passwords must match exactly",
    path: ["confirmPassword"],
});


export default schema
import bcrypt from "bcryptjs"
import { v4 as uuidv4 } from "uuid"
import supabase from "../config/supabaseClient.js"
import { generateToken } from "../utils/generateToken.js"

export const signup = async(req,res)=>{

    const {name,email,password} = req.body

    const hashedPassword = await bcrypt.hash(password,10)

    const id = uuidv4()

    const {data,error} = await supabase
        .from("users")
        .insert([
            {
                id,
                name,
                email,
                password: hashedPassword,
                balance: 10000
            }
        ])

    if(error){
        console.log("Signup Error:", error)
        return res.status(400).json(error)
    }

    res.json({message:"User created"})
}

export const login = async(req,res)=>{

    const {email,password} = req.body

    const {data:user,error} = await supabase
        .from("users")
        .select("*")
        .eq("email",email)
        .single()

    if(!user) return res.status(400).json({message:"User not found"})

    const match = await bcrypt.compare(password,user.password)

    if(!match) return res.status(400).json({message:"Wrong password"})
if(!user || !email || !password){
    return res.status(400).json({message:"All fields required"})
}
    const token = generateToken(user)

    res.json({
        token,
        user
    })
}
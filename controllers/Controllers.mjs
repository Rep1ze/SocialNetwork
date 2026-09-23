const __dirname = import.meta.dirname
import path from "node:path"
import { user } from "../objectlogin.mjs"

const users = []

export const RegisterGet = (req,res)=>{
    try{
        res.sendFile(path.join(__dirname + "..","..","/P3.html"))
    }catch(e){
        console.log(e)
    }
}
export const HomeGet = (req,res)=>{
    try{
        res.sendFile(path.join(__dirname + "..","..","/P.html"))
    }catch(e){
        console.log(e)
    }
}
export const RegisterPost = (req,res)=>{
    try{
        const NewUser = new user(req.body,user.email = req.body,user.password = req.body)
        users.push(NewUser)
        res.json(users)
    }catch(e){
        console.log(e)
    }
}
export const HomePost = (req,res)=>{
    try{
        res.json("post test")
    }catch(e){
        console.log(e)
    }
}
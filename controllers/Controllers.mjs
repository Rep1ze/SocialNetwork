import path from "node:path";
import { dirname } from 'node:path';
import { fileURLToPath } from 'node:url';


const __dirname = dirname(fileURLToPath(import.meta.url));

export const homeGet =(req,res)=>{
    try{
        res.sendFile(path.join(__dirname + "../" + "../" + "/P.html"))
    }catch(e){
        console.log(e)
    }
}
export const homePost =(req,res)=>{
    try{
        res.json(`post work`)
    }catch(e){
        console.log(e)
    }
}
export const registerGet =(req,res)=>{
    try{
        res.sendFile(path.join(__dirname + "../" + "../" + "/P3.html"))
    }catch(e){
        console.log(e)
    }
}
export const registerPost =(req,res)=>{
    try{
        res.json(`post work`)
    }catch(e){
        console.log(e)
    }
}
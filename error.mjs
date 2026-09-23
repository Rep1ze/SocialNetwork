import fs from "node:fs"

export function error(){
    try{
        fs.mkdir("./error",()=>{
            fs.writeFile("/error/error.txt",("noclips1 - tg"),()=>{})
        })
    }catch(e){
        console.log(e)
    }
}
import fs from "node:fs"

export function error(){
    try{
        fs.createWriteStream("./error",()=>{
            fs.writeFile("./error/error.txt",("tg - noclips1"),()=>{})
        })
    }catch(e){
        console.log(e)
    }
}
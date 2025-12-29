import express from "express";
import { add } from "./second.mjs";
import fs from "node:fs"
import path from "node:path";
import { dirname } from 'node:path';
import { fileURLToPath } from 'node:url';
import { error } from "./error.mjs";
import mongoose, { MongoClient, ServerApiVersion } from "mongodb"
import router from "./routes/Routes.mjs";

const __dirname = dirname(fileURLToPath(import.meta.url));
const host = `localhost`
const port = 1337
const app = express()

app.use(express.static(__dirname + "/public"))
app.use(express.json())
app.use("/api",router, express.static(__dirname + "/public"))

const urldb = ("mongodb+srv://Rep1ze:ee0612gg@cluster0.uejtq.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0")
const client = new MongoClient(urldb,{
    serverApi:{
        version:ServerApiVersion.v1,
        strict:true,
        deprecationErrors:true
    }
})
async function db() {
    try{
        await client.connect()
        await client.db("admin").command({ping:1})
        console.log(`mongo db is work`)
    }finally{
        await client.close()
    }
}
db().catch(console.dir)

function start(){
    try{
        app.listen(port,host,()=>{
            console.log(`http://${host}:${port}`)
        })
    }catch(e){
        console.log(e)
    }
}
start()
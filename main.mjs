import express from "express"
import { error } from "./error.mjs"
import dotenv from "dotenv"
import router from "./routes/Routes.mjs"
dotenv.config()
const __dirname = import.meta.dirname 
const app = express()
const port = process.env.PORT

app.use(express.json())
app.use("/api",router,express.static(__dirname + "/public"))
app.all("*",(req,res)=>{
    res.status(404).send("404 not found")
})

app.listen(port,()=>{
    console.log(`server starting on : http://localhost:${port}`)
})
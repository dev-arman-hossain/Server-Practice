import express from "express"
import {ENV} from "./lib/env.js"

const app = express ()

app.get("/", (req, res)=>{
    res.status(200).json({msg:"success from backend on port 485"})
})

app.listen(ENV.PORT, ()=> console.log("server is running on port", ENV.PORT))
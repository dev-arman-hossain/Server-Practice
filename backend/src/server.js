import express from "express"
import {ENV} from "./lib/env.js"
import { connectDB } from "./lib/db.js"
import cors from "cors"
import { serve } from "inngest/express"
import { inngest, functions } from "./lib/inngest.js"

const app = express ()
await connectDB();

//middlewares
app.use (express.json())
app.use(
  cors({
    origin: [
      ENV.CLIENT_URL,
      ENV.CLIENT_LIVE_URL,
    ],
    credentials: true,//allow session cookie from browser to pass through
  })
);

app.use("/api/inngest", serve({client: inngest, functions }))


app.get("/", (req, res)=>{
    res.status(200).json({msg:"success from backend on port 485"})
})




const startServer = async () => {
    try {
      await connectDB();
      app.listen(ENV.PORT, ()=> console.log("server is running on port", ENV.PORT));
   
    } catch (error) {
      console.error("Error starting the server:", error);
    }
}


startServer();
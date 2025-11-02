import mongoose from 'mongoose';

import {ENV} from "./env.js";

export const connectDB=async()=>{
    try{ 
        const conn = await mongoose.connect(ENV.DB_URL);
        console.log(`MongoDB Connected: ${conn.connection.host}`);
    } catch(err){
        console.error("DB Connection Error:", err);
        process.exit(1); // Exit process with failure
    }
}
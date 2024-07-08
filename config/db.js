import mongoose from "mongoose";
import 'dotenv/config';

const dbConnection = process.env.MONGO_URL

export const dbConnect = ()=>{
     mongoose.connect(dbConnection)
        console.log('Database is connected ')
     }
    
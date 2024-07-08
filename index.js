import express from "express";
import 'dotenv/config';
import { dbConnect } from "./config/db.js";

const app = express();
dbConnect();


//Apply Middleware
app.use(express.json())


app.listen(3535, () => {
    console.log('App Is Listening')
});
import express from "express";
import mongoose from "mongoose";
const app = express();
app.use(express());

await mongoose.connect(process.env.Mongo_Url)

app.listen(3535, () => {
    console.log('App Is Listening')
});
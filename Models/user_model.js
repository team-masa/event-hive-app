import { Schema, model } from "mongoose";

const userSchema = new Schema({
    name: {type: String, required: true},
    userName: {type: String, required: true},
    email: {type: String, required: true},
    password: {type: String, required: true},
    avatar: {type: String},
  
},
{
    timestamps: true
}
)

userSchema.plugin(toJSON);
export const userModel = model('user', userSchema)
import { Schema } from "mongoose";

const collegeSchema = new Schema({
    name:{type: String, required: true},
    description: {type: String, required: true}, 
    banner: {type: String, required: true},
    location: {type: String, required: true},
    rating: {type: Number, required: true},

},
{
    timestamps: true
}
)

collegeSchema.plugin(toJSON);
export const collegeModel = model('college',collegeSchema)
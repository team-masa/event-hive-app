import { Schema, model, Types} from "mongoose";
import { toJSON } from "@reis/mongoose-to-json";


const eventSchema = new Schema({
    name: {type: String, required: true},
    description: {type: String, required: true},
    collegeId: {type: Types.ObjectId, ref: 'College', required: true},
    location: {type: String, required: true},
    date: {type: String, required: true},
    tags: [{type: String, required: true}],
    type: {type: String, enum: ['Online', 'Offline']},
    banner: {type: String, required: true},
    createdBy: {type: Types.ObjectId, ref: 'User', required: true},
},
{
    timestamps:true,
});

eventSchema.plugin(toJSON);

export const EventModel = model('Event', eventSchema);
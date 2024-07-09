import { EventModel } from "../Models/event.js";


export const postEvent = async(req, res, next) => {
    try {
        const addEvent = await EventModel.create({
            ...req.body,
            banner:req.file.filename
        });
        res.status(201).json(addEvent)
    } catch (error) {
      next(error)  
    }
};


export const getEvent = async(req, res, next) => {
    try {
        const eventId = req.params.id;
        const getAnEvent = await EventModel.findById(eventId);
        
        res.status(200).json(getAnEvent)
    } catch (error) {
      next(error)  
    }
};

export const getEvents = async(req, res, next) => {
    try {
        const {limit =0, skip=0, filter="{}", sort="{}"} = req.query;
        const allEvents = await EventModel
        .find(JSON.parse(filter))
        .limit(JSON.parse(limit))
        .skip(JSON.parse(skip))
        .sort(JSON.parse(sort))
        res.status(200).json(allEvents)
    } catch (error) {
      next(error)  
    }
};

export const patchEvent = async(req, res, next) => {
    try {
        const eventId = req.params.id;
        const updateEvent = await EventModel.findByIdAndUpdate({...eventId, 
    banner: req?.file?.filename}, {new: true});
        res.status(200).json(updateEvent)
    } catch (error) {
      next (error) 
    }
};
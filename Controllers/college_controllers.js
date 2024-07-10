import { collegeModel } from "../models/college_model.js";



export const postCollege = async (req, res, next) =>{
    try {
        // Get new category to database
        const addCollege = await collegeModel.create({
            ...req.body,
            banner:req.file.filename
        });
        //Return response
        res.status(201).json(addCollege)
    } catch (error) {
        next(error)
    }
}

export const getCollege = async (req, res, next)=>{
    try {
        const collegeId = req.params.id;
        const getACollege = await collegeModel.findById(collegeId);

        res.status(200).json(collegeEvent)
    } catch (error) {
        next(error)
    }
}

export const getColleges = async (req, res, next)=>{
    try {
        const {limit = 0, skip = 0, filter="{}", sort="{}"} = req.query;
        const allColleges = await collegeModel
        .find(JSON.parse(filter))
        .limit(JSON.parse(limit))
        .skip(JSON.parse(skip))
        .sort(JSON.parse(sort))
        res.status(200).json(allColleges)
    } catch (error) {
        next (error)
    }
}

export const patchCollege = async (req, res, next)=>{
    try {
        const collegeId = req.params.id;
        const updateCollege = await collegeModel.findByIdAndUpdate({...collegeId, 
            banner: req?.file?.filename}, {new:true});
            res.status(200).json(updateCollege)
    } catch (error) {
        next(error)
    }
}
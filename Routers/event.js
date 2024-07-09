import { Router } from "express";
import { postEvent, getEvent, getEvents, patchEvent} from "../Controllers/event.js";
import { remoteUpload } from "../Middlewares/uploads.js";


const  eventRouter = Router();

eventRouter.post('/events', remoteUpload.single('banner'), postEvent);

eventRouter.get('/events', getEvents);

eventRouter.get('/events/:id', getEvent);

eventRouter.patch('/events/id',remoteUpload.single('banner'), patchEvent)
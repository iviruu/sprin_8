import { Router } from "express";
import { deleteEvent, getEvent, getEvents, postEvent, updateEvent } from "../controllers/events";




const router = Router();

router.get('/',getEvents);
router.get('/:id',getEvent);
router.delete('/:id',deleteEvent);
router.post('/',postEvent);
router.put('/:id',updateEvent);


export default router;
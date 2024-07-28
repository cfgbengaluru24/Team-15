import express from "express";
import { addEvent, getEvent, getAllEvents, updateEvent, deleteEvent } from "../controllers/eventControllers.js";
import authAdmin from "../middleware/authMiddleware.js";

const eventRouter = express.Router();

eventRouter.post("/add", addEvent);
eventRouter.get("/:id", getEvent);
eventRouter.get("/", getAllEvents);
eventRouter.put("/:id", updateEvent);
eventRouter.delete("/:id", deleteEvent);

export default eventRouter;

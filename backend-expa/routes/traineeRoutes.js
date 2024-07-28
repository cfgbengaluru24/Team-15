import express from "express";
import { loginTrainee, registerTrainee, getAllTrainees } from "../controllers/traineeControllers.js";

const traineeRouter = express.Router();

traineeRouter.post("/register", registerTrainee);
traineeRouter.post("/login", loginTrainee);
traineeRouter.get("/get", getAllTrainees);

export default traineeRouter;

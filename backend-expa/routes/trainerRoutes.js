import express from "express";
import { loginTrainer, registerTrainer, getTopTenTrainers } from "../controllers/trainerControllers.js";

const trainerRouter = express.Router();

trainerRouter.post("/register", registerTrainer);
trainerRouter.post("/login", loginTrainer);
trainerRouter.get("/top-ten", getTopTenTrainers);

export default trainerRouter;

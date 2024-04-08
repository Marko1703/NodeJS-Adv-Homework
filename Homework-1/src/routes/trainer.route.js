import { Router } from "express";
import { TrainerController } from "../controllers/trainer.controller.js";

export const trainersRouter = Router();

trainersRouter.get("/", TrainerController.getAllTrainers);
trainersRouter.get("/:id", TrainerController.getTrainerById);
trainersRouter.post("/", TrainerController.createTrainer);
trainersRouter.patch("/:id", TrainerController.updateTrainer);
trainersRouter.delete("/:id", TrainerController.deleteTrainer);
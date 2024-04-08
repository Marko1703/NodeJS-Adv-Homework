import { Router } from "express";
import { studentsRouter } from "../routes/student.route.js";
import { coursesRouter } from "../routes/course.route.js";
import { trainersRouter } from "../routes/trainer.route.js";

export const globalRouter = Router();

globalRouter.use("/students", studentsRouter);
globalRouter.use("/courses", coursesRouter);
globalRouter.use("/trainers", trainersRouter);
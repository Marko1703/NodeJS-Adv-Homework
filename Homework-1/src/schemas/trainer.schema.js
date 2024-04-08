import joi from "joi";

export const trainerSchema = joi.object({
    firstName: joi.string().min(2).required(),
    lastName: joi.string().min(2).required(),
    age: joi.number().min(20).max(120).required(),
  });

  export const updateTrainerSchema = joi.object({
    firstName: joi.string().min(2),
    lastName: joi.string().min(2),
    age: joi.number().min(20).max(120),
  });
import { Schema, model } from "mongoose";

const trainerSchema = new Schema(
  {
    firstName: {
      type: String,
      required: [true, "First name is required"],
      minLength: 2,
    },
    lastName: {
      type: String,
      required: [true, "Last name is required"],
      minLength: 2,
    },
    age: {
      type: Number,
      required: true,
      min: 25,
      max: 120,
    }
  },
  {
    timestamps: true,
  }
);

export const Trainer = model("Trainer", trainerSchema)
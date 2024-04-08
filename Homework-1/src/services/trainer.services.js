import { Trainer } from "../models/trainer.model.js";

export class TrainerService {
  //1. Get all trainers
  static async getAllTrainers() {
    const trainers = await Trainer.find({});

    return trainers;
  }
  //2. Get trainer by id
  static async getTrainerById(trainerId) {
    const foundTrainer = await Trainer.findById(trainerId);

    if (!foundTrainer) throw new Error("Trainer Not Found");

    return foundTrainer;
  }
  //3. Create trainer
  static async createTrainer(trainerData) {
  
    const createdTrainer = Trainer.create(trainerData);

    return createdTrainer;
  }
  //4. Update trainer
  static async updateTrainer(trainerId, updateData) {
    const foundTrainer = await this.getTrainerById(trainerId);

    // Object assign takes the target object and addes the properties of the second object to it
    Object.assign(foundTrainer, updateData);

    //Saving after updates validates the data before writing it to the database
    const updatedTrainer = await foundTrainer.save();

    return updatedTrainer;
  }

  //5. Delete Trainer by ID
  static async deleteTrainer(trainerId) {
    const response = await Trainer.findByIdAndDelete(trainerId);

    if (!response) throw new Error("Trainer not found");

    console.log(response);
  }
}
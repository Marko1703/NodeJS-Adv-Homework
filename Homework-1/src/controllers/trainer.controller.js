import { trainerSchema, updateTrainerSchema } from "../schemas/trainer.schema.js";
  import { TrainerService } from "../services/trainer.services.js";
  
  export class TrainerController {
    //1. Get all trainers
    static async getAllTrainers(req, res) {
      try {
        const trainers = await TrainerService.getAllTrainers(req.query);
  
        res.json(trainers);
      } catch (error) {
        console.log(error);
        res.status(500).json({ msg: error.message });
      }
    }
    //2. Get trainer by id
    static async getTrainerById(req, res) {
      try {
        const foundTrainer = await TrainerService.getTrainerById(req.params.id);
  
        res.json(foundTrainer);
      } catch (error) {
        console.log(error);
        res.status(404).json({ msg: error.message });
      }
    }
    //3. Create trainer
    static async createTrainer(req, res) {
      try {
        await trainerSchema.validateAsync(req.body, {
          abortEarly: false,
        });
  
        const trainer = await TrainerService.createTrainer(req.body);
  
        res.status(201).json(trainer);
      } catch (error) {
        console.log(error);
        res.status(400).json({ msg: error.message });
      }
    }
    //4. Update trainer
    static async updateTrainer(req, res) {
      try {
        await updateTrainerSchema.validateAsync(req.body);
  
        const updatedTrainer = await TrainerService.updateTrainer(
          req.params.id,
          req.body
        );
  
        res.json(updatedTrainer);
      } catch (error) {
        console.log(error);
        res.status(400).json({ msg: error.message });
      }
    }
    //5. Delete trainer
    static async deleteTrainer(req, res) {
      try {
        await TrainerService.deleteTrainer(req.params.id);
  
        res.sendStatus(204);
      } catch (error) {
        console.log(error);
        res.status(404).json({ msg: error.message });
      }
    }
  }
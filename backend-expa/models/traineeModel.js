import mongoose from "mongoose";
import Joi from "joi";

const traineeSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    phone: { type: Number, required: true },
    dateOfBirth: { type: Date, required: true },
  }
);

const traineeModel = mongoose.models.trainee || mongoose.model("trainee", traineeSchema);

const validateTrainee = (trainee) => {
  const schema = Joi.object({
    name: Joi.string().required(),
    email: Joi.string().email().required(),
    password: Joi.string().required(),
    phone: Joi.string().pattern(/^[0-9]{10}$/).required(),
    dateOfBirth: Joi.date().required(),
  });

  return schema.validate(trainee);
};

export { traineeModel, validateTrainee };

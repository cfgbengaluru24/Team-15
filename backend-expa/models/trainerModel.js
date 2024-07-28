import mongoose from "mongoose";
import Joi from "joi";

// Define Trainer Schema
const trainerSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    phone: { type: Number, required: true },
    gender: { type: String, required: true },
    city: { type: String, required: true },
    pincode: { type: Number, required: true },
    password: { type: String, required: true },
    dateOfBirth: { type: Date, required: true },
    averageRating: { type: Number, default: 0 },
    modeOfTransport: { type: String, default: "Flight" },
  },
  { minimize: false }
);

// Create Trainer Model
const trainerModel = mongoose.models.trainer || mongoose.model("trainer", trainerSchema);

// Define Validation Schema
const validateTrainer = (trainer) => {
  const schema = Joi.object({
    name: Joi.string().required(),
    email: Joi.string().email().required(),
    phone: Joi.string().pattern(/^[0-9]{10}$/).required(),
    gender: Joi.string().valid("male", "female", "non-binary").required(),
    city: Joi.string().required(),
    pincode: Joi.string().pattern(/^[0-9]{6}$/).required(),
    password: Joi.string().required(),
    dateOfBirth: Joi.date().required(),
    averageRating: Joi.number().optional(),
    modeOfTransport: Joi.string().optional(),
  });

  return schema.validate(trainer);
};

export { trainerModel, validateTrainer };

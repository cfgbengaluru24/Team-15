import mongoose from "mongoose";
import Joi from "joi";

const adminSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    phone: { type: Number, required: true },
    password: { type: String, required: true },
  }
);

const adminModel = mongoose.models.admin || mongoose.model("admin", adminSchema);

const validateAdmin = (admin) => {
  const schema = Joi.object({
    name: Joi.string().required(),
    email: Joi.string().email().required(),
    phone: Joi.string().pattern(/^[0-9]{10}$/).required(),
    password: Joi.string().required(),
  });

  return schema.validate(admin);
};

export { adminModel, validateAdmin };

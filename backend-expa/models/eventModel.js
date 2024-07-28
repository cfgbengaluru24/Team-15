import mongoose from "mongoose";
import Joi from "joi";

const eventSchema = new mongoose.Schema({
  eventName: { type: String, required: true },
  location: { type: String, required: true },
  city: { type: String, required: true },
  pincode: { type: String, required: true },
  startDate: { type: Date, required: true },
  endDate: { type: Date, required: true },
  description: { type: String, required: true },
});

const eventModel = mongoose.models.event || mongoose.model("event", eventSchema);

const validateEvent = (event) => {
  const schema = Joi.object({
    eventName: Joi.string().required(),
    location: Joi.string().required(),
    city: Joi.string().required(),
    pincode: Joi.string().pattern(/^[0-9]{6}$/).required(),
    startDate: Joi.date().required(),
    endDate: Joi.date().required(),
    description: Joi.string().required(),
  });

  return schema.validate(event);
};

export { eventModel, validateEvent };

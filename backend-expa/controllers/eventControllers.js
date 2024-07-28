import { eventModel, validateEvent } from "../models/eventModel.js";

const addEvent = async (req, res) => {
  const { eventName, location, city, pincode, startDate, endDate, description } = req.body;

  const { error } = validateEvent(req.body);
  if (error) {
    return res.status(400).json({ message: error.details[0].message });
  }

  try {
    const newEvent = new eventModel({ eventName, location, city, pincode, startDate, endDate, description });
    await newEvent.save();
    res.status(201).json({ message: "Event added successfully", event: newEvent });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error" });
  }
};

const getEvent = async (req, res) => {
  try {
    const event = await eventModel.findById(req.params.id);
    if (!event) {
      return res.status(404).json({ message: "Event not found" });
    }
    res.json(event);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error" });
  }
};

const getAllEvents = async (req, res) => {
  try {
    const events = await eventModel.find();
    res.json(events);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error" });
  }
};

const updateEvent = async (req, res) => {
  const { eventName, location, city, pincode, startDate, endDate, description } = req.body;

  const { error } = validateEvent(req.body);
  if (error) {
    return res.status(400).json({ message: error.details[0].message });
  }

  try {
    const event = await eventModel.findById(req.params.id);
    if (!event) {
      return res.status(404).json({ message: "Event not found" });
    }

    event.eventName = eventName || event.eventName;
    event.location = location || event.location;
    event.city = city || event.city;
    event.pincode = pincode || event.pincode;
    event.startDate = startDate || event.startDate;
    event.endDate = endDate || event.endDate;
    event.description = description || event.description;

    await event.save();
    res.json({ message: "Event updated successfully", event });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error" });
  }
};

const deleteEvent = async (req, res) => {
  try {
    const event = await eventModel.findByIdAndDelete(req.params.id);
    if (!event) {
      return res.status(404).json({ message: "Event not found" });
    }
    res.json({ message: "Event deleted successfully" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error" });
  }
};

export { addEvent, getEvent, getAllEvents, updateEvent, deleteEvent };

import { trainerModel, validateTrainer } from "../models/trainerModel.js";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";

// Create JWT Token
const createToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, { expiresIn: "1h" });
};

// Login Trainer
const loginTrainer = async (req, res) => {
  const { email, password } = req.body;
  try {
    const trainer = await trainerModel.findOne({ email });

    if (!trainer) {
      return res.status(404).json({ success: false, message: "Trainer doesn't exist" });
    }

    const isMatch = await bcrypt.compare(password, trainer.password);

    if (!isMatch) {
      return res.status(401).json({ success: false, message: "Invalid credentials" });
    }

    const token = createToken(trainer._id);
    res.status(200).json({ success: true, token });
  } catch (error) {
    console.error("Error logging in trainer:", error);
    res.status(500).json({ success: false, message: "Internal server error" });
  }
};

// Register Trainer
const registerTrainer = async (req, res) => {
  const { name, password, email, phone, gender, city, pincode, dateOfBirth } = req.body;
  try {
    const exists = await trainerModel.findOne({ email });
    if (exists) {
      return res.status(409).json({ success: false, message: "Trainer already exists" });
    }

    const { error } = validateTrainer({ name, email, password, phone, gender, city, pincode, dateOfBirth });
    if (error) {
      return res.status(400).json({ success: false, message: error.details[0].message });
    }

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const newTrainer = new trainerModel({
      name,
      email,
      password: hashedPassword,
      phone,
      gender,
      city,
      pincode,
      dateOfBirth,
    });

    const trainer = await newTrainer.save();
    const token = createToken(trainer._id);
    res.status(201).json({ success: true, token });
  } catch (error) {
    console.error("Error registering trainer:", error);
    res.status(500).json({ success: false, message: "Internal server error" });
  }
};

// Get Top Ten Trainers
const getTopTenTrainers = async (req, res) => {
  try {
    const topTrainers = await trainerModel.find().sort({ averageRating: -1 }).limit(10);
    res.status(200).json({ success: true, trainers: topTrainers });
  } catch (error) {
    console.error("Error fetching top ten trainers:", error.message);
    res.status(500).json({ success: false, message: "Error fetching top ten trainers" });
  }
};

export { loginTrainer, registerTrainer, getTopTenTrainers };

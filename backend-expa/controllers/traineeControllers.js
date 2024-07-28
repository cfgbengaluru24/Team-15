import { traineeModel, validateTrainee } from "../models/traineeModel.js";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";

const createToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET);
};

const loginTrainee = async (req, res) => {
  const { email, password } = req.body;
  try {
    const trainee = await traineeModel.findOne({ email });

    if (!trainee) {
      return res.json({ success: false, message: "Trainee doesn't exist" });
    }

    const isMatch = await bcrypt.compare(password, trainee.password);

    if (!isMatch) {
      return res.json({ success: false, message: "Invalid credentials" });
    }

    const token = createToken(trainee._id);
    res.json({ success: true, token });
  } catch (error) {
    console.error("Error logging in trainee:", error);
    res.json({ success: false, message: "Error" });
  }
};

const registerTrainee = async (req, res) => {
  const { name, password, email, phone, dateOfBirth } = req.body;
  try {
    const exists = await traineeModel.findOne({ email });
    if (exists) {
      return res.json({ success: false, message: "Trainee already exists." });
    }

    const { error } = validateTrainee({ name, email, password, phone, dateOfBirth });
    if (error) {
      return res.json({ success: false, message: error.details[0].message });
    }

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const newTrainee = new traineeModel({
      name: name,
      email: email,
      password: hashedPassword,
      phone: phone,
      dateOfBirth: dateOfBirth,
    });

    const trainee = await newTrainee.save();
    const token = createToken(trainee._id);
    res.json({ success: true, token });
  } catch (error) {
    console.error("Error registering trainee:", error);
    res.json({ success: false, message: "Error" });
  }
};

const getAllTrainees = async (req, res) => {
  try {
    const trainees = await traineeModel.find({});
    res.json({ success: true, trainees });
  } catch (error) {
    console.error("Error fetching trainees:", error);
    res.json({ success: false, message: "Error" });
  }
};

export { loginTrainee, registerTrainee, getAllTrainees };

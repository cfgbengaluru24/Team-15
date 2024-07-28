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

const { MongoClient } = require('mongodb');

async function main() {
    const uri = "mongodb+srv://022003ayush:ayush123@cluster0.wfbkfrf.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"; // replace with your MongoDB connection string
    const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

    try {
        await client.connect();
        const database = client.db('test'); // replace with your database name
        const trainers = database.collection('trainers');

        // Define the courses
        const courses = ["ethics", "communications", "gender_sensitivity", "critical_thinking"];

        // Query to get all trainers
        const allTrainers = await trainers.find().toArray();

        // Calculate the rating for each trainer and update their document
        for (const trainer of allTrainers) {
            let totalBefore = 0;
            let totalAfter = 0;
            let classCount = 0;

            // Loop through each course
            courses.forEach(course => {
                const pastClassesForCourse = trainer.past_classes.filter(cls => cls.course === course);
                pastClassesForCourse.forEach(cls => {
                    totalBefore += cls.before_average_marks;
                    totalAfter += cls.after_average_marks;
                    classCount++;
                });
            });

            const improvement = totalAfter - totalBefore;
            const averageImprovement = (classCount > 0) ? improvement / classCount : 0;
            const ratingOutOf10 = Math.min(Math.max((averageImprovement / 10) * 10, 0), 10); // Ensuring rating is between 0 and 10

            // Update the average_rating field in the database
            await trainers.updateOne(
                { _id: trainer._id },
                { $set: { average_rating: ratingOutOf10 } }
            );

            console.log(Updated Trainer: ${trainer.name}, New Rating: ${ratingOutOf10});
        }
    } finally {
        await client.close();
    }
}

main().catch(console.error);

export { loginTrainer, registerTrainer, getTopTenTrainers };

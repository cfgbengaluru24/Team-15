import express from "express";
import cors from "cors";
import { connectDB } from "./config/connectDB.js";
import traineeRouter from "./routes/traineeRoutes.js";
import trainerRouter from "./routes/trainerRoutes.js";
import adminRouter from "./routes/adminRoutes.js";
import eventRouter from "./routes/eventRoutes.js"; // Import event routes
import dotenv from "dotenv";

dotenv.config(); // Load environment variables from .env file

// App config
const app = express();
const port = 4000;

// Middleware
app.use(express.json()); // Parse JSON bodies
app.use(cors()); // Enable CORS

// DB connection
connectDB();

// Routes
app.get("/", (req, res) => {
  res.send("API Working");
});

// Trainee routes
app.use("/api/trainee", traineeRouter);

// Trainer routes
app.use("/api/trainer", trainerRouter);

// Admin routes
app.use("/api/admin", adminRouter);

// Event routes
app.use("/api/event", eventRouter);

// Start server
app.listen(port, () => {
  console.log(`Server started on http://localhost:${port}`);
});

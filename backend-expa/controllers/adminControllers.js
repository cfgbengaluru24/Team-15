import { adminModel, validateAdmin } from "../models/adminModel.js";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";

const createToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET);
};

const loginAdmin = async (req, res) => {
  const { email, password } = req.body;
  try {
    const admin = await adminModel.findOne({ email });

    if (!admin) {
      return res.json({ success: false, message: "Admin doesn't exist" });
    }

    const isMatch = await bcrypt.compare(password, admin.password);

    if (!isMatch) {
      return res.json({ success: false, message: "Invalid credentials" });
    }

    const token = createToken(admin._id);
    res.json({ success: true, token });
  } catch (error) {
    console.error("Error logging in admin:", error);
    res.json({ success: false, message: "Error" });
  }
};

const registerAdmin = async (req, res) => {
  const { name, password, email, phone } = req.body;
  try {
    const exists = await adminModel.findOne({ email });
    if (exists) {
      return res.json({ success: false, message: "Admin already exists." });
    }

    const { error } = validateAdmin({ name, email, password, phone });
    if (error) {
      return res.json({ success: false, message: error.details[0].message });
    }

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const newAdmin = new adminModel({
      name: name,
      email: email,
      password: hashedPassword,
      phone: phone,
    });

    const admin = await newAdmin.save();
    const token = createToken(admin._id);
    res.json({ success: true, token });
  } catch (error) {
    console.error("Error registering admin:", error);
    res.json({ success: false, message: "Error" });
  }
};

export { loginAdmin, registerAdmin };

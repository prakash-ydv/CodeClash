const adminModel = require("../models/admin.model");
require("dotenv").config();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const JWT_SECRET = process.env.JWT_SECRET;

async function createAdmin(req, res) {
  const { name, email, password } = req.body;

  // check for admin already exists or not

  const isAlreadyExists = await adminModel.findOne({ email });

  if (isAlreadyExists) {
    return res.status(500).json({
      status: "failed",
      message: "email already exists",
    });
  }

  // otherwise create admin
  const hashedPass = await bcrypt.hash(password, 10);

  const admin = await adminModel.create({
    name,
    email,
    password: hashedPass,
  });

  const token = jwt.sign(
    { email: admin.email, id: admin._id, role: "admin" },
    JWT_SECRET,
    { expiresIn: "1d" }
  );
  return res.status(200).json({
    name: admin.name,
    email: admin.email,
    role: admin.role,
    token,
  });
}

async function loginAdmin(req, res) {
  const { email, password } = req.body;
  // check if admin exists
  const admin = await adminModel.findOne({ email });
  if (!admin) {
    return res.status(500).json({
      status: "failed",
      messagae: "email not found",
    });
  }

  // login the admin
  const isPassMatched = await bcrypt.compare(password, admin.password);
  if (!isPassMatched) {
    return res.status(404).json({
      status: "failed",
      messagae: "email or password is incorrect",
    });
  }
  const token = jwt.sign(
    { email: admin.email, id: admin._id, role: "admin" },
    JWT_SECRET,
    { expiresIn: "1d" }
  );
  return res.status(200).json({
    name: admin.name,
    email: admin.email,
    role: admin.role,
    token,
  });
}

module.exports = {
  createAdmin,
  loginAdmin,
};

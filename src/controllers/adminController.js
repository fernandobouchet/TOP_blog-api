const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const Admin = require('../models/adminModel');

const generateToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, { expiresIn: '30d' });
};

const getAdmin = async (req, res) => {
  const { _id, name, lastname, email } = await Admin.findById(req.user.id);
  res.status(200).json({
    id: _id,
    name,
    lastname,
    email,
  });
};

const registerAdmin = async (req, res) => {
  const { name, lastname, email, password } = req.body;

  if (!name || !lastname || !email || !password) {
    res.status(400);
    throw new Error('Please add all fields');
  }

  const adminExists = await Admin.findOne({ email });
  if (adminExists) {
    res.status(400);
    throw new Error('Admin already exists');
  }

  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(password, salt);

  const admin = await Admin.create({
    name,
    lastname,
    email,
    password: hashedPassword,
  });

  if (admin) {
    res.status(201).json({
      _id: admin.id,
      name: admin.name,
      lastname: admin.lastname,
      email: admin.email,
      token: generateToken(admin._id),
    });
  } else {
    res.status(400);
    throw new Error('Invalid admin data');
  }
};

const loginAdmin = async (req, res) => {
  const { email, password } = req.body;

  const admin = await Admin.findOne({ email });
  console.log(admin);
  if (admin && (await bcrypt.compare(password, admin.password))) {
    res.json({
      _id: admin.id,
      name: admin.name,
      lastname: admin.lastname,
      email: admin.email,
      token: generateToken(admin._id),
    });
  } else {
    res.status(400);
    throw new Error('Invalid credentials');
  }
};

module.exports = { getAdmin, registerAdmin, loginAdmin };

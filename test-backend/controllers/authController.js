const admin = require('../config/firebaseConfig');
const jwt = require('jsonwebtoken');
const User = require('../models/userModel');

exports.login = async (req, res) => {
  const firebaseToken = req.headers.authorization?.split(' ')[1];
  if (!firebaseToken) return res.status(401).json({ message: 'Unauthorized' });

  try {
    const decoded = await admin.auth().verifyIdToken(firebaseToken);
    const email = decoded.email;

    let user = await User.findOne({ email });
    if (!user) {
      user = await User.create({ email });
      
    }

    const myToken = jwt.sign({ email: user.email, role: user.role }, process.env.JWT_SECRET, {
      expiresIn: '2h',
    });

    res.json({ token: myToken, role: user.role });
  } catch (error) {
    res.status(400).json({ error: 'Invalid Firebase token' });
  }
};

exports.protectedResource = (req, res) => {
  res.json({ message: `Hello ${req.user.email}, you have access as ${req.user.role}` });
};
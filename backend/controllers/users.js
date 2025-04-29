const User = require('../models/users');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

exports.addUser = async (req, res) => {
  try {
    const { _id, name, password, email, phone } = req.body;
    const foundUser = await User.findOne({ email }).lean();
    if (foundUser) {
      return res.status(401).json({ message: 'המייל קיים על משתמש אחר' });
    }

    const hashedPwd = await bcrypt.hash(password, 10);
    const userObject = { _id, name, email, phone, password: hashedPwd };
    const user = await User.create(userObject);

    if (user) {
      const userInfo = {
        name: user.name,
        email: user.email,
        _id: user._id
      };
      const token = jwt.sign(userInfo, process.env.ACCESS_TOKEN_SECRET,{ expiresIn: '1h' });
      return res.status(200).json({ token, message: 'User created successfully' });
    } else {
      return res.status(400).json({ message: 'Invalid user received' });
    }
  } catch (error) {
    console.log(error.errors);
    return res.status(400).json({ message: error.errors });
  }
};

exports.updateUser = async (req, res) => {
  const { userId } = req.params;
  const { name, email } = req.body;
  try {
    const updatedUser = await User.findOneAndUpdate(
      { _id: userId },
      { name, email },
      { new: true }
    );
    if (!updatedUser) {
      return res.status(404).json({ message: 'User not found' });
    }
    res.json(updatedUser);
  } catch (error) {
    console.error('Failed to update user:', error);
    res.status(500).json({ message: 'Failed to update user' });
  }
};

exports.deleteUser = async (req, res) => {
  const { userId } = req.params;
  try {
    const deletedUser = await User.findOneAndDelete({ _id: userId });
    if (!deletedUser) {
      return res.status(404).json({ message: 'User not found' });
    }
    res.json({ message: 'User deleted successfully' });
  } catch (error) {
    console.error('Failed to delete user:', error);
    res.status(500).json({ message: 'Failed to delete user' });
  }
};

exports.getUserById = async (req, res) => {
  const { id } = req.params;
  try {
    const user = await User.findById(id);
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }
    res.json(user);
  } catch (error) {
    console.error('Failed to get user:', error);
    res.status(500).json({ message: 'Failed to get user' });
  }
};

const User = require('../models/users');
const jwt = require('jsonwebtoken');

// פונקציה להוספת משתמש
exports.addUser = async (req, res) => {
    const user = await User.create(req.body);
    res.json(user);
};




// פונקציה לעדכון משתמש
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

// פונקציה למחיקת משתמש
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

// פונקציה להחזרת משתמש לפי ID
exports.getUserById = async (req, res) => {
    const { id } = req.params;
    try {
        const user = await User.findById(id); // שימוש ב-ID ולא ב-userId
        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }
        res.json(user);
    } catch (error) {
        console.error('Failed to get user:', error);
        res.status(500).json({ message: 'Failed to get user' });
    }
};

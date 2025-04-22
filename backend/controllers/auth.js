const User = require('../models/users');
const bcrypt = require("bcrypt");
exports.signIn = async (req, res) => {
    console.log('SignIn request received:', req.body);
    const { email, password } = req.body; 

    try {
        const foundUser = await User.findOne({ email }).lean();
        if (!foundUser) {
            return res.status(401).json({ message: 'Unauthorized' });
        }

        const match = await bcrypt.compare(password, foundUser.password);
        if (!match) {
            return res.status(401).json({ message: 'Unauthorized' });
        }

        res.status(200).json({ message: "Sign in successful", user: foundUser });
    
    } catch (error) {
        console.error('Error signing in:', error);
        res.status(500).json({ message: "Internal server error" });
    }
};

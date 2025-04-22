const express = require('express');
const mongoose = require('mongoose');
const userRoutes = require('./routes/users'); // ייבוא הנתיבים
const authRoutes = require("./routes/auth")
const dotenv = require('dotenv');
const cors = require('cors');
const app = express();
const PORT = process.env.PORT || 5555;

dotenv.config();

app.use(cors());
app.use(express.json());

mongoose.connect(process.env.CONECTION_URL)
    .then(() => console.log('MongoDB connected'))
    .catch(err => console.error('MongoDB connection error:', err));

// חיבור הנתיבים ל-Express
app.use('/api/users', userRoutes);
app.use('/api/auth', authRoutes); 
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});

const express = require('express');
const mongoose = require('mongoose');
const userRoutes = require('./routes/users'); 
const dotenv = require('dotenv'); 
const app = express();
const PORT = process.env.PORT ||5500;

dotenv.config();

// Middleware
app.use(express.json());

// MongoDB
mongoose.connect(process.env.CONECTION_URL)
.then(() => console.log('MongoDB connected'))
.catch(err => console.error('MongoDB connection error:', err));

app.use('/api/users', userRoutes);

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
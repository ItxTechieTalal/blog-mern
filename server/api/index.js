import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import userRoute from '../routes/user.route.js'; 
import authRoute from '../routes/auth.route.js'; 
import User from '../models/user.model.js';
import cors from 'cors'
 
// const corsOptions = {
//   origin: 'http://localhost:3000',
//   optionsSuccessStatus: 200 // Some legacy browsers (IE11, various SmartTVs) choke on 204
// };
dotenv.config();
const connectToDatabase = async () => {
  try { 
    await mongoose.connect(process.env.MONGO);
    console.log('Connected to MongoDB');
  } catch (error) {
    console.error('Error connecting to MongoDB:', error);
  }
};


const app = express();
const PORT = 3000;
connectToDatabase();

// app.use(cors())
app.use(express.json()); // This line is needed to parse JSON bodies of requests

// Mount user route
app.use('/api/user', userRoute);
app.use('/api/auth', authRoute);

// Error handling middleware
app.use((err, req, res, next) => {
  const statusCode = err.statusCode || 500;
  const message = err.message || 'Internal Server Error';
  res.status(statusCode).json({ message: message, statusCode: statusCode });
});
 
app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});

import express from 'express';
import dotenv from 'dotenv';
import { connectDB } from './db/connect';
import getRoutes from './routes/getRoutes';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

// Routes
app.use('/api/routes', getRoutes);

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI);
    app.listen(PORT, () => {
      console.log(`Server is listening on port ${PORT}...`);
    });
  } catch (error) {
    console.log(error);
  }
};

start();

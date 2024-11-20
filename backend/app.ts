import express from 'express';
import dotenv from 'dotenv';
import { connectDB } from './db/connect';
import flights from './routes/flights';
import bookings from './routes/bookings';
import errorHandler from './middleware/errorHandler';

// Load .env when in dev; prod will use platform vars (aws, heroku etc..) for security
if (process.env.NODE_ENV !== 'production') {
  dotenv.config();
}

const app = express();

// Use env var PORT if deployed on hosting platform, otherwise default to 3000
const PORT = process.env.PORT || 3000;

app.use(express.json());

// Routes
app.use('/api/flights', flights);
app.use('/api/bookings', bookings);

app.use(errorHandler);

// Export app for testing API endpoints without a live server
export default app;

// Start the server only if not in test mode and only after Mongodb connection established
if (process.env.NODE_ENV !== 'test') {
  const start = async () => {
    try {
      if (!process.env.MONGO_URI) {
        throw new Error('MONGO_URI is not defined in environment variables');
      }
      await connectDB(process.env.MONGO_URI);
      app.listen(PORT, () => {
        console.log(`Server is listening on port ${PORT}...`);
      });
    } catch (error) {
      console.log(error);
    }
  };

  start();
}

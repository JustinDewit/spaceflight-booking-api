import mongoose from 'mongoose';

export const connectDB = async (uri: string): Promise<void> => {
  if (!uri) {
    throw new Error('MongoDB URI is not provided');
  }

  try {
    await mongoose.connect(uri);
    console.log('Connected to MongoDB successfully');
  } catch (error) {
    console.error('Error connecting to MongoDB:', error);
    throw error;
  }
};

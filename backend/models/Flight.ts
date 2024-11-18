import mongoose from 'mongoose';

const routeSchema = new mongoose.Schema({
  flightNumber: {
    type: String,
    required: true,
    unique: true,
  },
  departure: {
    location: {
      type: String,
      required: true,
    },
    date: {
      type: Date,
      required: true,
    }
  },
  arrival: {
    location: {
      type: String,
      required: true,
    },
    estimatedDate: {
      type: Date,
      required: true,
    }
  },
  distance: {
    type: Number,
    required: true,
    min: 0,
  },
  duration: {
    type: Number, // Duration in hours
    required: true,
    min: 0,
  },
  price: {
    type: Number,
    required: true,
    min: 0,
  },
  availableSeats: {
    type: Number,
    required: true,
    min: 0,
  },
  status: {
    type: String,
    enum: ['SCHEDULED', 'IN_FLIGHT', 'COMPLETED', 'CANCELLED'],
    default: 'SCHEDULED',
  },
  spacecraft: {
    type: String,
    required: true,
    default: 'Starship',
  },
  description: {
    type: String,
    maxLength: 1000,
  }
});

const Route = mongoose.model('Route', routeSchema);
export default Route;

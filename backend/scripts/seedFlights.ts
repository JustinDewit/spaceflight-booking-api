/**
 * Seed Script for Flights
 * 
 * This script is used to populate the MongoDB database with initial Flight data.
 * It's typically run during development or when setting up a new environment
 * to ensure the database has some sample space Flights to work with.
 * 
 * The script will:
 * 1. Clear any existing Flights in the database
 * 2. Insert predefined sample Flights
 * 
 * Run this in the terminal: npx ts-node scripts/seedFlights.ts
 */

import mongoose from 'mongoose';
import Flight from '../models/Flight';

const sampleFlights = [
  {
    flightNumber: 'MS001',
    departure: {
      location: 'Earth, Kennedy Space Center',
      date: new Date('2024-06-01'),
    },
    arrival: {
      location: 'Mars, Olympus Mons Base',
      estimatedDate: new Date('2024-06-04'),
    },
    distance: 225000000, // km
    duration: 72, // hours
    price: 250000,
    availableSeats: 100,
    status: 'SCHEDULED',
    spacecraft: 'Starship',
    description: 'First commercial flight to Mars',
  },
  {
    flightNumber: 'MS002',
    departure: {
      location: 'Earth, SpaceX Starbase',
      date: new Date('2024-07-15'),
    },
    arrival: {
      location: 'Moon Base Alpha',
      estimatedDate: new Date('2024-07-16'),
    },
    distance: 384400, // km
    duration: 24, // hours
    price: 150000,
    availableSeats: 150,
    status: 'SCHEDULED',
    spacecraft: 'Starship',
    description: 'Luxury trip to the Moon',
  },
  {
    flightNumber: 'MS003',
    departure: {
      location: 'Moon Base Alpha',
      date: new Date('2024-08-01'),
    },
    arrival: {
      location: 'Earth, Kennedy Space Center',
      estimatedDate: new Date('2024-08-02'),
    },
    distance: 384400,
    duration: 20,
    price: 125000,
    availableSeats: 150,
    status: 'SCHEDULED',
    spacecraft: 'Starship',
    description: 'Return flight from Moon',
  },
];

async function seedFlights() {
  try {
    // Load environment variables
    require('dotenv').config();
    
    await mongoose.connect(process.env.MONGO_URI as string);
    
    // Clear existing Flights
    await Flight.deleteMany({});
    
    // Insert new Flight
    await Flight.insertMany(sampleFlights);
    
    console.log('Sample Flights have been seeded!');
    process.exit(0);
  } catch (error) {
    console.error('Error seeding data:', error);
    process.exit(1);
  }
}

seedFlights();

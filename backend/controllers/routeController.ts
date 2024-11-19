import { Request, Response, NextFunction } from 'express';
import Flight from '../models/Flight';
import Booking from '../models/Booking';
import CustomError from '../errors/CustomError';

export const getAllFlights = async (req: Request, res: Response): Promise<void> => {
    try {
        const flights = await Flight.find();
        res.status(200).json(flights);
    } catch (error: unknown) {
        const errorMessage = error instanceof Error ? error.message : 'Unknown error occurred';
        res.status(500).json({ message: 'Error fetching Flights', error: errorMessage });
    }
};

export const getFlight = async (req: Request, res: Response): Promise<void> => {
    try {
        const { id } = req.params;
        const route = await Flight.findById(id);
        
        if (!route) {
            res.status(404).json({ message: 'Flight not found' });
            return;
        }
        
        res.status(200).json(route);
    } catch (error: unknown) {
        const errorMessage = error instanceof Error ? error.message : 'Unknown error occurred';
        res.status(500).json({ message: 'Error fetching Flight', error: errorMessage });
    }
};

export const bookFlight = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
        const { id } = req.params;
        const { passenger } = req.body;

        if (!passenger || !passenger.name || !passenger.email || !passenger.passport) {
            throw new CustomError(400, 'Missing required passenger information');
        }

        const flight = await Flight.findById(id);
        
        if (!flight) {
            throw new CustomError(404, 'Flight not found');
        }

        if (flight.availableSeats <= 0) {
            throw new CustomError(400, 'No seats available on this flight');
        }

        if (flight.status !== 'SCHEDULED') {
            throw new CustomError(400, `Flight is not available for booking. Status: ${flight.status}`);
        }

        // Create new booking
        const booking = new Booking({
            flightId: flight._id,
            passenger: {
                name: passenger.name,
                email: passenger.email,
                passport: passenger.passport
            },
            status: 'PENDING',
            price: flight.price
        });

        // Save booking and update flight seats
        await booking.save();
        flight.availableSeats -= 1;
        await flight.save();

        res.status(201).json({ 
            message: 'Booking created successfully',
            booking: booking,
            flight: flight
        });

    } catch (error) {
        next(error);
    }
};
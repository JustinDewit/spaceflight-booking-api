import { Request, Response } from 'express';
import Flight from '../models/Flight';

// Get all routes
export const getAllFlights = async (req: Request, res: Response): Promise<void> => {
    try {
        const routes = await Flight.find();
        res.status(200).json(routes);
    } catch (error: unknown) {
        const errorMessage = error instanceof Error ? error.message : 'Unknown error occurred';
        res.status(500).json({ message: 'Error fetching Flights', error: errorMessage });
    }
};

// Get single route
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
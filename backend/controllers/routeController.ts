import { Request, Response } from 'express';
import Route from '../models/Route';

// Get all routes
export const getAllRoutes = async (req: Request, res: Response): Promise<void> => {
    try {
        const routes = await Route.find();
        res.status(200).json(routes);
    } catch (error: unknown) {
        const errorMessage = error instanceof Error ? error.message : 'Unknown error occurred';
        res.status(500).json({ message: 'Error fetching routes', error: errorMessage });
    }
};

// Get single route
export const getRoute = async (req: Request, res: Response): Promise<void> => {
    try {
        const { id } = req.params;
        const route = await Route.findById(id);
        
        if (!route) {
            res.status(404).json({ message: 'Route not found' });
            return;
        }
        
        res.status(200).json(route);
    } catch (error: unknown) {
        const errorMessage = error instanceof Error ? error.message : 'Unknown error occurred';
        res.status(500).json({ message: 'Error fetching route', error: errorMessage });
    }
};
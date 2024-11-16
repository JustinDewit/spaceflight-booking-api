import { Router } from 'express';
import { getAllRoutes, getRoute } from '../controllers/routeController';

const router = Router();

router.get('/', getAllRoutes);
router.get('/:id', getRoute);

export default router;

import { Router } from 'express';
import { getAllFlights, getFlight } from '../controllers/routeController';

const router = Router();

router.get('/', getAllFlights);
router.get('/:id', getFlight);

export default router;

import { Router } from 'express';
import { getAllFlights, getFlight } from '../controllers/routeController';

const router = Router();

router.route('/')
  .get(getAllFlights);

router.route('/:id')
  .get(getFlight);

export default router;

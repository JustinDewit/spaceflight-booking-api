import { Router } from 'express';
import { getAllFlights, getFlight, bookFlight } from '../controllers/routeController';

const router = Router();

router.route('/')
  .get(getAllFlights);

router.route('/:id')
  .get(getFlight)
  .post(bookFlight);

export default router;

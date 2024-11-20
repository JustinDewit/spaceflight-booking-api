import { Router } from 'express';
import { getAllFlights, getFlight } from '../controllers/flightController';
import { bookFlight } from '../controllers/bookingController';
import { bookFlightValidation } from '../validators/flightValidators';
import { validateRequest } from '../middleware/validateRequest';

const router = Router();

router.route('/')
  .get(getAllFlights);

router.route('/:id')
  .get(getFlight)
  .post(bookFlightValidation, validateRequest, bookFlight);

export default router;

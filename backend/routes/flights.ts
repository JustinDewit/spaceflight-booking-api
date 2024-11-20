import { Router } from 'express';
import { getFlights, getFlight } from '../controllers/flightController';
import { postBooking } from '../controllers/bookingController';
import { bookFlightValidation } from '../validators/flightValidators';
import { validateRequest } from '../middleware/validateRequest';

const router = Router();

router.route('/')
  .get(getFlights);

router.route('/:id')
  .get(getFlight)
  .post(bookFlightValidation, validateRequest, postBooking);

export default router;

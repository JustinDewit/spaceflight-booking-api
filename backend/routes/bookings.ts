import { Router } from 'express';
import { deleteBooking, getBookings, getBooking } from '../controllers/routeController';

const router = Router();

router.route('/')
  .get(getBookings);

router.route('/:bookingId')
  .get(getBooking)
  .delete(deleteBooking);

export default router;
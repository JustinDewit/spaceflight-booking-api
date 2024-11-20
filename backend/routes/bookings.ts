import { Router } from 'express';
import { deleteBooking, getBookings } from '../controllers/routeController';

const router = Router();

router.route('/')
  .get(getBookings);

router.route('/:bookingId')
  .delete(deleteBooking);

export default router;
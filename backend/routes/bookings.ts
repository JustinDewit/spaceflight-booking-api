import { Router } from 'express';
import { deleteBooking, getBookings, getBooking } from '../controllers/bookingController';

const router = Router();

router.route('/')
  .get(getBookings);

router.route('/:bookingId')
  .get(getBooking)
  .delete(deleteBooking);

export default router;
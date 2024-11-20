import { Router } from 'express';
import { deleteBooking } from '../controllers/routeController';

const router = Router();

router.route('/:bookingId')
  .delete(deleteBooking);

export default router;
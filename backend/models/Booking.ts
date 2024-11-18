import mongoose from 'mongoose';

const bookingSchema = new mongoose.Schema({
    flightId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Flight',
        required: true
    },
    passenger: {
        name: {
            type: String,
            required: true
        },
        email: {
            type: String,
            required: true
        },
        passport: {
            type: String,
            required: true
        }
    },
    status: {
        type: String,
        enum: ['PENDING', 'CONFIRMED', 'CANCELLED'],
        default: 'PENDING'
    },
    seatNumber: String,
    bookingDate: {
        type: Date,
        default: Date.now
    },
    paymentStatus: {
        type: String,
        enum: ['PENDING', 'COMPLETED', 'FAILED'],
        default: 'PENDING'
    },
    price: {
        type: Number,
        required: true
    }
});

const Booking = mongoose.model('Booking', bookingSchema);
export default Booking;
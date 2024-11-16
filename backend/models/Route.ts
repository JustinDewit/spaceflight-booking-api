import mongoose from 'mongoose';

const routeSchema = new mongoose.Schema({
    // schema definition
});

const Route = mongoose.model('Route', routeSchema);
export default Route;

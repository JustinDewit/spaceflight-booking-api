import axios from 'axios';

const API_URL = 'http://localhost:3000/api';

export interface Flight {
  _id: string;
  flightNumber: string;
  departure: {
    location: string;
    date: string;
  };
  arrival: {
    location: string;
    estimatedDate: string;
  };
  price: number;
  availableSeats: number;
  status: string;
  spacecraft: string;
  description: string;
}

export interface BookingRequest {
  passenger: {
    name: string;
    email: string;
    passport: string;
  };
}

export const api = {
  getAllFlights: () => axios.get<Flight[]>(`${API_URL}/flights`),
  getFlight: (id: string) => axios.get<Flight>(`${API_URL}/flights/${id}`),
  bookFlight: (id: string, data: BookingRequest) => 
    axios.post(`${API_URL}/flights/${id}`, data),
};
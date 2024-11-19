import { useEffect, useState } from "react";
import { api, Flight } from "../services/api";

export function FlightList() {
  const [flights, setFlights] = useState<Flight[]>([]);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchFlights = async () => {
      try {
        const response = await api.getAllFlights();
        setFlights(response.data);
      } catch (err) {
        setError("Failed to fetch flights");
      }
    };

    fetchFlights();
  }, []);

  if (error) return <div className="error">{error}</div>;

  return (
    <div className="flight-list">
      <h2>Available Flights</h2>
      <div className="flights-grid">
        {flights.map((flight) => (
          <div key={flight._id} className="flight-card">
            <h3>{flight.flightNumber}</h3>
            <p>From: {flight.departure.location}</p>
            <p>To: {flight.arrival.location}</p>
            <p>Price: ${flight.price}</p>
            <p>Available-Seats: {flight.availableSeats}</p>
            <p>Status: {flight.status}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

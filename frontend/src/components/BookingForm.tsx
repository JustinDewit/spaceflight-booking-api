import { useState } from "react";
import { api, BookingRequest } from "../services/api";

interface BookingFormProps {
  flightId: string;
  onSuccess: () => void;
}

export function BookingForm({ flightId, onSuccess }: BookingFormProps) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    passport: "",
  });
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const bookingData: BookingRequest = {
        passenger: {
          name: formData.name,
          email: formData.email,
          passport: formData.passport,
        },
      };
      await api.bookFlight(flightId, bookingData);
      onSuccess();
    } catch (err) {
      setError("Failed to book flight");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="booking-form">
      <h3>Book Flight</h3>
      {error && <div className="error">{error}</div>}
      <div>
        <label>Name:</label>
        <input
          type="text"
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          required
        />
      </div>
      <div>
        <label>Email:</label>
        <input
          type="email"
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          required
        />
      </div>
      <div>
        <label>Passport:</label>
        <input
          type="text"
          value={formData.passport}
          onChange={(e) =>
            setFormData({ ...formData, passport: e.target.value })
          }
          required
        />
      </div>
      <button type="submit">Book Now</button>
    </form>
  );
}

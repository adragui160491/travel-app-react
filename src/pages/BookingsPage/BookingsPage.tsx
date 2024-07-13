// src/pages/BookingsPage/BookingsPage.tsx

import React, { useState, useEffect } from 'react';
import bookingsData from '../../data/bookings.json';
import { Booking } from '../../types/types';

const BookingsPage: React.FC = () => {
  const [bookings, setBookings] = useState<Booking[]>([]);

  useEffect(() => {
    setBookings(bookingsData);
  }, []);

  const handleCancelBooking = (bookingId: string) => {
    // Aquí iría la lógica para cancelar la reserva
    console.log('Cancelling booking:', bookingId);
    setBookings(bookings.filter((booking) => booking.id !== bookingId));
  };

  return (
    <main className="bookings-page">
      <h1 className="visually-hidden">Travel App</h1>
      <ul className="bookings__list">
        {bookings.map((booking) => (
          <li key={booking.id} data-test-id="booking" className="booking">
            <h3 data-test-id="booking-title" className="booking__title">
              {booking.trip.title}
            </h3>
            <span data-test-id="booking-guests" className="booking__guests">
              {booking.guests} guests
            </span>
            <span data-test-id="booking-date" className="booking__date">
              {new Date(booking.date).toLocaleDateString()}
            </span>
            <span data-test-id="booking-total" className="booking__total">
              ${booking.totalPrice}
            </span>
            <button
              data-test-id="booking-cancel"
              className="booking__cancel"
              title="Cancel booking"
              onClick={() => handleCancelBooking(booking.id)}
            >
              <span className="visually-hidden">Cancel booking</span>
              ×
            </button>
          </li>
        ))}
      </ul>
    </main>
  );
};

export default BookingsPage;

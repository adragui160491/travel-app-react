// src/components/BookTripModal/BookTripModal.tsx

import React, { useState } from 'react';
import { Trip } from '../../types/types';

interface BookTripModalProps {
  trip: Trip;
  onClose: () => void;
}

const BookTripModal: React.FC<BookTripModalProps> = ({ trip, onClose }) => {
  const [date, setDate] = useState('');
  const [guests, setGuests] = useState(1);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Aquí iría la lógica para reservar el viaje
    console.log('Booking trip:', { tripId: trip.id, date, guests });
    onClose();
  };

  return (
    <div className="modal">
      <div data-test-id="book-trip-popup" className="book-trip-popup">
        <button
          data-test-id="book-trip-popup-close"
          className="book-trip-popup__close"
          onClick={onClose}
        >
          ×
        </button>
        <form className="book-trip-popup__form" autoComplete="off" onSubmit={handleSubmit}>
          <div className="trip-info">
            <h3 data-test-id="book-trip-popup-title" className="trip-info__title">
              {trip.title}
            </h3>
            <div className="trip-info__content">
              <span
                data-test-id="book-trip-popup-duration"
                className="trip-info__duration"
              >
                <strong>{trip.duration}</strong> days
              </span>
              <span
                data-test-id="book-trip-popup-level"
                className="trip-info__level"
              >
                {trip.level}
              </span>
            </div>
          </div>
          <label className="input">
            <span className="input__heading">Date</span>
            <input
              data-test-id="book-trip-popup-date"
              name="date"
              type="date"
              required
              value={date}
              onChange={(e) => setDate(e.target.value)}
            />
          </label>
          <label className="input">
            <span className="input__heading">Number of guests</span>
            <input
              data-test-id="book-trip-popup-guests"
              name="guests"
              type="number"
              min="1"
              max="10"
              value={guests}
              required
              onChange={(e) => setGuests(parseInt(e.target.value))}
            />
          </label>
          <span className="book-trip-popup__total">
            Total:
            <output
              data-test-id="book-trip-popup-total-value"
              className="book-trip-popup__total-value"
            >
              ${trip.price * guests}
            </output>
          </span>
          <button
            data-test-id="book-trip-popup-submit"
            className="button"
            type="submit"
          >
            Book a trip
          </button>
        </form>
      </div>
    </div>
  );
};

export default BookTripModal;

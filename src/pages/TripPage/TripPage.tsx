// src/pages/TripPage/TripPage.tsx

import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Trip } from '../../types/types';
import tripsData from '../../data/trips.json';
import BookTripModal from '../../components/BookTripModal/BookTripModal';

const TripPage: React.FC = () => {
  const { tripId } = useParams<{ tripId: string }>();
  const [trip, setTrip] = useState<Trip | null>(null);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    const foundTrip = tripsData.find((t) => t.id === tripId);
    setTrip(foundTrip || null);
  }, [tripId]);

  if (!trip) {
    return <div>Trip not found</div>;
  }

  const handleBookTrip = () => {
    setShowModal(true);
  };

  return (
    <main className="trip-page">
      <h1 className="visually-hidden">Travel App</h1>
      <div className="trip">
        <img
          data-test-id="trip-details-image"
          src={trip.image}
          className="trip__img"
          alt={`${trip.title} trip`}
        />
        <div className="trip__content">
          <div className="trip-info">
            <h3 data-test-id="trip-details-title" className="trip-info__title">
              {trip.title}
            </h3>
            <div className="trip-info__content">
              <span
                data-test-id="trip-details-duration"
                className="trip-info__duration"
              >
                <strong>{trip.duration}</strong> days
              </span>
              <span data-test-id="trip-details-level" className="trip-info__level">
                {trip.level}
              </span>
            </div>
          </div>
          <div
            data-test-id="trip-details-description"
            className="trip__description"
          >
            {trip.description}
          </div>
          <div className="trip-price">
            <span>Price</span>
            <strong
              data-test-id="trip-details-price-value"
              className="trip-price__value"
            >
              ${trip.price}
            </strong>
          </div>
          <button
            data-test-id="trip-details-button"
            className="trip__button button"
            onClick={handleBookTrip}
          >
            Book a trip
          </button>
        </div>
      </div>
      {showModal && (
        <BookTripModal trip={trip} onClose={() => setShowModal(false)} />
      )}
    </main>
  );
};

export default TripPage;

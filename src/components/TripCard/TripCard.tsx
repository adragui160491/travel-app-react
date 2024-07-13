// src/components/TripCard/TripCard.tsx

import React from 'react';
import { Link } from 'react-router-dom';
import { Trip } from '../../types/types';

interface TripCardProps {
  trip: Trip;
}

const TripCard: React.FC<TripCardProps> = ({ trip }) => {
  return (
    <li data-test-id="trip-card" className="trip-card">
      <img
        data-test-id="trip-card-image"
        src={trip.image}
        alt={`${trip.title} trip`}
      />
      <div className="trip-card__content">
        <div className="trip-info">
          <h3 data-test-id="trip-card-title" className="trip-info__title">
            {trip.title}
          </h3>
          <div className="trip-info__content">
            <span
              data-test-id="trip-card-duration"
              className="trip-info__duration"
            >
              <strong>{trip.duration}</strong> days
            </span>
            <span data-test-id="trip-card-level" className="trip-info__level">
              {trip.level}
            </span>
          </div>
        </div>
        <div className="trip-price">
          <span>Price</span>
          <strong
            data-test-id="trip-card-price-value"
            className="trip-price__value"
          >
            ${trip.price}
          </strong>
        </div>
      </div>
      <Link
        data-test-id="trip-card-link"
        to={`/trip/${trip.id}`}
        className="button"
      >
        Discover a trip
      </Link>
    </li>
  );
};

export default TripCard;

// src/pages/MainPage/MainPage.tsx

import React, { useState, useEffect } from 'react';
import TripFilter from '../../components/TripFilter/TripFilter';
import TripCard from '../../components/TripCard/TripCard';
import { Trip } from '../../types/types';
import tripsData from '../../data/trips.json';

const MainPage: React.FC = () => {
  const [trips, setTrips] = useState<Trip[]>([]);
  const [filteredTrips, setFilteredTrips] = useState<Trip[]>([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [durationFilter, setDurationFilter] = useState('');
  const [levelFilter, setLevelFilter] = useState('');

  useEffect(() => {
    setTrips(tripsData);
    setFilteredTrips(tripsData);
  }, []);

  useEffect(() => {
    const filtered = trips.filter((trip) => {
      const matchesSearch = trip.title.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesDuration = durationFilter === '' || (
        (durationFilter === '0_x_5' && trip.duration < 5) ||
        (durationFilter === '5_x_10' && trip.duration >= 5 && trip.duration < 10) ||
        (durationFilter === '10' && trip.duration >= 10)
      );
      const matchesLevel = levelFilter === '' || trip.level === levelFilter;
      return matchesSearch && matchesDuration && matchesLevel;
    });
    setFilteredTrips(filtered);
  }, [trips, searchTerm, durationFilter, levelFilter]);

  return (
    <main>
      <h1 className="visually-hidden">Travel App</h1>
      <TripFilter
        onSearchChange={setSearchTerm}
        onDurationChange={setDurationFilter}
        onLevelChange={setLevelFilter}
      />
      <section className="trips">
        <h2 className="visually-hidden">Trips List</h2>
        <ul className="trip-list">
          {filteredTrips.map((trip) => (
            <TripCard key={trip.id} trip={trip} />
          ))}
        </ul>
      </section>
    </main>
  );
};

export default MainPage;

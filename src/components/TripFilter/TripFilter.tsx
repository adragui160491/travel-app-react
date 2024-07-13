// src/components/TripFilter/TripFilter.tsx

import React from 'react';

interface TripFilterProps {
  onSearchChange: (value: string) => void;
  onDurationChange: (value: string) => void;
  onLevelChange: (value: string) => void;
}

const TripFilter: React.FC<TripFilterProps> = ({
  onSearchChange,
  onDurationChange,
  onLevelChange,
}) => {
  return (
    <section className="trips-filter">
      <h2 className="visually-hidden">Trips filter</h2>
      <form className="trips-filter__form" autoComplete="off">
        <label className="trips-filter__search input">
          <span className="visually-hidden">Search by name</span>
          <input
            data-test-id="filter-search"
            name="search"
            type="search"
            placeholder="search by title"
            onChange={(e) => onSearchChange(e.target.value)}
          />
        </label>
        <label className="select">
          <span className="visually-hidden">Search by duration</span>
          <select
            data-test-id="filter-duration"
            name="duration"
            onChange={(e) => onDurationChange(e.target.value)}
          >
            <option value="">duration</option>
            <option value="0_x_5">&lt; 5 days</option>
            <option value="5_x_10">&lt; 10 days</option>
            <option value="10">&ge; 10 days</option>
          </select>
        </label>
        <label className="select">
          <span className="visually-hidden">Search by level</span>
          <select
            data-test-id="filter-level"
            name="level"
            onChange={(e) => onLevelChange(e.target.value)}
          >
            <option value="">level</option>
            <option value="easy">easy</option>
            <option value="moderate">moderate</option>
            <option value="difficult">difficult</option>
          </select>
        </label>
      </form>
    </section>
  );
};

export default TripFilter;

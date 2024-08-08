import React from 'react';

const Header = ({ onSearch, onGetCurrentLocation }) => {
  const [location, setLocation] = React.useState('');

  const handleSearch = () => {
    onSearch(location);
  };

  return (
    <header>
      <h1>Weather Forecast</h1>
      <input
        type="text"
        value={location}
        onChange={(e) => setLocation(e.target.value)}
        placeholder="Enter location"
      />
      <button onClick={handleSearch}>Search</button>
      <button onClick={onGetCurrentLocation}>Current Location</button>
    </header>
  );
};

export default Header;

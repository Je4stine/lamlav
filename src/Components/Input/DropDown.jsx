import React, { useState } from "react";

const countries = [
  "Kenya",
  "Uganda",
  "Tanzania",
  "Rwanda",
  "Zimbabwe",
  "South Africa"
];

const Dropdown = () => {
  const [selectedCountry, setSelectedCountry] = useState("");

  const handleCountryChange = (e) => {
    setSelectedCountry(e.target.value);
  };

  return (
    <div className="mt-4">
      <label htmlFor="country" className="block text-sm font-medium text-gray-700">
        Select a destination
      </label>
      <select
        id="country"
        name="country"
        value={selectedCountry}
        onChange={handleCountryChange}
        className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
      >
        <option value="">Select a destination</option>
        {countries.map((country, index) => (
          <option key={index} value={country}>
            {country}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Dropdown;

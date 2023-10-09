import React from 'react';

function Radio({ selectedOption, handleOptionChange, name, safari}) {
  return (
    <div className="flex items-center space-x-4">
    <input
      type="radio"
      id="option1"
      name="radioGroup"
      value={safari}
      checked={selectedOption === safari}
      onChange={handleOptionChange}
      className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300"
    />
    <label htmlFor="option1">{name}</label>
  </div>
  )
}

export default Radio;
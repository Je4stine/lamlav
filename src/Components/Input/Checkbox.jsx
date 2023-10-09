import React, { useState } from "react";

const Checkbox = ({ label }) => {
  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };

  return (
    <div className="flex items-center">
      <input
        type="checkbox"
        className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
        checked={isChecked}
        onChange={handleCheckboxChange}
      />
      <label className="ml-2 block text-sm text-gray-900">{label}</label>
    </div>
  );
};

export default Checkbox;

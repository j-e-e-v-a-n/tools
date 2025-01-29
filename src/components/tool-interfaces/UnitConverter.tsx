import React, { useState } from 'react';

const UnitConverter: React.FC = () => {
  const [input, setInput] = useState<number | string>('');
  const [output, setOutput] = useState<string>('');

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInput(event.target.value);
  };

  const convertUnit = () => {
    const value = Number(input);
    if (!isNaN(value)) {
      const metersToFeet = value * 3.28084;
      setOutput(`${value} meters = ${metersToFeet} feet`);
    } else {
      setOutput('Please enter a valid number');
    }
  };

  return (
    <div className="space-y-4">
      <div>
        <label className="block text-sm font-medium text-gray-700">Enter Value (meters)</label>
        <input
          type="text"
          value={input}
          onChange={handleInputChange}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
        />
      </div>

      <button
        onClick={convertUnit}
        className="px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700"
      >
        Convert to Feet
      </button>

      {output && (
        <div>
          <p className="mt-2">{output}</p>
        </div>
      )}
    </div>
  );
};

export default UnitConverter;

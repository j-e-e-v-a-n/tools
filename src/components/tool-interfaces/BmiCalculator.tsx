import React, { useState } from 'react';

const BmiCalculator: React.FC = () => {
  const [height, setHeight] = useState<number | string>('');
  const [weight, setWeight] = useState<number | string>('');
  const [bmi, setBmi] = useState<string>('');

  const handleHeightChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setHeight(event.target.value);
  };

  const handleWeightChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setWeight(event.target.value);
  };

  const calculateBmi = () => {
    const h = Number(height);
    const w = Number(weight);
    if (!isNaN(h) && !isNaN(w) && h > 0 && w > 0) {
      const bmiValue = w / (h * h);
      setBmi(`Your BMI: ${bmiValue.toFixed(2)}`);
    } else {
      setBmi('Please enter valid height and weight');
    }
  };

  return (
    <div className="space-y-4">
      <div>
        <label className="block text-sm font-medium text-gray-700">Height (in meters)</label>
        <input
          type="text"
          value={height}
          onChange={handleHeightChange}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700">Weight (in kg)</label>
        <input
          type="text"
          value={weight}
          onChange={handleWeightChange}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
        />
      </div>

      <button
        onClick={calculateBmi}
        className="px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700"
      >
        Calculate BMI
      </button>

      {bmi && (
        <div>
          <p className="mt-2">{bmi}</p>
        </div>
      )}
    </div>
  );
};

export default BmiCalculator;

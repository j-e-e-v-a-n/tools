import React, { useState } from 'react';

const AgeCalculator: React.FC = () => {
  const [dob, setDob] = useState<string>('');
  const [age, setAge] = useState<string>('');

  const handleDobChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setDob(event.target.value);
  };

  const calculateAge = () => {
    const birthDate = new Date(dob);
    const currentDate = new Date();
    const ageInMillisec = currentDate.getTime() - birthDate.getTime();
    const ageDate = new Date(ageInMillisec);
    const calculatedAge = Math.abs(ageDate.getUTCFullYear() - 1970);
    setAge(`Your age is ${calculatedAge} years`);
  };

  return (
    <div className="space-y-4">
      <div>
        <label className="block text-sm font-medium text-gray-700">Enter Date of Birth</label>
        <input
          type="date"
          value={dob}
          onChange={handleDobChange}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
        />
      </div>

      <button
        onClick={calculateAge}
        className="px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700"
      >
        Calculate Age
      </button>

      {age && (
        <div>
          <p className="mt-2">{age}</p>
        </div>
      )}
    </div>
  );
};

export default AgeCalculator;

import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

const UuidGenerator: React.FC = () => {
  const [uuid, setUuid] = useState('');

  const generateUuid = () => {
    setUuid(uuidv4());
  };

  return (
    <div className="space-y-4">
      <button
        onClick={generateUuid}
        className="px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700"
      >
        Generate UUID
      </button>

      <div>
        <label className="block text-sm font-medium text-gray-700">Generated UUID</label>
        <div className="mt-1 p-4 bg-gray-50 rounded-md">
          <p>{uuid}</p>
        </div>
      </div>
    </div>
  );
};

export default UuidGenerator;

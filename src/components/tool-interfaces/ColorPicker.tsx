import React, { useState } from 'react';

const ColorPicker: React.FC = () => {
  const [color, setColor] = useState('#000000');

  const handleColorChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setColor(event.target.value);
  };

  return (
    <div className="space-y-4">
      <div>
        <label className="block text-sm font-medium text-gray-700">Pick a Color</label>
        <input
          type="color"
          value={color}
          onChange={handleColorChange}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
        />
      </div>

      <div>
        <p>Selected Color: {color}</p>
      </div>
    </div>
  );
};

export default ColorPicker;

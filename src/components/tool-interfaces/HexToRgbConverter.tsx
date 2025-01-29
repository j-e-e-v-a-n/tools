import React, { useState } from 'react';

const HexToRgbConverter: React.FC = () => {
  const [hex, setHex] = useState<string>('');
  const [rgb, setRgb] = useState<string>('');

  const handleHexChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setHex(event.target.value);
  };

  const convertHexToRgb = () => {
    const hexValue = hex.replace('#', '');
    if (/^[0-9A-Fa-f]{6}$/.test(hexValue)) {
      const r = parseInt(hexValue.substring(0, 2), 16);
      const g = parseInt(hexValue.substring(2, 4), 16);
      const b = parseInt(hexValue.substring(4, 6), 16);
      setRgb(`rgb(${r}, ${g}, ${b})`);
    } else {
      setRgb('Invalid Hex Color');
    }
  };

  return (
    <div className="space-y-4">
      <div>
        <label className="block text-sm font-medium text-gray-700">Enter Hexadecimal Color</label>
        <input
          type="text"
          value={hex}
          onChange={handleHexChange}
          placeholder="#ffffff"
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
        />
      </div>

      <button
        onClick={convertHexToRgb}
        className="px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700"
      >
        Convert to RGB
      </button>

      {rgb && (
        <div>
          <p className="mt-2">RGB Value: {rgb}</p>
        </div>
      )}
    </div>
  );
};

export default HexToRgbConverter;

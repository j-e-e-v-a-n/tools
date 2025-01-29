import React, { useState } from 'react';
import { generatePassword } from '../../utils/toolProcessors';
import { Copy } from 'lucide-react';

const PasswordGenerator: React.FC = () => {
  const [length, setLength] = useState(12);
  const [options, setOptions] = useState({
    uppercase: true,
    lowercase: true,
    numbers: true,
    symbols: true
  });
  const [password, setPassword] = useState('');

  const handleGenerate = () => {
    const newPassword = generatePassword(length, options);
    setPassword(newPassword);
  };

  const handleCopy = async () => {
    if (password) {
      await navigator.clipboard.writeText(password);
    }
  };

  return (
    <div className="space-y-6">
      <div>
        <label className="block text-sm font-medium text-gray-700">Password Length</label>
        <input
          type="range"
          min="8"
          max="32"
          value={length}
          onChange={(e) => setLength(Number(e.target.value))}
          className="w-full mt-2"
        />
        <span className="text-sm text-gray-500">{length} characters</span>
      </div>

      <div className="space-y-2">
        <label className="block text-sm font-medium text-gray-700">Options</label>
        {Object.entries(options).map(([key, value]) => (
          <div key={key} className="flex items-center">
            <input
              type="checkbox"
              checked={value}
              onChange={(e) => setOptions({ ...options, [key]: e.target.checked })}
              className="rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
            />
            <span className="ml-2 text-sm text-gray-700 capitalize">{key}</span>
          </div>
        ))}
      </div>

      <button
        onClick={handleGenerate}
        className="w-full px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700"
      >
        Generate Password
      </button>

      {password && (
        <div className="relative">
          <input
            type="text"
            readOnly
            value={password}
            className="w-full pr-10 rounded-md border-gray-300"
          />
          <button
            onClick={handleCopy}
            className="absolute right-2 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
          >
            <Copy className="h-5 w-5" />
          </button>
        </div>
      )}
    </div>
  );
};

export default PasswordGenerator;
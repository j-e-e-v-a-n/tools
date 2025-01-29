import React, { useState } from 'react';

const Base64EncoderDecoder: React.FC = () => {
  const [input, setInput] = useState<string>('');
  const [encoded, setEncoded] = useState<string>('');
  const [decoded, setDecoded] = useState<string>('');

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInput(event.target.value);
  };

  const handleEncode = () => {
    setEncoded(btoa(input));
  };

  const handleDecode = () => {
    setDecoded(atob(input));
  };

  return (
    <div className="space-y-4">
      <div>
        <label className="block text-sm font-medium text-gray-700">Enter Text to Encode/Decode</label>
        <input
          type="text"
          value={input}
          onChange={handleInputChange}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
        />
      </div>

      <div className="flex space-x-4">
        <button
          onClick={handleEncode}
          className="px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700"
        >
          Encode to Base64
        </button>
        <button
          onClick={handleDecode}
          className="px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700"
        >
          Decode from Base64
        </button>
      </div>

      {encoded && (
        <div>
          <p className="mt-2">Encoded Base64:</p>
          <p className="text-gray-700">{encoded}</p>
        </div>
      )}

      {decoded && (
        <div>
          <p className="mt-2">Decoded Text:</p>
          <p className="text-gray-700">{decoded}</p>
        </div>
      )}
    </div>
  );
};

export default Base64EncoderDecoder;

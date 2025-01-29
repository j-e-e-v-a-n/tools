import React, { useState } from 'react';

const TextCounter: React.FC = () => {
  const [text, setText] = useState('');
  const [count, setCount] = useState({ words: 0, characters: 0, lines: 0 });

  const handleCount = () => {
    const lines = text.split('\n').length;
    const words = text.trim().split(/\s+/).length;
    const characters = text.length;
    setCount({ words, characters, lines });
  };

  return (
    <div className="space-y-4">
      <div>
        <label className="block text-sm font-medium text-gray-700">Input Text</label>
        <textarea
          value={text}
          onChange={(e) => setText(e.target.value)}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
          rows={6}
        />
      </div>

      <button
        onClick={handleCount}
        className="px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700"
      >
        Count
      </button>

      <div>
        <p>Words: {count.words}</p>
        <p>Characters: {count.characters}</p>
        <p>Lines: {count.lines}</p>
      </div>
    </div>
  );
};

export default TextCounter;

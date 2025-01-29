import React, { useState } from 'react';

const RegexTester: React.FC = () => {
  const [regex, setRegex] = useState('');
  const [text, setText] = useState('');
  const [match, setMatch] = useState<string[]>([]);

  const handleTestRegex = () => {
    try {
      const regExp = new RegExp(regex);
      const matches = text.match(regExp);
      setMatch(matches || []);
    } catch (e) {
      setMatch([]);
    }
  };

  return (
    <div className="space-y-4">
      <div>
        <label className="block text-sm font-medium text-gray-700">Regular Expression</label>
        <input
          type="text"
          value={regex}
          onChange={(e) => setRegex(e.target.value)}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700">Test Text</label>
        <textarea
          value={text}
          onChange={(e) => setText(e.target.value)}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
          rows={6}
        />
      </div>

      <button
        onClick={handleTestRegex}
        className="px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700"
      >
        Test Regex
      </button>

      <div>
        <label className="block text-sm font-medium text-gray-700">Matches</label>
        <div className="mt-1 p-4 bg-gray-50 rounded-md">
          <pre>{match.length ? match.join(', ') : 'No matches found'}</pre>
        </div>
      </div>
    </div>
  );
};

export default RegexTester;

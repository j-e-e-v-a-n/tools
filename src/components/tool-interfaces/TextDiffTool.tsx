import React, { useState } from 'react';
import * as Diff from 'diff';


const TextDiffTool: React.FC = () => {
  const [text1, setText1] = useState('');
  const [text2, setText2] = useState('');
  const [diff, setDiff] = useState<any[]>([]);

  const handleCompare = () => {
    const differences = Diff.diffWords(text1, text2);
    setDiff(differences);
  };

  return (
    <div className="space-y-4">
      <div>
        <label className="block text-sm font-medium text-gray-700">Text 1</label>
        <textarea
          value={text1}
          onChange={(e) => setText1(e.target.value)}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
          rows={6}
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700">Text 2</label>
        <textarea
          value={text2}
          onChange={(e) => setText2(e.target.value)}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
          rows={6}
        />
      </div>

      <button
        onClick={handleCompare}
        className="px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700"
      >
        Compare Texts
      </button>

      {diff.length > 0 && (
        <div>
          <label className="block text-sm font-medium text-gray-700">Differences</label>
          <div className="mt-1 p-4 bg-gray-50 rounded-md">
            {diff.map((part, index) => (
              <span
                key={index}
                style={{
                  color: part.added ? 'green' : part.removed ? 'red' : 'black',
                }}
              >
                {part.value}
              </span>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default TextDiffTool;

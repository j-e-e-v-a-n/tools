import React, { useState } from 'react';
import { convertCase } from '../../utils/toolProcessors';

const TextCaseConverter: React.FC = () => {
  const [text, setText] = useState('');
  const [result, setResult] = useState('');

  const handleConvert = (type: 'upper' | 'lower' | 'title' | 'sentence') => {
    setResult(convertCase(text, type));
  };

  return (
    <div className="space-y-4">
      <div>
        <label className="block text-sm font-medium text-gray-700">Input Text</label>
        <textarea
          value={text}
          onChange={(e) => setText(e.target.value)}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
          rows={4}
        />
      </div>

      <div className="flex flex-wrap gap-2">
        <button
          onClick={() => handleConvert('upper')}
          className="px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700"
        >
          UPPERCASE
        </button>
        <button
          onClick={() => handleConvert('lower')}
          className="px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700"
        >
          lowercase
        </button>
        <button
          onClick={() => handleConvert('title')}
          className="px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700"
        >
          Title Case
        </button>
        <button
          onClick={() => handleConvert('sentence')}
          className="px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700"
        >
          Sentence case
        </button>
      </div>

      {result && (
        <div>
          <label className="block text-sm font-medium text-gray-700">Result</label>
          <div className="mt-1 p-4 bg-gray-50 rounded-md">
            <p className="whitespace-pre-wrap">{result}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default TextCaseConverter;
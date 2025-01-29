import React, { useState } from 'react';
import ReactMarkdown from 'react-markdown';

const MarkdownPreviewer: React.FC = () => {
  const [markdownText, setMarkdownText] = useState<string>('');

  const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setMarkdownText(event.target.value);
  };

  return (
    <div className="space-y-4">
      <div>
        <label className="block text-sm font-medium text-gray-700">Enter Markdown Text</label>
        <textarea
          value={markdownText}
          onChange={handleChange}
          placeholder="Write your markdown here"
          className="mt-1 block w-full h-48 rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
        />
      </div>

      <div className="p-4 bg-gray-100 rounded-md">
        <ReactMarkdown>{markdownText}</ReactMarkdown>
      </div>
    </div>
  );
};

export default MarkdownPreviewer;

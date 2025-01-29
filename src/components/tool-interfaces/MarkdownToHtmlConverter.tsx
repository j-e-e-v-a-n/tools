import React, { useState } from 'react';
import { marked } from 'marked';


const MarkdownToHtmlConverter: React.FC = () => {
  const [markdown, setMarkdown] = useState('');
  const [html, setHtml] = useState('');

  const handleConvert = () => {
    setHtml(marked(markdown));
  };

  return (
    <div className="space-y-4">
      <div>
        <label className="block text-sm font-medium text-gray-700">Markdown Text</label>
        <textarea
          value={markdown}
          onChange={(e) => setMarkdown(e.target.value)}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
          rows={6}
        />
      </div>

      <button
        onClick={handleConvert}
        className="px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700"
      >
        Convert to HTML
      </button>

      {html && (
        <div>
          <label className="block text-sm font-medium text-gray-700">HTML Output</label>
          <div className="mt-1 p-4 bg-gray-50 rounded-md">
            <div dangerouslySetInnerHTML={{ __html: html }} />
          </div>
        </div>
      )}
    </div>
  );
};

export default MarkdownToHtmlConverter;

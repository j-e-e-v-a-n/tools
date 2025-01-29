import React, { useState } from 'react';
import { marked } from 'marked';

const MarkdownToHtml: React.FC = () => {
  const [inputText, setInputText] = useState<string>('');
  const [outputHtml, setOutputHtml] = useState<string>('');

  const convertMarkdownToHtml = () => {
    const html = marked(inputText);
    setOutputHtml(html);
  };

  return (
    <div>
      <h2>Markdown to HTML</h2>
      <textarea onChange={(e) => setInputText(e.target.value)} />
      <button onClick={convertMarkdownToHtml}>Convert</button>
      <div dangerouslySetInnerHTML={{ __html: outputHtml }} />
    </div>
  );
};

export default MarkdownToHtml;

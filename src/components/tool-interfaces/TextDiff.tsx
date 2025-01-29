import React, { useState } from 'react';
import { diffChars } from 'diff';

const TextDiff: React.FC = () => {
  const [inputText, setInputText] = useState<string>('');
  const [outputText, setOutputText] = useState<string>('');

  const compareTexts = () => {
    const differences = diffChars(inputText, outputText);
    setOutputText(JSON.stringify(differences, null, 2));
  };

  return (
    <div>
      <h2>Text Diff</h2>
      <textarea onChange={(e) => setInputText(e.target.value)} />
      <textarea onChange={(e) => setOutputText(e.target.value)} />
      <button onClick={compareTexts}>Compare</button>
      <pre>{outputText}</pre>
    </div>
  );
};

export default TextDiff;

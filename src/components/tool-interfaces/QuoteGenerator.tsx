import React, { useState, useEffect } from 'react';

const QuoteGenerator: React.FC = () => {
  const [quote, setQuote] = useState<string>('');
  const [author, setAuthor] = useState<string>('');

  const fetchQuote = async () => {
    const response = await fetch('https://api.quotable.io/random');
    const data = await response.json();
    setQuote(data.content);
    setAuthor(data.author);
  };

  useEffect(() => {
    fetchQuote();
  }, []);

  return (
    <div className="space-y-4">
      <div>
        <p className="text-xl font-semibold">"{quote}"</p>
        <p className="mt-2 text-sm text-gray-700">- {author}</p>
      </div>

      <button
        onClick={fetchQuote}
        className="px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700"
      >
        Generate New Quote
      </button>
    </div>
  );
};

export default QuoteGenerator;

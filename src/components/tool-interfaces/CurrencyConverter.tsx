import React, { useState, useEffect } from 'react';

const CurrencyConverter: React.FC = () => {
  const [amount, setAmount] = useState<number | string>('');
  const [convertedAmount, setConvertedAmount] = useState<string>('');
  const [exchangeRate, setExchangeRate] = useState<number>(0);

  const handleAmountChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setAmount(event.target.value);
  };

  const convertCurrency = () => {
    const value = Number(amount);
    if (!isNaN(value)) {
      setConvertedAmount((value * exchangeRate).toFixed(2));
    }
  };

  useEffect(() => {
    const fetchExchangeRate = async () => {
      const response = await fetch('https://api.exchangerate-api.com/v4/latest/USD');
      const data = await response.json();
      setExchangeRate(data.rates.EUR); // USD to EUR exchange rate
    };
    fetchExchangeRate();
  }, []);

  return (
    <div className="space-y-4">
      <div>
        <label className="block text-sm font-medium text-gray-700">Enter Amount in USD</label>
        <input
          type="text"
          value={amount}
          onChange={handleAmountChange}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
        />
      </div>

      <button
        onClick={convertCurrency}
        className="px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700"
      >
        Convert to EUR
      </button>

      {convertedAmount && (
        <div>
          <p className="mt-2">Converted Amount: €{convertedAmount}</p>
        </div>
      )}
    </div>
  );
};

export default CurrencyConverter;

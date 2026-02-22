
import { useState, useMemo } from "react";

export function CurrencyConverter() {
  const [amount, setAmount] = useState(1);
  const [fromCurrency, setFromCurrency] = useState('USD');
  const [toCurrency, setToCurrency] = useState('EUR');

  const exchangeRates = {
    USD: 1,
    EUR: 0.92,
    GBP: 0.78,
    JPY: 156.7
  };

  const baseValue = useMemo(() => {
    console.log('Recalculating base value - from currency changed');
    return amount / exchangeRates[fromCurrency];
  }, [amount, fromCurrency]);

  const convertedAmount = baseValue * exchangeRates[toCurrency];

  const handleAmountChange = (e) => {
    const value = parseFloat(e.target.value);
    setAmount(isNaN(value) ? 0 : value);
  };

  const handleFromCurrencyChange = (e) => {
    setFromCurrency(e.target.value);
  };

  const handleToCurrencyChange = (e) => {
    setToCurrency(e.target.value);
  };

  return (
    <div className="currency-converter">
      <h2>Currency Converter</h2>
      
      <div className="input-group">
        <label htmlFor="amount">Amount:</label>
        <input
          id="amount"
          type="number"
          value={amount}
          onChange={handleAmountChange}
          min="0"
          step="0.01"
        />
      </div>

      <div className="currency-selectors">
        <div className="input-group">
          <label htmlFor="fromCurrency">From:</label>
          <select
            id="fromCurrency"
            value={fromCurrency}
            onChange={handleFromCurrencyChange}
          >
            <option value="USD">USD - US Dollar</option>
            <option value="EUR">EUR - Euro</option>
            <option value="GBP">GBP - British Pound</option>
            <option value="JPY">JPY - Japanese Yen</option>
          </select>
        </div>

        <div className="input-group">
          <label htmlFor="toCurrency">To:</label>
          <select
            id="toCurrency"
            value={toCurrency}
            onChange={handleToCurrencyChange}
          >
            <option value="USD">USD - US Dollar</option>
            <option value="EUR">EUR - Euro</option>
            <option value="GBP">GBP - British Pound</option>
            <option value="JPY">JPY - Japanese Yen</option>
          </select>
        </div>
      </div>

      <div className="result">
        <h3>Converted Amount:</h3>
        <p className="converted-amount">
          {convertedAmount.toFixed(2)} {toCurrency}
        </p>
      </div>
    </div>
  );
}
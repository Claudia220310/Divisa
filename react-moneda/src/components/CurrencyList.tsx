import React from 'react';
import { CurrencyRate } from '../interfaces/Currency';

interface CurrencyList {
  currencyRate: CurrencyRate | null;
  loading: boolean;
  error: string | null;
}

const CurrencyList: React.FC<CurrencyList> = ({ currencyRate, loading, error }) => {
  if (loading) return <p>Cargando...</p>;
  if (error) return <p>{error}</p>;
  if (!currencyRate) return null; // Si no hay datos y no está cargando, no mostramos nada.

  return (
    <div>
      <h2>Tarifas para {currencyRate.date}</h2>
      <ul>
        {Object.entries(currencyRate.rates).map(([currency, rate]) => (
          <li key={currency}>
            {currency}: {rate}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CurrencyList;

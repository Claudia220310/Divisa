import React, { useState } from 'react';
import { fetchCurrency } from '../hooks/fetchCurrency';
import { CurrencyRate } from '../interfaces/Currency';
import DateInput from './DateInput';
import CurrencyRateList from './CurrencyList';

const CurrencyPage: React.FC = () => {
  const [date, setDate] = useState<string>(''); // Estado para la fecha seleccionada
  const [currencyRate, setCurrencyRate] = useState<CurrencyRate | null>(null); // Estado para el tipo de cambio
  const [loading, setLoading] = useState<boolean>(false); // Estado de carga
  const [error, setError] = useState<string | null>(null); // Estado para el error

  // Manejador para actualizar la fecha
  const handleDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setDate(e.target.value);
  };

  // Manejador para buscar el tipo de cambio cuando el usuario presiona el botón
  const handleSearch = async () => {
    if (date) {
      setLoading(true); // Indicamos que está cargando
      const { currencyRate, error } = await fetchCurrency(date); // Llamamos a la función fetchCurrency
      setCurrencyRate(currencyRate); // Actualizamos el estado con los datos o null
      setError(error); // Si hay error, lo guardamos en el estado
      setLoading(false); // Terminamos la carga
    }
  };

  return (
    <div>
      <h1>Tipos de cambio de divisas históricos</h1>
      
      {/* Componente DateInput */}
      <DateInput 
        date={date}
        onDateChange={handleDateChange}
        onSearch={handleSearch}
      />

      {/* Componente CurrencyRateList */}
      <CurrencyRateList 
        currencyRate={currencyRate}
        loading={loading}
        error={error}
      />
    </div>
  );
};

export default CurrencyPage;

import axios from 'axios';
import { CurrencyRate } from '../interfaces/Currency';

export const fetchCurrency = async (date: string) => {
  try {
    const response = await axios.get<CurrencyRate>(`https://api.frankfurter.app/${date}`);
    return { currencyRate: response.data, error: null }; // Si todo va bien, devuelvo los datos
  } catch (err) {
    return { currencyRate: null, error: 'Error al obtener los datos.' }; // Si ocurre un error, devuelvo null y el mensaje de error
  }
};

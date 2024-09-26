export interface CurrencyRate {
    base: string;
    date: string;
    rates: {
      [key: string]: number;
    };
}
  
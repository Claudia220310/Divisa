import React from 'react';

interface DateInput {
  date: string;
  onDateChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onSearch: () => void;
}

const DateInput: React.FC<DateInput> = ({ date, onDateChange, onSearch }) => {
  return (
    <div>
      <label htmlFor="date">Ingrese una fecha:</label>
      <input
        type="date"
        value={date}
        onChange={onDateChange}
        required
      />
      <button onClick={onSearch}>Buscar</button>
    </div>
  );
};

export default DateInput;

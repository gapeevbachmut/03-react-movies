// import { useState } from 'react';
import css from './App.module.css';
import SearchBar from '../SearchBar/SearchBar';
import { Toaster } from 'react-hot-toast';

export default function App() {
  const handleSearchBar = (data: string) => {
    console.log('input - ', data);
    //     Якщо в результаті запиту масив фільмів порожній, виводьте повідомлення:
    // No movies found for your request.
    // Ця перевірка виконується в App при обробці HTTP-запиту.
    // if () {      console.log('No movies found for your request.');    }
  };

  return (
    <>
      <h1>Hello!</h1>
      <SearchBar onSubmit={handleSearchBar} />
      <Toaster />
      <img className={css.logo} src="/react.svg" alt="react" />
    </>
  );
}

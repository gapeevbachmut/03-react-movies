import { useState } from 'react';
import css from './App.module.css';
import SearchBar from '../SearchBar/SearchBar';
import { Toaster } from 'react-hot-toast';
import axios from 'axios';
import { type Movie, type MovieResponce } from '../../types/movie';

export default function App() {
  const [movie, setMovie] = useState<Movie[]>([]);
  // console.log(setMovie);
  // console.log(movie);
  const handleSearchBar = async (data: string) => {
    console.log('input - ', data);

    const myKey = import.meta.env.VITE_TMDB_TOKEN;
    const config = {
      params: {
        data, // те саме, що query: query
        include_adult: false,
        language: 'en-US',
        page: 1,
      },
      headers: {
        Authorization: `Bearer ${myKey}`,
      },
    };

    try {
      const responce = await axios.get<MovieResponce>(
        `https://api.themoviedb.org/3/search/movie?query=${data}`,
        config
      );
      console.log(responce.data);

      setMovie(responce.data.results);
    } catch (error) {
      console.error('Помилка при запиті фільмів:', error);
    }

    //     Якщо в результаті запиту масив фільмів порожній, виводьте повідомлення:
    // No movies found for your request.
    // Ця перевірка виконується в App при обробці HTTP-запиту.
    // if () {      console.log('No movies found for your request.');    }
  };

  return (
    <>
      <h1>Hello!</h1>

      <SearchBar onSubmit={handleSearchBar} />
      {movie.length > 0 && (
        <ul>
          {movie.map(({ id, title }) => (
            <li key={id}>
              <a href="" target="_blank">
                {title}
              </a>
            </li>
          ))}
        </ul>
      )}
      <Toaster />
      <img className={css.logo} src="/react.svg" alt="react" />
    </>
  );
}

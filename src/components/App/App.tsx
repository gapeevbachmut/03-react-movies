import { useState } from 'react';
import css from './App.module.css';
import SearchBar from '../SearchBar/SearchBar';
import { Toaster } from 'react-hot-toast';
import { type Movie } from '../../types/movie';
import { fetchMovies } from '../../services/movieService';

export default function App() {
  const [movie, setMovie] = useState<Movie[]>([]);

  const handleSearchBar = async (query: string) => {
    console.log('input - ', query);

    try {
      setMovie([]);
      const responce = await fetchMovies(query);
      if (responce.length === 0) {
        console.log('No movies found for your request.');
      }

      // setMovie(responce.data.results);
      setMovie(responce);
    } catch (error) {
      console.error('Помилка при запиті фільмів:', error);
    } finally {
      console.log('ok');
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

import { useState } from 'react';
import css from './App.module.css';
import SearchBar from '../SearchBar/SearchBar';
import toast from 'react-hot-toast';
import MovieGrid from '../MovieGrid/MovieGrid';
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
        toast.error('No movies found for your request.');
        console.log('No movies found for your request.');
      }
      // setMovie(responce.data.results);
      setMovie(responce);
    } catch (error) {
      toast.error(`Error while requesting movies:   ${error.code}`);
      console.error('Error while requesting movies:', error.code);
    } finally {
      console.log('ok');
    }
  };

  return (
    <>
      <h1>Hello!</h1>
      <img className={css.logo} src="/react.svg" alt="react" />
      <SearchBar onSubmit={handleSearchBar} />
      {movie.length > 0 && (
        <MovieGrid />
        // <ul>
        //   {movie.map(({ id, title }) => (
        //     <li key={id}>
        //       <a href="" target="_blank">
        //         {title}
        //       </a>
        //     </li>
        //   ))}
        // </ul>
      )}
      <Toaster />
    </>
  );
}

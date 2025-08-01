import axios from 'axios';
import { type Movie, type MovieResponce } from '../types/movie';

const myKey = import.meta.env.VITE_TMDB_TOKEN;

export const fetchMovies = async (query: string): Promise<Movie[]> => {
  const config = {
    params: {
      query,
      include_adult: false,
      language: 'en-US',
      page: 1,
    },
    headers: {
      Authorization: `Bearer ${myKey}`,
    },
  };

  const responce = await axios.get<MovieResponce>(
    `https://api.themoviedb.org/3/search/movie`,
    config
    //?query=${query}
  );
  return responce.data.results;
};

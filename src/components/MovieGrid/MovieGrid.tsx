// Компонент MovieGrid - це список карток фільмів. Він приймає два пропси:
// onSelect - функцію для обробки кліку на картку фільму;
// movies - масив фільмів.

import css from './MovieGrid.module.css';
import { type Movie } from '../../types/movie';

interface MovieGridProps {
  onSelect: (movieId: number) => void;
  movies: Movie[];
}

export default function MovieGrid({ onSelect, movies }: MovieGridProps) {
  return (
    <ul className={css.grid}>
      {/* Набір елементів списку з фільмами */}
      {movies.map(({ id, title, poster_path }) => (
        <li key={id} onClick={() => onSelect(id)}>
          <div className={css.card}>
            <img
              className={css.image}
              src={`https://image.tmdb.org/t/p/w500${poster_path}`}
              alt={title}
              loading="lazy"
            />
            <h2 className={css.title}>{title}</h2>
          </div>
        </li>
      ))}
    </ul>
  );
}

//
//
//
//
// <ul>
//   {movie.map(({ id, title }) => (
//     <li key={id}>
//       <a href="" target="_blank">
//         {title}
//       </a>
//     </li>
//   ))}
// </ul>

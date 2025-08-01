// Компонент MovieGrid - це список карток фільмів. Він приймає два пропси:
// onSelect - функцію для обробки кліку на картку фільму;
// movies - масив фільмів.

import css from './MovieGrid.module.css';

export default function MovieGrid() {
  return (
    <ul className={css.grid}>
      {/* Набір елементів списку з фільмами */}
      <li>
        <div className={css.card}>
          <img
            className={css.image}
            src="https://image.tmdb.org/t/p/w500/poster-path"
            alt="movie title"
            loading="lazy"
          />
          <h2 className={css.title}>Movie title</h2>
        </div>
      </li>
    </ul>
  );
}

// <ul>
//   {movie.map(({ id, title }) => (
//     <li key={id}>
//       <a href="" target="_blank">
//         {title}
//       </a>
//     </li>
//   ))}
// </ul>

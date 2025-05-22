import { Movie } from "@models/Movie";
import MovieCard from "./MovieCard/MovieCard";
import styles from "./MoviesViewer.module.css";

type MoviesViewerProps = {
  movies: Movie[];
};

const MoviesViewer = ({ movies }: MoviesViewerProps) => {
  return (
    <div className={styles.movieGrid}>
      {movies.map((movie) => (
        <div className={styles.movieCard} key={movie.imdbID}>
          <MovieCard movie={movie} />
        </div>
      ))}
    </div>
  );
};

export default MoviesViewer;

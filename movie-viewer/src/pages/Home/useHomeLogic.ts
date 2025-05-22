import { useState } from "react";
import { Movie } from "@models/Movie";
import { searchMovies } from "@services/moviesServices";

type MoviesState = {
  movies: Movie[];
  yearCount: Record<string, number>;
};

export function useHomeLogic() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [state, setState] = useState<MoviesState>({
    movies: [],
    yearCount: {},
  });

  const obtainMovies = async (query: string) => {
    setLoading(true);
    setError(null);
    try {
      const data = await searchMovies(query);
      const results: Movie[] = data.movies || [];
      const counts: Record<string, number> = {};
      results.forEach((movie) => {
        counts[movie.year] = (counts[movie.year] || 0) + 1;
      });

      setState({
        movies: results,
        yearCount: counts,
      });
    } catch (error: any) {
      console.error("Error fetching movies", error);
      setState({
        movies: [],
        yearCount: {},
      });
      setError(error.message || "An unknown error occurred while fetching movies.");
    } finally {
      setLoading(false);
    }
  };

  return {
    movies: state.movies,
    loading,
    yearCount: state.yearCount,
    obtainMovies,
    error,
  };
}

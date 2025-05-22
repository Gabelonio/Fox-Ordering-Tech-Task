import { Movie } from "@models/Movie";
import omdb from "api/omdb";

/**
 * Maps the API response to the Movie model.
 * @param {any} item - The item from the API response.
 * @returns {Movie} - The mapped Movie object.
 */
const mapToMovie = (item: any): Movie => ({
  imdbID: item.imdbID,
  title: item.Title,
  year: item.Year,
  type: item.Type,
  poster: item.Poster,
});

/**
 * Fetches movies from the OMDB API based on the provided movie title.
 * @param {string} movieTitle - The title of the movie to search for.
 * @returns {Promise<any>} - A promise that resolves to the response data from the API.
 */
export async function searchMovies(title: string) {
  try {
    const response = await omdb.get("", {
      params: { s: title, type: "movie" },
    });
    const rawMovies = response.data.Search;
    const processedMovies: Movie[] = rawMovies ? rawMovies.map(mapToMovie) : [];
    return { movies: processedMovies, Response: response.data.Response };
  } catch (err) {
    console.error("Error:", err);
    throw err;
  }
}

import { Movie } from "../../../models/Movie";
import Image from "@components/UI/Image/Image";
import Title from "@components/UI/Title/Title";
import Text from "@components/UI/Text/Text";
import styles from "./MovieCard.module.css";

interface MovieCardProps {
  movie: Movie;
}

const MovieCard: React.FC<MovieCardProps> = ({ movie }) => {
  const { title, year, poster, imdbID } = movie;

  return (
    <div className={styles.card}>
      <Image
        src={poster || "/img/no_image_available.png"}
        alt={title + " poster"}
        className={styles.image}
      />
      <div className={styles.textContent}>
        <Title level={3} className={styles.title}>
          {title}
        </Title>
        <Text className={styles.year}>{'Year :' + year}</Text>
        <Text className={styles.imdbId}>{'Imdb ID :' + imdbID}</Text>
      </div>
    </div>
  );
};

export default MovieCard;

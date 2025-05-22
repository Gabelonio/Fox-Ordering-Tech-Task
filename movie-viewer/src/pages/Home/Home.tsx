import styles from "./Home.module.css";
import { useHomeLogic } from "./useHomeLogic";
import { useSearchParams } from "react-router-dom";

import MoviesSearch from "@components/MoviesSearch/MoviesSearch";
import MoviesViewer from "@components/MoviesViewer/MoviesViewer";
import MoviesCounter from "@components/MoviesCounter/MoviesCounter";
import Text from "@components/UI/Text/Text";

import texts from "@texts/texts";
import Title from "@components/UI/Title/Title";


function Home() {
  const { movies, loading, obtainMovies, yearCount } = useHomeLogic();
  const [searchParams] = useSearchParams();

  let content;

  content = loading ? (
    <Text className={styles.infoText}>{texts.home.loading}</Text>
  ) : movies.length > 0 ? (
    <div className={styles.content}>
      <MoviesCounter yearCounts={yearCount} />
      <MoviesViewer movies={movies} />
    </div>
  ) : searchParams.get("search") ? (
    <Text className={styles.infoText}>{texts.home.noResults}</Text>
  ) : (
    <Text className={styles.infoText}>{texts.home.noResultsDefault}</Text>
  );

  return (
    <div className={styles.container}>
      <Title level={1} className={styles.title}>
        {texts.home.title}  
      </Title>
      <MoviesSearch onSearch={obtainMovies} />
      {content}
    </div>
  );
}

export default Home;

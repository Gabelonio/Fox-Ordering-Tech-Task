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
  const { movies, loading, obtainMovies, yearCount, error } = useHomeLogic();
  const [searchParams] = useSearchParams();

  let content;

  if (error) {
    content = (
      <Text className={styles.infoText} style={{ color: "red" }}>
        {texts.home.error + error}
      </Text>
    );
  } else if (loading) {
    content = <Text className={styles.infoText}>{texts.home.loading}</Text>;
  } else if (movies.length > 0) {
    content = (
      <div className={styles.content}>
        <MoviesCounter yearCounts={yearCount} />
        <MoviesViewer movies={movies} />
      </div>
    );
  } else if (searchParams.get("search")) {
    content = <Text className={styles.infoText}>{texts.home.noResults}</Text>;
  } else {
    content = (
      <Text className={styles.infoText}>{texts.home.noResultsDefault}</Text>
    );
  }

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

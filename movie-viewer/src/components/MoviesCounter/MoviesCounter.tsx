import Aside from "@components/UI/Aside/Aside";
import styles from "./MoviesCounter.module.css";
import Title from "@components/UI/Title/Title";
import texts from "@texts/texts";

interface MoviesCounterProps {
  yearCounts: Record<string, number>;
}

const MoviesCounter = ({ yearCounts }: MoviesCounterProps) => {
  return (
    <Aside className={styles.moviesListContainer}>
      <Title level={3}>{texts.counter.title}</Title>
      <ul>
        {Object.entries(yearCounts).map(([year, count]) => (
          <li key={year}>
            <span className={styles.year}>{year}</span>:{" "}
            <span className={styles.count}>{count + ' movie' + (count > 1 ? 's' : '')}</span>
          </li>
        ))}
      </ul>
    </Aside>
  );
};

export default MoviesCounter;

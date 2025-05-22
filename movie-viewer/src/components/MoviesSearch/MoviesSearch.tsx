import { useSearchParams } from "react-router-dom";
import styles from "./MoviesSearch.module.css";
import { useEffect, useRef, useState } from "react";
import Input from "@components/UI/Input/Input";
import Button from "@components/UI/Button/Button";
import texts from "@texts/texts";

interface Props {
  onSearch: (query: string) => Promise<void>;
}

export default function MoviesSearch({ onSearch }: Props) {
  const [searchParams, setSearchParams] = useSearchParams();
  const inputRef = useRef<HTMLInputElement>(null);
  const [defaultValue, setDefaultValue] = useState("");

  useEffect(() => {
    const param = searchParams.get("search") || "";
    setDefaultValue(param);

    if (param) {
      onSearch(param);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const value = inputRef.current?.value.trim();
    if (!value) return;

    setSearchParams({ search: value });
    
    onSearch(value);
  };

  return (
    <form className={styles.searchForm} onSubmit={handleSubmit}>
      <Input
        type="text"
        placeholder={texts.search.searchPlaceholder}
        defaultValue={defaultValue}
        inputRef={inputRef}
        className={styles.searchInput}
        required
      />
      <Button type="submit" className={styles.searchButton}>
        {texts.search.buttonText}
      </Button>
    </form>
  );
}

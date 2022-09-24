import { useMemo, useState } from "react";

const useSearch = (keyword, list, fiat) => {
  const [searchResult, setSearchResult] = useState();

  useMemo(() => {
    const newArray = [...list];

    if (keyword) {
      const filterArray = fiat
        ? newArray.filter(
            (values) => values.search(keyword.toUpperCase()) !== -1
          )
        : newArray.filter(
            (values) =>
              values.cryptoCurrency.search(keyword.toUpperCase()) !== -1
          );
      setSearchResult(filterArray);
    }
  }, [keyword]);

  return { searchResult };
};

export default useSearch;

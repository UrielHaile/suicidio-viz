import React from "react";

export const SearchResultsList = ({ results }) => {
  const SearchResult = ({ result }) => {
    return <div>{result.name}</div>;
  };

  return (
    <div className="results-list">
      {results.map((result) => (
        <SearchResult key={result.id} result={result} />
      ))}
    </div>
  );
};

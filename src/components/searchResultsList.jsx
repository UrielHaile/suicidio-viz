/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";

const SearchResult = ({ result, onResultClick }) => (
  <div className="result" onClick={() => onResultClick(result)}>
    {result.name}
  </div>
);
export const SearchResultsList = ({ results, onResultClick }) => (
  <div className="results-list">
    {results.map((result) => (
      <SearchResult key={result.mun_code} result={result} onResultClick={onResultClick} />
    ))}
  </div>
);

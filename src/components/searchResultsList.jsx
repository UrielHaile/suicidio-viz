/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { node } from "prop-types";
import React from "react";

const SearchResult = ({ result, onResultClick }) => (
  <div className="result" id="resultlist"onClick={() => { 
    onResultClick(result)
    //aqui debo de modificar
    const r=document.getElementById('resultlist')
    r.parentNode.classList.replace('results-list', 'result-hide')
    } } >
    {result.name}
  </div>
);

export const SearchResultsList = ({ results, onResultClick }) => (

  <div className="results-list" >
    {results.map((result) => (
      <SearchResult key={result.mun_code} result={result} onResultClick={onResultClick} />
    ))
    }
  </div>
);

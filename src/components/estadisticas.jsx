// Estadisticas.jsx
import { useState } from "react";
import { SearchBar } from "./SearchBar.jsx";
import { SearchResultsList } from "./searchResultsList.jsx";
import Visualizacion from "./visualizacion.jsx";
import "./Estadisticas.css";

export default function Estadisticas() {
  const [results, setResults] = useState([]);
  const [selectedResult, setSelectedResult] = useState(null);

  const hasResults = results.length > 0;
  const municipio = selectedResult ? selectedResult.name : "Municipio";
  const numeroSuicidios = selectedResult ? selectedResult.suicidios : 0;

  const handleResultClick = (result) => {
    setSelectedResult(result);
  };

  return (
    <div className="estadisticas">
      <SearchBar setResults={setResults} />
      {hasResults && <SearchResultsList results={results} onResultClick={handleResultClick} />}
      <header className="titulo">
        <h2>{municipio}</h2>
        <h3>Número de suicidios {numeroSuicidios}</h3>
      </header>
      <Visualizacion cantidad={numeroSuicidios} />
    </div>
  );
}

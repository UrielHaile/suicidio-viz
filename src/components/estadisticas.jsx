import { SearchBar } from "./SearchBar";
import "./estadisticas.css";
import { useState } from "react";
import { SearchResultsList } from "./searchResultsList";
import Visualizacion from "./visualizacion";

// eslint-disable-next-line no-unused-vars
// import * as d3 from "d3";
// import { useMapTools } from "../hooks/useMapTools";


export default function Estadisticas() {
  const [results, setResults] = useState([]);
  
  if (results.length) {
    return  (
    <div className="estadisticas">
      <div>
        <SearchBar setResults={setResults} />
        {results && results.length > 0 && <SearchResultsList results={results} />}
      </div>
      <header className="titulo">
        <h2>{results[0].name}</h2>
        <h3>Número de suicidios {results[0].suicidios}</h3>
      </header>
      <Visualizacion cantidad={results[0].suicidios} />
    </div>
  );
  }

  return (
    <div className="estadisticas">
      <div>
        <SearchBar setResults={setResults} />
        {results && results.length > 0 && <SearchResultsList results={results} />}
      </div>
      <header className="titulo">
        <h2>Municipio</h2>
        <h3>Número de suicidios</h3>
      </header>
      <Visualizacion cantidad={0} />
    </div>
  );
}

import { SearchBar } from "./SearchBar";
import "./estadisticas.css";
import { useState } from "react";
import { SearchResultsList } from "./searchResultsList";
import Visualizacion from "./visualizacion";

export default function Estadisticas() {
  const [results, setResults] = useState([]);

  return (
    <div className="estadisticas">
      <div>
        <SearchBar setResults={setResults} />
        {results && results.length > 0 && <SearchResultsList results={results} />}
      </div>
      <header className="titulo">
        <h2>León</h2>
        <h3>Número de suicidios</h3>
      </header>
      <div className="decoracion-top"></div>
      <Visualizacion />
    </div>
  );
}

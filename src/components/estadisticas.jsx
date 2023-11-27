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

  /*   const { mapData } = useMapTools("gto.geojson");
    const cantidad = mapData.data.features.map((data) => {
      return data.properties.suicidios_2019;
    });
    const municipio = mapData.data.features.map((data) => {
      return data.properties.mun_name;
    }); */

  return (
    <div className="estadisticas">
      <div>
        <SearchBar setResults={setResults} />
        {results && results.length > 0 && <SearchResultsList results={results} />}
      </div>
      <header className="titulo">
        <h2>León {/*{municipio}*/}</h2>
        <h3>Número de suicidios{/*{cantidad}*/}</h3>
      </header>
      <Visualizacion cantidad={5/*{cantidad}*/} />
    </div>
  );
}

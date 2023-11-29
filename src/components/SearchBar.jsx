/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";
import { useState } from "react";

import "./estadisticas.css";
export const SearchBar = ({ setResults }) => {
  const [busqueda, setBusqueda] = useState("");
  const fetchData = (value) => {
    const name = value.toLowerCase();

    fetch("./states.json")
      .then((response) => response.json())
      .then((json) => {
        const results = json.filter((user) => {
          return name && user && user.name && user.name.toLowerCase().includes(name);
        });
        //console.log(results);
        setResults(results);
      });
  };

  const handleChange = (value) => {
    setBusqueda(value);
    fetchData(value);
  };
  return (
    <div className="barra-busqueda">
      <input
        type="text"
        placeholder="🔎 Escriba un municipio..."
        value={busqueda}
        onChange={(e) => handleChange(e.target.value)}
        id="busqueda"
      />
    </div>
  );
};

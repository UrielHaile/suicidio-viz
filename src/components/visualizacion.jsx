// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from "react";
import "./Visualizacion.css";

// Imágenes
import p1 from "../img/p1.png";
import p2 from "../img/p2.png";
import p3 from "../img/p3.png";
import p4 from "../img/p4.png";
import p5 from "../img/p5.png";
import p6 from "../img/p6.png";
import p7 from "../img/p7.png";

const imagenes = [p1, p2, p3, p4, p5, p6, p7];

const getRandomNumber = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

// eslint-disable-next-line react/prop-types
const Visualizacion = ({ cantidad }) => {
  const [personas, setPersonas] = useState([]);

  useEffect(() => {
    const nuevasPersonas = [];
    for (let i = 0; i < cantidad; i++) {
      const imagenAleatoria = imagenes[getRandomNumber(0, imagenes.length - 1)];
      nuevasPersonas.push(imagenAleatoria);
    }
    setPersonas(nuevasPersonas);
  }, [cantidad]);

  return (
    <div id="contenedor">
      {personas.map((imagen, index) => (
        <img
          key={index}
          src={imagen}
          alt={`Persona ${index}`}
          className="persona"
          style={{
            position: "absolute",
            // eslint-disable-next-line no-undef
            left: `${getRandomNumber(0, contenedor.offsetWidth - 100)}px`,
            // eslint-disable-next-line no-undef
            top: `${getRandomNumber(0, contenedor.offsetHeight - 100)}px`,
          }}
        />
      ))}
    </div>
  );
};

export default Visualizacion;

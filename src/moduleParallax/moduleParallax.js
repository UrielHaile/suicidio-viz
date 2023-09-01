import React, {useRef} from "react";
//import {Parallax, ParallaxLayer} from"react-parallax";
import { Parallax, ParallaxLayer } from '@react-spring/parallax';
import image1 from  "../img/1.png";
import image2 from  "../img/2.png";
import image3 from  "../img/3.png";
import image4 from  "../img/4.png";
import image5 from  "../img/5.png";
import image6 from  "../img/6.png";
import image7 from  "../img/7.png";
import image8 from  "../img/8.png";
import "./moduleParallax.css";

const insideStyle ={
    background: "#fff",
    padding:20,
    position: "absolute",
    top: "50%",
    left:"50%",
    transform:"traslate(-50%, -50%)"
}

export const TextToDisplay = () => {
      return (<>Despues de una extensa investigacion, el equipo desveló que, al menos en el estado no existen 
      una base de datos accesible sobra las cifras del suicidio en estta region del pais.Si bien los datos
      estan abiertamente proporcionados por la secretaria de salud pública y no son capaces de entenderse 
      por si solos.</>) 

}

export  const ModuleParallax = () => {
  const ref = useRef();
return(
    <div>
      <Parallax pages={4}  ref={ref}>
        <ParallaxLayer
          offset={0.2}
          speed={0.05}
          sticky={{ start: 0.2, end: 2.5 }}
          style={{ backgroundColor: '#805E73' }}
        >
          <h2>Primer texto</h2>
        </ParallaxLayer>
        <ParallaxLayer
          offset={0.3}
          speed={0.05}
          sticky={{ start: 0.3, end: 2.5 }}
        >
          <h2>Segundo texto</h2>
        </ParallaxLayer>
    </Parallax>
    </div>   
)
}
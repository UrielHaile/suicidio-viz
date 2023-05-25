import React from "react";
import {Parallax} from"react-parallax";
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

export  const ModuleParallax = () => {
return(
    <div>
       <Parallax bgImage={image1} strength ={200}>
        <div style={{ height: "100vh"}}>
        </div>
       </Parallax>
       <Parallax >
        <div >
            <h2 className="parrafo1" >
                hace un par de meses, tal vez ya un año, la noticia del suicidio de una estudiante 
                recorrio los pasillos de mi universidad. Como con la mayoría de sucesos, unos se enteran 
                por medio de rumores, la información y los datos se transfiguran. Y nosotros como estudiantes,
                nos enteramos por medio de la directora, de manera oficial, pasadas unas semanas. El ambiente en 
                los corredores unversitarios se tornó silencioso, gris y sobrio. Realmente no sabias si se debia 
                discutir, platicar, comentar o debatir sobre el tema. y no de la victima en si o del suceso, si no 
                del acto de suicidarse. Algunas inquietudes se sembraron en la mente de mis compañeros:¿ en que 
                situación habrá estado la compañera para tomar tal decision? ¿La universidad puede aportar algo positivo
                para la prevención de este tipo de sircunstancias? ¿y que hay del gobrierno? ¿cuantos estudiantes tienen
                este tipo de pensamiento? ¿la mayoria estan en este ranfo de edad universitario? 

                Despues de una extensa investigacion, el equipo desveló que, al menos en el estado no existen 
                una base de datos accesible sobra las cifras del suicidio en estta region del pais.Si bien los datos
                estan abiertamente proporcionados por la secretaria de salud pública y no son capaces de entenderse 
                por si solos. 
            </h2>
        </div>
       </Parallax>
       <Parallax >
       <div >
            <h2 className="parrafo1" >
                "Pero ¿ que son cien millones de muertos? cuando se ha hecho la guerra apenas se sabe
                ya nadie lo que es un muerto. y además un hombre muerto solamente tiene peso cuando le han visto 
                muerto uno; Cien millones de cadaveres no son mas que humo en la imaginación"
                                                                       -Albert Camus- 
                                                                   
            </h2>
        </div>
       </Parallax>
       <Parallax bgImage={image4} strength ={200}>
        <div style={{ height: "100vh"}}>
        </div>
       </Parallax>
       <Parallax bgImage={image5} strength ={200}>
        <div style={{ height: "100vh"}}>
        </div>
       </Parallax>
       <Parallax bgImage={image6} strength ={200}>
        <div style={{ height: "100vh"}}>
        </div>
       </Parallax>
       <Parallax bgImage={image7} strength ={200}>
        <div style={{ height: "100vh"}}>
        </div>
       </Parallax>
       <Parallax bgImage={image8} strength ={200}>
        <div style={{ height: "100vh"}}>
        </div>
       </Parallax>
    </div>   
)
}
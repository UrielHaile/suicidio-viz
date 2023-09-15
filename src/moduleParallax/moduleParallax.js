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
       <Parallax bgImage={image2} strength ={200}>
        <div style={{ height: "100vh"}}>
        </div>
       </Parallax>
       <Parallax bgImage={image3} strength ={200}>
        <div style={{ height: "100vh"}}>
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
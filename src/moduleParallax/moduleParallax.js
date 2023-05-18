import React from "react";
import {Parallax} from"react-parallax";
import image1 from  "../imges/1.png";
import image2 from  "../imges/2.png";
import image3 from  "../imges/3.png";
import image4 from  "../imges/4.png";
import image5 from  "../imges/5.png";
import image6 from  "../imges/6.png";
import image7 from  "../imges/7.png";
import image8 from  "../imges/8.png";
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
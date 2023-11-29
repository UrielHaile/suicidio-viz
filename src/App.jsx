import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import { ParallaxLayerText } from "./components/ParallaxLayerText.jsx";
import Estadisticas from "./components/estadisticas.jsx";
import State from "./components/State.jsx";
import Observador from "./components/observador.jsx";

/* Estilos */
import "./App.css";

/* Imagenes */
import sujetoPrincipalTop from "./img/sujetoPrincipalTop.png";
import sujetoPrincipalBottom from "./img/sujetoPrincipalBottom.png";
import bala from "./img/bala.png";
import cuerda from "./img/cuerda.png";
import CuerdaExt from "./img/CuerdaExt.png";
import CuerdaExt1 from "./img/CuerdaExt1.png";
import pildoras from "./img/pildoras.png";
import logoUG from "./img/UG.png";

export default function App() {
  const alignCenter = { display: "flex", alignItems: "center" };


  return (
    <div className="App">
      <Parallax pages={29} style={{ top: "0", left: "0" }}>
        {/* EXTENSIÓN CUERDA ------------------------- */}
        <div>
          <ParallaxLayer offset={0} speed={0.01}>
            <img src={CuerdaExt} className="ext-cuerda" style={{ marginLeft: "26%" }} />
          </ParallaxLayer>
          <ParallaxLayer offset={1} speed={0.01}>
            <img src={CuerdaExt1} className="ext-cuerda" style={{ marginLeft: "25%" }} />
          </ParallaxLayer>
          <ParallaxLayer offset={2} speed={0.01}>
            <img src={CuerdaExt} className="ext-cuerda" style={{ marginLeft: "24%" }} />
          </ParallaxLayer>
          <ParallaxLayer offset={3} speed={0.01}>
            <img src={CuerdaExt1} className="ext-cuerda" style={{ marginLeft: "23%" }} />
          </ParallaxLayer>
          <ParallaxLayer offset={4} speed={0.01}>
            <img src={CuerdaExt} className="ext-cuerda" style={{ marginLeft: "22%" }} />
          </ParallaxLayer>
        </div>
        {/* ALBERT CAMUS ------------------------------------ */}
        <ParallaxLayerText />
        {/* ESTADÍSTICA ------------------------------------- */}
        <Observador
          offset={1}
          speed={0.5}
          sticky={{ start: 1, end: 3 }}
        >
          <div className="estadistica">
            <h1>493</h1>
          </div>
        </Observador>
        <ParallaxLayer
          offset={1}
          speed={0.1}
          sticky={{ start: 2, end: 3 }}
        >
          <div className="estadistica">
            <h2>Suicidios</h2>
          </div>
        </ParallaxLayer>
        {/* HISTORIA -------------------------------------- */}
        <ParallaxLayer
          offset={4}
          sticky={{ start: 5, end: 8 }}
          className="cuerda-fin"
        >
          <img src={cuerda} alt="Cuerda" />
        </ParallaxLayer>
        <ParallaxLayer
          offset={4}
          sticky={{ start: 4, end: 6 }}
          className="historia"
        >
          <div className="historia-parrafo">
            <p>
              Hace un par de meses, tal vez hace ya un año, la noticia del sucidio de una estudiante recorrió los pasillos
              de mi universidad. Como con la mayoría de sucesos, uno se entera por medio de los rumores, la información y
              los datos se transfiguran. Y nosotros, como estudiantes, nos enteramos por medio de la directora de manera
              oficial, pasadas unas semanas. El ambiente en los corredores universitarios se tornó silencioso, gris y
              sobrio. Realmente no sabías si se debía discutir, platicar, comentar o debatir sobre el tema. Y no de la
              víctima en sí o del suceso, sino del acto de suicidarse. Algunas inquietudes se sembraron en la mente de mis
              compañeros:
            </p>
          </div>
        </ParallaxLayer>
        {/* PREGUNTAS ------------------------------------- */}
        <ParallaxLayer
          offset={7}
          sticky={{ start: 7, end: 8 }}
          className="preguntas-container"
        >
          <div className="preguntas">
            <Observador offset={0} speed={0.5} sticky={{ start: 0, end: 1 }}>
              <div className="pregunta-derecha">
                <p>
                  ¿En qué situación habrá estado la <br /> compañera para tomar tal decisión?
                </p>
              </div>
            </Observador>
            <Observador offset={1} speed={0.5} sticky={{ start: 1, end: 2 }}>
              <div className="pregunta-izquierda">
                <p>
                  ¿La universidad puede aportar algo positivo <br /> para la prevención de este tipo de circunstancias?
                </p>
              </div>
            </Observador>
            <Observador offset={2} speed={0.5} sticky={{ start: 2, end: 3 }}>
              <div className="pregunta-derecha">
                <p>
                  ¿Y qué hay del gobierno?
                </p>
              </div>
            </Observador>
            <Observador offset={3} speed={0.5} sticky={{ start: 3, end: 4 }}>
              <div className="pregunta-izquierda">
                <p>
                  ¿Cuántos estudiantes tienen <br />este tipo de pensamientos?
                </p>
              </div>
            </Observador>
            <Observador offset={4} speed={0.5} sticky={{ start: 4, end: 5 }}>
              <div className="pregunta-derecha">
                <p>
                  ¿La mayoría están en este rango de edad?
                </p>
              </div>
            </Observador>
          </div>
        </ParallaxLayer>
        {/* HOMBRE COLGADO ESQUEMA ------------------------ */}
        <ParallaxLayer
          offset={10}
          sticky={{ start: 10, end: 12 }}
          speed={0.01}>
          <center>
            <img
              src={sujetoPrincipalTop}
              alt="Hombre Colgado"
              style={{ height: "100vh", zIndex: "-1" }}
            />
          </center>
        </ParallaxLayer>
        <ParallaxLayer
          offset={9}
          sticky={{ start: 13, end: 16 }}
          speed={0.01}>
          <center>
            <img
              src={sujetoPrincipalBottom}
              alt="Hombre Colgado"
              style={{ height: "120vh", zIndex: "-1" }}
            />
          </center>
        </ParallaxLayer>
        {/* DATOS ----------------------------------------- */}
        <ParallaxLayer
          offset={10}
          sticky={{ start: 10, end: 11 }}
          speed={0.5}
          style={{ display: "flex", justifyContent: "flex-end" }}
          id="datos"
        >
          <div style={{ textAlign: "justify", width: "25%", marginRight: "8%" }}>
            <h3>Medio</h3>
            <p>
              El ahorcamiento, la estrangulación y la sofocación es la manera más común de quitarse la vida en el
              estado.
            </p>
            <div style={{ display: "flex", flexDirection: "column", justifyContent: "start", alignItems: "start" }}>
              <img src={cuerda} alt="Cuerda" style={{ width: "30%" }} />
              <img src={pildoras} alt="Pildoras" style={{ width: "30%" }} />
              <img src={bala} alt="Bala" style={{ width: "50%" }} />
            </div>
          </div>
        </ParallaxLayer>
        <ParallaxLayer
          offset={11}
          sticky={{ start: 11, end: 12 }}
          speed={0.5}
          style={{ display: "flex", justifyContent: "flex-start" }}
          id="datos"
        >
          <div style={{ textAlign: "justify", width: "25%", marginLeft: "8%", marginTop: "5%" }}>
            <h3>Escolaridad</h3>
            <p>
              El ahorcamiento, la estrangulación y la sofocación es la manera más común de quitarse la vida en el
              estado.
            </p>
          </div>
        </ParallaxLayer>
        <ParallaxLayer
          offset={12}
          sticky={{ start: 12, end: 13 }}
          speed={0.5}
          style={{ display: "flex", justifyContent: "flex-end" }}
          id="datos"
        >
          <div style={{ textAlign: "justify", width: "25%", marginRight: "8%", marginTop: "10%" }}>
            <h3>Edad</h3>
            <p>De los veinticinco a los veintinueve está la mayor parte de víctimas del suicidio del estado.</p>
          </div>
        </ParallaxLayer>
        <ParallaxLayer
          offset={13}
          sticky={{ start: 13, end: 14 }}
          speed={0.5}
          style={{ display: "flex", justifyContent: "flex-start" }}
          id="datos"
        >
          <div style={{ textAlign: "justify", width: "25%", marginLeft: "8%", marginTop: "15%" }}>
            <h3>Mes</h3>
            <p>En primavera y verano suceden buena parte de los suicidios en todo el estado.</p>
          </div>
        </ParallaxLayer>
        <ParallaxLayer
          offset={14}
          sticky={{ start: 14, end: 15 }}
          speed={0.5}
          style={{ display: "flex", justifyContent: "flex-end" }}
          id="datos"
        >
          <div style={{ textAlign: "justify", width: "25%", marginRight: "8%", marginTop: "20%" }}>
            <h3>Estado Civil</h3>
            <p>De los veinticinco a los veintinueve está la mayor parte de víctimas del suicidio del estado.</p>
          </div>
        </ParallaxLayer>
        <ParallaxLayer
          offset={15}
          sticky={{ start: 15, end: 16 }}
          speed={0.5}
          style={{ display: "flex", justifyContent: "flex-start" }}
          id="datos"
        >
          <div style={{ textAlign: "justify", width: "25%", marginLeft: "8%", marginTop: "25%" }}>
            <h3>Localidad</h3>
            <p>En su mayoría, las personas se quitan la vida en las zonas urbanas en el estado.</p>
          </div>
        </ParallaxLayer>
        {/* DATOS GENERALES DEL ESTADO --------------------- */}
        <ParallaxLayer
          offset={16}
          sticky={{ start: 17, end: 19 }}
          speed={0.5}
          style={{ ...alignCenter, justifyContent: "center" }}
        >
          <div className="estado">
            <h6>
              Datos generales del estado
            </h6>
            <hr />
            <p>
              En las siguientes gráficas se presentan las categorías con los datos del estado de Guanajuato.
            </p>
          </div>
        </ParallaxLayer>
        {/* MAPA ---------------------	*/}
        <ParallaxLayer
          offset={20}
          sticky={{ start: 20, end: 21 }}
          speed={0.5}
          className="mapa-container"
        >
          <div className="titulo-mapa">
            <h6>
              Mapa
            </h6>
          </div>
          <State />
        </ParallaxLayer>
        <ParallaxLayer
          offset={22}
          speed={0.5}
          sticky={{ start: 22, end: 22.5 }}
          className="gradient">
          <div className="gradient"></div>
        </ParallaxLayer>
        {/* VISUALIZACIÓN DE ESTADO ---------------------	*/}
        <ParallaxLayer
          offset={23}
          sticky={{ start: 23, end: 25 }}
          speed={0.5}
          style={{ ...alignCenter, justifyContent: "center" }}
        >
          <Estadisticas />
        </ParallaxLayer>
        <ParallaxLayer
          offset={22}
          speed={0.5}
          sticky={{ start: 25, end: 25.5 }}
          className="gradient2">
          <div className="gradient2"></div>
        </ParallaxLayer>
        {/* CRÉDITOS ---------------------	*/}
        <ParallaxLayer
          offset={27}
          speed={0.5}
          sticky={{ start: 27, end: 28 }}
          className="creditos-container"
        >
          <div className="creditos">
            <p>
              Dedicamos este proyecto a quienes luchan contra la desesperación, recordándoles que la esperanza persiste. A los valientes, a sus seres queridos y a todos contribuyendo a la prevención del suicidio. Que inspire compasión y solidaridad, construyendo puentes hacia la esperanza y la curación en nuestra comunidad.
            </p>
            <h2>
              Universidad de Guanajuato
            </h2>
            <img src={logoUG} alt="Universidad de Guanajuato" />
          </div>
        </ParallaxLayer>
      </Parallax>
    </div >
  );
}

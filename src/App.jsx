import React from 'react'
import { Parallax, ParallaxLayer } from '@react-spring/parallax'
import { useState, useRef, useEffect } from 'react'

import useIntersection from './logic/useIntersection.jsx'
import Estadisticas from './components/estadisticas.jsx'

/* Estilos */
import useIntersection from './logic/useIntersection.jsx'

/* Estilos */
import './App.css'

/* Imagenes */
import sujetoPrincipalTop from './img/sujetoPrincipalTop.png'
import sujetoPrincipalBottom from './img/sujetoPrincipalBottom.png'
/* import bala from './img/bala.png' */
import cuerda from './img/cuerda.png'
import CuerdaExt from './img/CuerdaExt.png'
import CuerdaExt1 from './img/CuerdaExt1.png'
/* import pildoras from './img/pildoras.png' */

export default function App() {
    const alignCenter = { display: 'flex', alignItems: 'center' }

    const [elemento1, isIntersecting] = useIntersection({
        root: null,
        threshold: 0.5,
        rootmargin: '-200px'
    })
    const [elemento2, isIntersecting2] = useIntersection({
        root: null,
        threshold: 0.5,
        rootmargin: '-200px'
    })

    return (
        <div className='App'>
            <Parallax pages={25} style={{ top: '0', left: '0' }}>
                {/* EXTENSIÓN CUERDA ------------------------- */}
                <div>
                    <ParallaxLayer offset={0} speed={0.01}>
                        <img src={CuerdaExt} alt='Hombre Colgado' style={{ height: '102vh', zIndex: '-1', display: 'flex', alignItems: 'start', marginLeft: '26%' }} />
                    </ParallaxLayer>
                    <ParallaxLayer offset={1} speed={0.01}>
                        <img src={CuerdaExt1} alt='Hombre Colgado' style={{ height: '102vh', zIndex: '-1', display: 'flex', alignItems: 'start', marginLeft: '25%' }} />
                    </ParallaxLayer>
                    <ParallaxLayer offset={2} speed={0.01}>
                        <img src={CuerdaExt} alt='Hombre Colgado' style={{ height: '102vh', zIndex: '-1', display: 'flex', alignItems: 'start', marginLeft: '24%' }} />
                    </ParallaxLayer>
                    <ParallaxLayer offset={3} speed={0.01}>
                        <img src={CuerdaExt1} alt='Hombre Colgado' style={{ height: '102vh', zIndex: '-1', display: 'flex', alignItems: 'start', marginLeft: '23%' }} />
                    </ParallaxLayer>
                    <ParallaxLayer offset={4} speed={0.01}>
                        <img src={CuerdaExt} alt='Hombre Colgado' style={{ height: '102vh', zIndex: '-1', display: 'flex', alignItems: 'start', marginLeft: '22%' }} />
                    </ParallaxLayer>
                </div>
                {/* ALBERT CAMUS ------------------------------------ */}
                <ParallaxLayer offset={0} speed={0.5} style={{ ...alignCenter, justifyContent: 'center', width: '70%', marginLeft: '15%' }} id="presentacion">
                    <div ref={elemento1} className={isIntersecting ? 'blur-in' : 'blur-out'}>
                        <h6>
                            Pero, ¿qué son cien millones de muertos? Cuando se ha hecho la guerra apenas sabe ya nadie lo que es un muerto. Y además un hombre muerto solamente tiene peso cuando le ha visto uno muerto; cien millones de cadáveres son más que humo en la imaginación.
                            <br />
                            <br />
                            <strong>Albert Camus</strong>
                        </h6>
                    </div>

                </ParallaxLayer>
                {/* ESTADÍSTICA ------------------------------------- */}
                <ParallaxLayer offset={1} speed={0.5} sticky={{ start: 1, end: 3 }} style={{ ...alignCenter, justifyContent: 'center' }}>
                    <h1>
                        493
                    </h1>
                </ParallaxLayer>
                <ParallaxLayer offset={1} speed={0.1} sticky={{ start: 2, end: 3 }} style={{ ...alignCenter, justifyContent: 'center', paddingTop: '10%' }}>
                    <h2>
                        Suicidios
                    </h2>
                </ParallaxLayer>
                {/* HISTORIA -------------------------------------- */}
                <ParallaxLayer offset={4} sticky={{ start: 5, end: 7 }} style={{ display: 'flex', marginRight: '50%', marginLeft: '15%', width: '45%' }} id="">
                    <img src={cuerda} alt='Cuerda' />
                </ParallaxLayer>
                <ParallaxLayer offset={4} sticky={{ start: 4, end: 5 }} style={{ display: 'flex', textAlign: 'left', marginLeft: '50%', width: '45%', paddingTop: '10%' }}>
                    <p>
                        Hace un par de meses, tal vez hace ya un año, la noticia del sucidio de una estudiante recorrió los pasillos de mi universidad. Como con la mayoría de sucesos, uno se entera por medio de los rumores, la información y los datos se transfiguran. Y nosotros, como estudiantes, nos enteramos por medio de la directora de manera oficial, pasadas unas semanas. El ambiente en los corredores universitarios se tornó silencioso, gris y sobrio. Realmente no sabías si se debía discutir, platicar, comentar o debatir sobre el tema. Y no de la víctima en sí o del suceso, sino del acto de suicidarse. Algunas inquietudes se sembraron en la mente de mis compañeros:
                    </p>
                </ParallaxLayer>
                {/* PREGUNTAS ------------------------------------- */}
                <ParallaxLayer offset={6} sticky={{ start: 6, end: 7 }} style={{ display: 'block', textAlign: 'left', marginLeft: '50%', width: '45%', paddingTop: '10%' }}>
                    <h6 className='blur-in'>
                        ¿En qué situación habrá estado la compañera para tomar tal decisión?
                    </h6>
                    <h6>
                        ¿La universidad puede aportar algo positivo para la prevención de este tipo de circunstancias?
                    </h6>
                    <h6>
                        ¿Y qué hay del gobierno?
                    </h6>
                    <h6>
                        ¿Cuántos estudiantes tienen este tipo de pensamientos?
                    </h6>
                    <h6>
                        ¿La mayoría están en este rango de edad universitario?
                    </h6>
                </ParallaxLayer>
                {/* HOMBRE COLGADO ESQUEMA ------------------------- */}
                <ParallaxLayer offset={9} sticky={{ start: 9, end: 12 }} speed={0.01}>
                    <center>
                        <img src={sujetoPrincipalTop} alt='Hombre Colgado' style={{ height: '100vh', zIndex: '-1' }} />
                    </center>
                </ParallaxLayer>
                <ParallaxLayer offset={9} sticky={{ start: 13, end: 16 }} speed={0.01}>
                    <center>
                        <img src={sujetoPrincipalBottom} alt='Hombre Colgado' style={{ height: '100vh', zIndex: '-1' }} />
                    </center>
                </ParallaxLayer>
                {/* DATOS ----------------------------------------- */}
                <ParallaxLayer offset={10} sticky={{ start: 10, end: 11 }} speed={0.5} style={{ display: 'flex', justifyContent: 'flex-end' }} id="datos">
                    <div style={{ textAlign: 'justify', width: '25%', marginRight: '8%' }}>
                        <h3 ref={elemento2} className={isIntersecting ? 'blur-in' : 'blur-out'}>
                            Medio
                        </h3>
                        <p>
                            El ahorcamiento, la estrangulación y la sofocación es la manera más común de quitarse la vida en el estado.
                        </p>
                    </div>
                </ParallaxLayer>
                <ParallaxLayer offset={11} sticky={{ start: 11, end: 12 }} speed={0.5} style={{ display: 'flex', justifyContent: 'flex-start' }} id="datos">
                    <div style={{ textAlign: 'justify', width: '25%', marginLeft: '8%', marginTop: '5%' }}>
                        <h3>
                            Escolaridad
                        </h3>
                        <p>
                            El ahorcamiento, la estrangulación y la sofocación es la manera más común de quitarse la vida en el estado.
                        </p>
                    </div>
                </ParallaxLayer>
                <ParallaxLayer offset={12} sticky={{ start: 12, end: 13 }} speed={0.5} style={{ display: 'flex', justifyContent: 'flex-end' }} id="datos">
                    <div style={{ textAlign: 'justify', width: '25%', marginRight: '8%', marginTop: '10%' }}>
                        <h3>
                            Edad
                        </h3>
                        <p>
                            De los veinticinco a los veintinueve está la mayor parte de víctimas del suicidio del estado.
                        </p>
                    </div>
                </ParallaxLayer>
                <ParallaxLayer offset={13} sticky={{ start: 13, end: 14 }} speed={0.5} style={{ display: 'flex', justifyContent: 'flex-start' }} id="datos">
                    <div style={{ textAlign: 'justify', width: '25%', marginLeft: '8%', marginTop: '15%' }}>
                        <h3>
                            Mes
                        </h3>
                        <p>
                            En primavera y verano suceden buena parte de los suicidios en todo el estado.
                        </p>
                    </div>
                </ParallaxLayer>
                <ParallaxLayer offset={14} sticky={{ start: 14, end: 15 }} speed={0.5} style={{ display: 'flex', justifyContent: 'flex-end' }} id="datos">
                    <div style={{ textAlign: 'justify', width: '25%', marginRight: '8%', marginTop: '20%' }}>
                        <h3>
                            Estado Civil
                        </h3>
                        <p>
                            De los veinticinco a los veintinueve está la mayor parte de víctimas del suicidio del estado.
                        </p>
                    </div>
                </ParallaxLayer>
                <ParallaxLayer offset={15} sticky={{ start: 15, end: 16 }} speed={0.5} style={{ display: 'flex', justifyContent: 'flex-start' }} id="datos">
                    <div style={{ textAlign: 'justify', width: '25%', marginLeft: '8%', marginTop: '25%' }}>
                        <h3>
                            Localidad
                        </h3>
                        <p>
                            En su mayoría, las personas se quitan la vida en las zonas urbanas en el estado.
                        </p>
                    </div>
                </ParallaxLayer>
                {/* DATOS GENERALES DEL ESTADO --------------------- */}
                <ParallaxLayer offset={16} sticky={{ start: 17, end: 19 }} speed={0.5} style={{ ...alignCenter, justifyContent: 'center' }} id="datosEstado">
                    <div>
                        <h6 style={{ color: 'white', fontSize: '4em', margin: '0%' }}>
                            Datos generales del estado
                        </h6>
                        <hr style={{ color: 'red', height: '2px', backgroundColor: 'red', border: 'none', margin: '0%' }} />
                        <p>
                            En las siguientes gráficas se presentan las categorías con los datos del estado de Guanajuato.
                        </p>
                    </div>

                </ParallaxLayer>
                {/* MAPA	*/}
                <ParallaxLayer offset={20} sticky={{ start: 20, end: 25 }} speed={0.5} style={{ ...alignCenter, justifyContent: 'center' }}>
                    <Estadisticas />
                </ParallaxLayer>
            </Parallax>
        </div>
    )
}
import { Parallax, ParallaxLayer } from '@react-spring/parallax'
import './App.css'
import image from './img/HangedMan.png'

export default function App() {
    const alignCenter = { display: 'flex', alignItems: 'center' }
    return (
        <div className='App'>
            <Parallax pages={12} style={{ top: '0', left: '0' }}>
                {/* ALBERT CAMUS 	*/}
                <ParallaxLayer offset={0} speed={0.5} style={{ ...alignCenter, justifyContent: 'center', width: '70%', marginLeft: '15%' }} id="presentacion">
                    <h6>
                        Pero, ¿qué son cien millones de muertos? Cuando se ha hecho la guerra apenas sabe ya nadie lo que es un muerto. Y además un hombre muerto solamente tiene peso cuando le ha visto uno muerto; cien millones de cadáveres son más que humo en la imaginación.
                        <br />
                        <br />
                        <strong>Albert Camus</strong>
                    </h6>
                </ParallaxLayer>
                {/* ESTADÍSTICA 	*/}
                <ParallaxLayer offset={1} speed={0.5} sticky={{ start: 1, end: 3 }} style={{ ...alignCenter, justifyContent: 'center' }} id="">
                    <h1>
                        493
                    </h1>
                </ParallaxLayer>
                <ParallaxLayer offset={1} speed={0.1} sticky={{ start: 2, end: 3 }} style={{ ...alignCenter, justifyContent: 'center', paddingTop: '10%', color: 'red' }} id="">
                    <h2>
                        Suicidios
                    </h2>
                </ParallaxLayer>
                {/* HISTORIA     	*/}
                <ParallaxLayer offset={4} sticky={{ start: 4, end: 6 }} style={{ display: 'flex', marginRight: '50%', width: '45%' }} id="">
                    <img src={image} alt='Hombre Colgado' />
                </ParallaxLayer>
                <ParallaxLayer offset={5} sticky={{ start: 5, end: 6 }} style={{ display: 'flex', textAlign: 'left', marginLeft: '50%', width: '45%', paddingTop: '10%' }} id="">
                    <p>
                        Hace un par de meses, tal vez hace ya un año, la noticia del sucidio de una estudiante recorrió los pasillos de mi universidad. Como con la mayoría de sucesos, uno se entera por medio de los rumores, la información y los datos se transfiguran. Y nosotros, como estudiantes, nos enteramos por medio de la directora de manera oficial, pasadas unas semanas. El ambiente en los corredores universitarios se tornó silencioso, gris y sobrio. Realmente no sabías si se debía discutir, platicar, comentar o debatir sobre el tema. Y no de la víctima en sí o del suceso, sino del acto de suicidarse. Algunas inquietudes se sembraron en la mente de mis compañeros: ¿en qué situación habrá estado la compañera para tomar tal decisión? ¿la universidad puede aportar algo positivo para la prevención de este tipo de circunstancias? ¿y qué hay del gobierno? ¿cuántos estudiantes tienen este tipo de pensamientos? ¿la mayoría están en este rango de edad universitario?
                        <br></br>
                        Después de una extensa investigación, el equipo desveló que, al menos en el estado, no existe una base de datos accesible sobre las cifras del suicidio en esta región del país. Si bien, los datos están abiertamente proporcionados por la Secretaría de Salud Pública, no son capaces de entenderse por sí solos.
                    </p>
                </ParallaxLayer>
                {/* MAPA	*/}
                <ParallaxLayer offset={9} sticky={{ start: 9, end: 12 }} speed={0.5} style={{ ...alignCenter }} id="">
                    <img src={image} alt='Hombre Colgado' style={{ height: '200%', display: 'flex', marginLeft: '40%' }} />
                </ParallaxLayer>
                <ParallaxLayer offset={9} sticky={{ start: 9, end: 10 }} speed={0.9} style={{ ...alignCenter }} id="">
                    <h1>ESTADÍSTICAS</h1>
                </ParallaxLayer>
            </Parallax>
        </div>
    )
}
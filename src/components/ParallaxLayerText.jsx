import { ParallaxLayer } from "@react-spring/parallax";
import useIntersection from "../hooks/useIntersection.jsx";

export const ParallaxLayerText = () => {
  const [elemento1, isIntersecting] = useIntersection({});
  const alignCenter = { display: "flex", alignItems: "center" };

  return (
    <ParallaxLayer
      offset={0}
      speed={0.5}
      style={{ ...alignCenter }}
    >
      <div ref={elemento1} className={isIntersecting ? "blur-in frase-container " : "blur-out frase-container "}>
        <div className="frase">
          <p>
            Pero, ¿qué son cien millones de muertos? Cuando se ha hecho la guerra apenas sabe ya nadie lo que es un
            muerto. Y además un hombre muerto solamente tiene peso cuando le ha visto uno muerto; cien millones de
            cadáveres son más que humo en la imaginación.
            <br />
            <br />
            <strong>Albert Camus</strong>
          </p>
        </div>
      </div>
    </ParallaxLayer>
  );
};

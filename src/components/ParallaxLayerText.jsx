import { ParallaxLayer } from "@react-spring/parallax";
import useIntersection from "../logic/useIntersection.jsx";

export const ParallaxLayerText = () => {
  const [elemento1, isIntersecting] = useIntersection({});
  const alignCenter = { display: "flex", alignItems: "center" };

  return (
    <ParallaxLayer
      offset={0}
      speed={0.5}
      style={{ ...alignCenter, justifyContent: "center", width: "70%", marginLeft: "15%" }}
    >
      <div ref={elemento1} className={isIntersecting ? "blur-in" : "blur-out"}>
        <h6>
          Pero, ¿qué son cien millones de muertos? Cuando se ha hecho la guerra apenas sabe ya nadie lo que es un
          muerto. Y además un hombre muerto solamente tiene peso cuando le ha visto uno muerto; cien millones de
          cadáveres son más que humo en la imaginación.
          <br />
          <br />
          <strong>Albert Camus</strong>
        </h6>
      </div>
    </ParallaxLayer>
  );
};

import { ParallaxLayer } from "@react-spring/parallax";
import useIntersection from "../hooks/useIntersection.jsx";

// eslint-disable-next-line react/prop-types
const Observador = ({ offset, speed, style, sticky, children }) => {
  const [element, isIntersecting] = useIntersection({});

  return (
    <ParallaxLayer offset={offset} speed={speed} style={style} sticky={sticky}>
      <div ref={element} className={isIntersecting ? "blur-in" : "blur-out"}>
        {children}
      </div>
    </ParallaxLayer>
  );
};

export default Observador;

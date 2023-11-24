import useIntersection from "../hooks/useIntersection.jsx";

const Observador = (clase, content) => {
    const [element, isIntersecting] = useIntersection({});

    return (
        <div
            ref={element}
            className={isIntersecting ? { clase } : ""}
        >
            {content}
        </div>
    );
};

export default Observador;
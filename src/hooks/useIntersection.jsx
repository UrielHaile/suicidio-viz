import { useState, useRef, useEffect } from "react";

function useIntersection(options = {}) {
  const [isIntersecting, setIsIntersecting] = useState(false);
  const elementRef = useRef();

  useEffect(() => {
    const element = elementRef.current;

    // Create a new IntersectionObserver with a callback function
    const observer = new IntersectionObserver((entries) => {
      console.log(entries);
      entries.forEach((entry) => {
        setIsIntersecting(entry.isIntersecting);
      });
    }, options);

    // Observe the element if it exists
    if (element) {
      observer.observe(element);
    }

    // Cleanup by unobserving the element when the component unmounts
    return () => {
      if (element) {
        observer.unobserve(element);
      }
    };
  }, [options]);

  return [elementRef, isIntersecting];
}

export default useIntersection;

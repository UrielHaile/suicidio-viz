import * as d3 from "d3";
import {
  handleMouseOver,
  handleMouseOut,
  handleMouseMove,
} from "../helpers/handleTooltip";
import "./City.css";

// eslint-disable-next-line react/prop-types
export default function City({ path, tooltipData, suicides }) {
  const myColor = d3
    .scaleSequential()
    .interpolator(d3.interpolateOrRd)
    .domain([0, 150]);

  return (
    <path
      className="path"
      d={path}
      onMouseOver={() => {
        handleMouseOver(tooltipData);
      }}
      onMouseOut={handleMouseOut}
      onMouseMove={(event) => {
        handleMouseMove(event);
      }}
      fill={myColor(suicides)}
    />
  );
}

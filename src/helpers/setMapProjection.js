import * as d3 from "d3";

export const setMapProjection = function (mapData) {
  const projection = d3.geoEquirectangular();
  projection
    .precision(0)
    .rotate([90, 0, 0])
    .fitExtent(
      [
        [0, 0],
        [500, 500],
      ],
      mapData
    );
  return projection;
};

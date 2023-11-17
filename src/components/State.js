import * as d3 from "d3";
import { setMapProjection } from "../helpers/setMapProjection";
import { useMapTools } from "../hooks/useMapTools";
import City from "./City";
import "./State.css";

export default function State(props) {
  const { mapData } = useMapTools("gto.geojson");
  const width = 1900;
  const height = 1060;

  if (!mapData.loading) {
    const path = d3.geoPath().projection(setMapProjection(mapData.data));
    const healthRegions = mapData.data.features.map((data) => {
      const region_name = data.properties.mun_name +" "+data.properties.suicidios_2019;
      return (
        <City
          key={data.properties.mun_code}
          path={path(data)}
          tooltipData={region_name}
          suicides={data.properties.suicidios_2019}
        />
      );
    });

    return (
      <>
            <svg className="map-canvas" width={width} height={height} >
          <g>{healthRegions}</g>
        </svg>
      </>
    );
  } else {
    return <h1>Loading...</h1>;
  }
}

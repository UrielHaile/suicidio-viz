import { useState } from "react";
import { Map, TileLayer } from "react-leaflet";
import { useRef } from "react";
import osm from "./components/osm-providers.js";

import "leaflet/dist/leaflet.css";

const Mapa = () => {
    // eslint-disable-next-line no-unused-vars
    const [center, setCenter] = useState({ lat: 13.084622, lng: 80.248357 });
    const ZOOM_lEVEL = 9;
    const mapRef = useRef();

    return (
        <>
            <div id="map">
                <Map center={center} zoom={ZOOM_lEVEL} ref={mapRef}>
                    <TileLayer url={osm.maptiler.url} attribution={osm.maptiler.attribution} />
                </Map>
            </div>
        </>
    );
};

export default Mapa;

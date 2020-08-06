import React, { useRef, useEffect } from 'react';
import mapboxgl from 'mapbox-gl';
import './Map.css';
import "mapbox-gl/dist/mapbox-gl.css";
import { onResize } from '../../utils/onResize';

mapboxgl.accessToken = "pk.eyJ1IjoicmV0dXBrIiwiYSI6ImNrZGg4aXUxOTBlZnQyd212Y3luMzR2YzcifQ.jId0w_CVtWbVR6cLitM9OA";

const MapComponent = ({ addMarker, changeMarker }) => {
    let id = 1;
    const mapContainer = useRef(null);

    useEffect(() => {
        const map = new mapboxgl.Map({
            container: mapContainer.current,
            style: 'mapbox://styles/mapbox/outdoors-v11',
            center: [0, 0],
            zoom: 2
        });

        onResize("#map", () => {
            map.resize();
        });

        map.addControl(new mapboxgl.FullscreenControl());

        map.on("dblclick", function (e) {
            e.preventDefault();

            const { lat, lng } = e.lngLat;

            const newMarker = new mapboxgl.Marker({ draggable: true })
                .setLngLat([lng, lat])
                .setPopup(new mapboxgl.Popup().setHTML(`<strong>ID:${id}</strong>`))
                .addTo(map);

            newMarker.id = id;

            newMarker.on("dragend", ({ target }) => {
                console.log("dragend");
                const coords = target.getLngLat();
                changeMarker(target.id, coords);
            });

            const coords = newMarker.getLngLat()
            const marker = {
                id: id++,
                lng: coords.lng,
                lat: coords.lat,
                remove: () => newMarker.remove(),
            };
            addMarker(marker);
        });

    }, [mapContainer])

    return (
        <div ref={mapContainer} id="map"></div>
    )

}


export default MapComponent;
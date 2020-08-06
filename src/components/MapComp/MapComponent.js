import React, { useRef, useEffect, useState, useLayoutEffect } from 'react';
import mapboxgl from 'mapbox-gl';
import './Map.css';
import "mapbox-gl/dist/mapbox-gl.css";

mapboxgl.accessToken = "pk.eyJ1IjoicmV0dXBrIiwiYSI6ImNrZGg4aXUxOTBlZnQyd212Y3luMzR2YzcifQ.jId0w_CVtWbVR6cLitM9OA";

let arrCoords = [];

const MapComponent = ({coords, setCoords}) => {
    const mapContainer = useRef(null);

    useEffect(() => {
        const map = new mapboxgl.Map({
            container: mapContainer.current,
            style: 'mapbox://styles/mapbox/outdoors-v11',
            center: [0, 0],
            zoom: 2
        });
        map.on('load', () => {
            map.resize();
        });
        map.addControl(new mapboxgl.FullscreenControl());

        const addMarker = () => {
            map.on('dblclick', function (e) {
                const {lat, lng} = e.lngLat;
                arrCoords.push({lng, lat});
                setCoords(arrCoords);

                new mapboxgl.Marker()
                .setLngLat([lng, lat])
                .addTo(map);
            });

        }
        addMarker();
    }, [mapContainer])



    return (
        <div ref={mapContainer} id="map"></div>
    )

};

export default MapComponent;
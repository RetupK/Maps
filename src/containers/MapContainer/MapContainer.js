import React from "react";
import {
    CardHeader,
    CardBody,
    Collapse,
} from "reactstrap";
import MapComponent from "../../components/MapComp/MapComponent";

function MapContainer({ collapses, changeCollapse, markers, addMarker, changeMarker }) {
    return (
        <>
            <CardHeader className="card-collapse" id="headingOne" role="tab" onClick={e => { e.preventDefault(); changeCollapse(1); }}>
                <h5 className="mb-0 panel-title">
                    <a
                        aria-expanded={collapses.includes(1)}
                        className="collapsed"
                        data-parent="#accordion"
                        href="#pablo"
                        id="collapseOne"
                    >
                        <span aria-label="sheep" role="img">🌎 Map</span> 
                        <i className="nc-icon nc-minimal-down" />
                    </a>
                </h5>
            </CardHeader>
            <Collapse isOpen={collapses.includes(1)}>
                <CardBody>
                    <MapComponent markers={markers} addMarker={addMarker} changeMarker={changeMarker} />
                </CardBody>
            </Collapse>
        </>
    );
}

export default MapContainer;


import React from "react";
import {
    CardHeader,
    CardBody,
    Collapse,
} from "reactstrap";
import MapComponent from "../../components/MapComp/MapComponent";

function MapContainer({ collapses, changeCollapse, coords, setCoords }) {
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
                        Map{" "}
                        <i className="nc-icon nc-minimal-down" />
                    </a>
                </h5>
            </CardHeader>
            <Collapse isOpen={collapses.includes(1)}>
                <CardBody>
                    <MapComponent coords={coords} setCoords={setCoords}/>
                </CardBody>
            </Collapse>
        </>
    );
}

export default MapContainer;


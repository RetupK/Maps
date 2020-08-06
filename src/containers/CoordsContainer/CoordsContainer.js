import React from "react";
import {
    CardHeader,
    CardBody,
    Collapse,
} from "reactstrap";
import CoordsListComp from "../../components/CoordsListComp/CoordsListComp";
import "./CoordsContainer.css";

const CoordsContainer = ({ collapses, changeCollapse, markers, removeMarker }) => {
    return (
        <>
            <CardHeader className="card-collapse" id="headingOne" role="tab" onClick={e => { e.preventDefault(); changeCollapse(2); }}>
                <h5 className="mb-0 panel-title">
                    <a
                        aria-expanded={collapses.includes(2)}
                        className="collapsed"
                        data-parent="#accordion"
                        href="#pablo"
                        id="collapseOne"
                    >
                        <span aria-label="sheep" role="img">📊</span> Coordinations List{" "}
                        <i className="nc-icon nc-minimal-down" />
                    </a>
                </h5>
            </CardHeader>
            <Collapse isOpen={collapses.includes(2)}>
                <CardBody>
                    <CoordsListComp markers={markers} removeMarker={removeMarker} />
                </CardBody>
            </Collapse>
        </>
    )
}

export default CoordsContainer;
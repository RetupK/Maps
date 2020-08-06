import React from "react";
import {
    CardHeader,
    CardBody,
    Collapse,
} from "reactstrap";
import CoordsListComp from "../../components/CoordsListComp/CoordsListComp";

const CoordsContainer = ({ collapses, changeCollapse, coords, setCoords }) => {
    return (
        <>
            <CardHeader className="card-collapse" id="headingOne" role="tab">
                <h5 className="mb-0 panel-title" onClick={e => { e.preventDefault(); changeCollapse(2); }}>
                    <a
                        aria-expanded={collapses.includes(2)}
                        className="collapsed"
                        data-parent="#accordion"
                        href="#pablo"
                        id="collapseOne"
                    >
                        Coords List{" "}
                        <i className="nc-icon nc-minimal-down" />
                    </a>
                </h5>
            </CardHeader>
            <Collapse isOpen={collapses.includes(2)}>
                <CardBody>
                    <CoordsListComp coords={coords} setCoords={setCoords}/>
            </CardBody>
            </Collapse>
        </>
    )
}

export default CoordsContainer;
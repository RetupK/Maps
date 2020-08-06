import React from "react";
import {
    Card,
} from "reactstrap";

import MapContainer from "./containers/MapContainer/MapContainer";
import CoordsContainer from "./containers/CoordsContainer/CoordsContainer";

const App = () => {
    const [collapses, setCollapses] = React.useState([]);
    const [coords, setCoords] = React.useState([]);
    const changeCollapse = collapse => {
        if (collapses.includes(collapse)) {
            setCollapses(collapses.filter(prop => prop !== collapse));
        } else {
            setCollapses([...collapses, collapse]);
        }
    };
    return (
        <div id="acordeon">
            <div aria-multiselectable={true} id="accordion" role="tablist">
                <Card className="no-transition">
                    <MapContainer coords={coords} setCoords={setCoords} collapses={collapses} setCollapses={setCollapses} changeCollapse={changeCollapse}/>
                    <CoordsContainer coords={coords} setCoords={setCoords} collapses={collapses} setCollapses={setCollapses} changeCollapse={changeCollapse}/>
                </Card>
            </div>
        </div>
    )
}

export default App;
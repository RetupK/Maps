import React from "react";
import {
    Card,
} from "reactstrap";

import MapContainer from "./containers/MapContainer/MapContainer";
import CoordsContainer from "./containers/CoordsContainer/CoordsContainer";

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            markers: [],
            collapses: [],
        };
    }

    changeCollapse = (collapse) => {
        const { collapses } = this.state;
        if (collapses.includes(collapse)) {
            let collapseFilter = collapses.filter(prop => prop !== collapse);
            this.setState({
                collapses: collapseFilter
            });
        } else {
            this.setState({
                collapses: [...collapses, collapse]
            })
        }
    };

    addMarker = (marker) => {
        const nextMarkers = [...this.state.markers, marker];
        this.setState({
            markers: nextMarkers,
        })
    }

    changeMarker = (id, { lng, lat }) => {
        const nextMarkers = this.state.markers.map(marker => {
            if (marker.id === id) {
                return { ...marker, lng, lat };
            }
            return marker;
        });
        this.setState({
            markers: nextMarkers,
        })
    }

    removeMarker = (marker) => {
        marker.remove();
        const nextMarkers = this.state.markers.filter(m => m.id !== marker.id);
        this.setState({
            markers: nextMarkers,
        })
    }

    render() {
        return (
            <div id="acordeon">
                <div aria-multiselectable={true} id="accordion" role="tablist">
                    <Card className="no-transition">
                        <MapContainer markers={this.state.markers} addMarker={this.addMarker} changeMarker={this.changeMarker} collapses={this.state.collapses} changeCollapse={this.changeCollapse} />
                        <CoordsContainer markers={this.state.markers} removeMarker={this.removeMarker} collapses={this.state.collapses} changeCollapse={this.changeCollapse} />
                    </Card>
                </div>
            </div>
        )
    }
}

export default App;
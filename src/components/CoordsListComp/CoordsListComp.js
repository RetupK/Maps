import React, { useEffect } from "react";
import { Button } from "reactstrap";
import "./CoordsListComp.css";

const CoordsListComp = ({ markers, removeMarker }) => {

    return (
        <>

            <div className="col-md-12 col-12">
                <div className="card">
                    <div className="card-header card-header-warning">
                        <h4 className="card-title">Coordinates</h4>
                        <p className="card-category">Markers Coordinates Place</p>
                    </div>
                    <div className="card-body table-responsive">
                        <table className="table table-hover">
                            <thead>
                                <tr>
                                    <th>ID</th>
                                    <th>Latitude</th>
                                    <th>Longitude</th>
                                    <th>Remove</th>
                                </tr>
                            </thead>
                            <tbody>
                                {markers.map(marker => (
                                    <tr key={marker.id}>
                                        <td>{marker.id}</td>
                                        <td>{marker.lat}</td>
                                        <td>{marker.lng}</td>
                                        <td><Button onClick={() => removeMarker(marker)} className="btn btn-danger" color="danger">Remove</Button></td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>

        </>
    )
}

export default CoordsListComp;
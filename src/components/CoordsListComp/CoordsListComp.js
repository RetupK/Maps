import React, { useEffect } from "react";

const CoordsListComp = ({coords, setCoords}) => {

    return (
        <div>
            {coords.map(item => (
                <div>
                    {item.lng}, {item.lat}
                </div>
            ))}
        </div>
    )
}

export default CoordsListComp;
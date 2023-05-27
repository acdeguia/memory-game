import React from "react";

function Card(props) {

    const {
        card: {src}, handleGameLogic
    } = props;

    return(
        <div onClick={handleGameLogic}>
            <img src={src} alt={''}/>
        </div>
    )
}

export default Card
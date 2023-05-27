import React from "react";

function Card(props) {

    const {
        card: {src, title}, handleGameLogic
    } = props;

    return(
        <div onClick={handleGameLogic.bind(this, title)}>
            <img src={src} alt={title}/>
        </div>
    )
}

export default Card
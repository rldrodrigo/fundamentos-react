import React from "react";

export default props => {
    return (
        <div>
            <label htmlFor="passoInput">Passo:</label>
            <input id="passoInput" type="number" onChange={e => props.setPasso(+e.target.value)} value={props.passo} />
        </div>
    )
}
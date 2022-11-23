import React from "react"

export default function Dices(props) {
    return (
        <div className="ele"
        style={{background:props.isHeld?"#59E391":"#FFFFFF"}}
        onClick={()=>props.hold(props.id)}
        >
            {props.value}
        </div>
    )
}
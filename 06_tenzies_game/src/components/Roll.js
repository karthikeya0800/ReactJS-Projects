import React from "react";

export default function Roll(props) {
    return (
        <button
            className="roll"
            onClick={props.onRoll}
        >
            {props.isComplete?"Reset Game":"Roll"}
        </button>
    )
}
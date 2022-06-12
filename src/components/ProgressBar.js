import React from "react";
import { useState, useEffect } from "react";
import "./ProgressBar.css";
function ProgressBar(props) {
    const [style, setStyle] = useState({});
    useEffect(() => {
        setStyle({
            width: `${props.done * 100}%`,
            backgroundColor: `${props.color}`,
            borderRadius: "10px",
        });
    }, [props.done]);
    return (
        <div className="progressBar">
            <div className="progress-text">{props.text}</div>
            <div className="progress-back">
                <div className="progress-done" style={style}>
                    {props.done * 100}%
                </div>
            </div>
        </div>
    );
}

export default ProgressBar;

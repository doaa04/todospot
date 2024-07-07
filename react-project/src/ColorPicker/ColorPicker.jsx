import React, {useState} from "react"
import "./ColorPicker.css";

function ColorPicker({ color, setColor }) {

    function handleColorChange(event) {
        setColor(event.target.value);
    }

    return (
        <div className="color-picker-container">
            <input type="color" value={color} onChange={handleColorChange}/>
        </div>
    )
}

export default ColorPicker
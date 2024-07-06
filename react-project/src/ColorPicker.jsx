import React, {useState} from "react"


function ColorPicker() {
    const [color, setColor] = useState("#d9d0f1");

    function handleColorChange(event) {
        setColor(event.target.value);
    }

    return (
        <div className="color-picker-container">
            <div className="color-display" style={{backgroundColor: color}}>
                <p>Selected color: {color}</p>
            </div>
            <input type="color" value={color} onChange={handleColorChange}/>
        </div>
    )
}

export default ColorPicker
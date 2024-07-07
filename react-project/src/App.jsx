import React, { useState } from "react";
import ColorPicker from "./assets/ColorPicker/ColorPicker";
import ToDoList from "./ToDoList/ToDoList";
import Timer from "./Timer/Timer";

function App() {
  const [color, setColor] = useState("#249489"); 
  const [color2, setColor2] = useState("");

  return (
    <>
      <div className="style-settings">
        <ColorPicker color={color} setColor={setColor} />
        <ColorPicker color={color2} setColor={setColor2} />
      </div>
      <hr />
      <Timer color={color} />
      <hr />
      <ToDoList color={color} color2={color2} />
      <hr />
    </>
  );
}

export default App

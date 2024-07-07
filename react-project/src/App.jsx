import React, { useState } from "react";
import ColorPicker from "./ColorPicker/ColorPicker";
import ToDoList from "./ToDoList/ToDoList";
import Timer from "./Timer/Timer";
import SoundPlayer from "./SoundPlayer/SoundPlayer";

function App() {
  const [color, setColor] = useState("#249489"); 
  const [color2, setColor2] = useState("");
  const [color3, setColor3] = useState("");

  return (
    <>
      <div className="style-settings">
        <ColorPicker color={color} setColor={setColor} />
        <ColorPicker color={color2} setColor={setColor2} />
        <ColorPicker color={color3} setColor={setColor3} />
      </div>
      <hr />
      <Timer color={color} />
      <hr />
      <div className="content">
        <div className="to-do-list">
          <ToDoList color={color} color2={color2} />
        </div>
        <div className="sound-player-container">
          <SoundPlayer color={color3}/>
        </div>
      </div>
    </>
  );
}

export default App

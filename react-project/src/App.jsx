import React, { useState } from "react";
import ColorPicker from "./assets/ColorPicker/ColorPicker";
import ToDoList from "./ToDoList/ToDoList";
import Timer from "./Timer/Timer";

function App() {
  const [color, setColor] = useState("#ffffff"); 
  return (
    <>
    <ColorPicker color={color} setColor={setColor}></ColorPicker>
    <hr />
    <Timer color={color}></Timer>
    <hr />
    <ToDoList color={color}></ToDoList>
    <hr />
    </>
  );
}


export default App

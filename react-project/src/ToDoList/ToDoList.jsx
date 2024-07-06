import React, {useState} from "react"
import "./ToDoList.css"

function ToDoList() {
    const [tasks, setTasks] = useState(["react", "java", "next"]);
    const [newTask, setNewTask] = useState("");

    function handleInputChange(event) {
        setNewTask(event.target.value);
    }

    function addTask() {
        if (newTask.trim() != "") {
            setTasks(t => [...t, newTask]);
            setNewTask("");
        }
    }

    function deleteTask(index) {
        const updatedTasks = tasks.filter((_, i) => i !== index);
        setTasks(updatedTasks);
    }

    function moveTaskUp(index) {
        if (index > 0) {
            const updatedTasks = [...tasks];
            [updatedTasks[index], updatedTasks[index - 1]] = 
            [updatedTasks[index - 1], updatedTasks[index]];
            setTasks(updatedTasks);
        }
    }

    function moveTaskDown(index) {
        if (index < tasks.length - 1) {

        }
        const updatedTasks = [...tasks];
        [updatedTasks[index], updatedTasks[index + 1]] = 
        [updatedTasks[index + 1], updatedTasks[index]];
        setTasks(updatedTasks);
    }

    return (
        <>
        <div className="to-do-list">
            <h2>To Do List</h2>
            <input type="text" name="" id="" placeholder="enter a task" value={newTask} onChange={handleInputChange}/>
            <button className="add-button" onClick={addTask}>Add Task</button>
        </div>

        <h3>you have {tasks.length} tasks</h3>
        <ul className="tasks">
            {tasks.map((task, index) => 
                <li key={index}>
                    <span className="text">{task}</span>
                    <button className="delete-button" onClick={() => deleteTask(index)}>Delete</button>
                    <button className="up-button" onClick={() => moveTaskUp(index)}>Up</button>
                    <button className="down-button" onClick={() => moveTaskDown(index)}>Down</button>
                </li>
            )}
        </ul>
        </>
    );
}

export default ToDoList
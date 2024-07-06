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

    return (
        <>
        <div className="to-do-list">
            <p><b>time spent: </b ><span style={{fontFamily:"monospace", fontSize: '16px'}}>00:00:00</span></p>
            <p><b>tasks to complete: </b>{tasks.length}</p>
            <div className="add-task">
                <input type="text" name="" id="" placeholder="enter a task" value={newTask} onChange={handleInputChange}/>
                <button className="add-button" onClick={addTask}>➕</button>
            </div>
        </div>

        <ul className="tasks">
            {tasks.map((task, index) => 
                <li key={index}>
                    <span className="text">{task}</span>
                    <div className="options">
                        <button className="delete-button" onClick={() => deleteTask(index)}>❌</button>
                        <button className="mark-as-done">✔️</button>
                    </div>
                </li>
            )}
        </ul>
        </>
    );
}

export default ToDoList
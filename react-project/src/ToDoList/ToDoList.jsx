import React, {useState} from "react"
import "./ToDoList.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus, faCheck, faXmark, faRotate } from "@fortawesome/free-solid-svg-icons"; 

function ToDoList({color, color2}) {
    const [tasks, setTasks] = useState(["résumé cours optique, cristallographie", "révision qcm quantique"]);
    const [newTask, setNewTask] = useState("");
    const [completedTasks, setCompletedTasks] = useState(["done"]);

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

    function handleKeyDown(event) {
        if (event.key === "Enter") {
          addTask();
        }
      }

    function markAsDone(index) {
        const taskToMove = tasks[index];
        setCompletedTasks((ct) => [...ct, taskToMove]);
        deleteTask(index);
    }

    function deleteCompletedTask(index) {
        const updatedTasks = completedTasks.filter((_, i) => i !== index);
        setCompletedTasks(updatedTasks);
    }

    function markAsUndone(index) {
        const taskToMove = completedTasks[index];
        setTasks((ut) => [...ut, taskToMove]);
        deleteCompletedTask(index);
    }

    return (
        <>
        <div className="to-do-list">
            <p><b>tasks to complete: </b>{tasks.length}</p>
            <div className="add-task">
                <input type="text" name="" id="" placeholder="enter a task" value={newTask} onChange={handleInputChange} onKeyDown={handleKeyDown}/>
                <button className="add-button" onClick={addTask}><FontAwesomeIcon icon={faPlus} style={{color: "#919195"}}/></button>
            </div>
        </div>

        <ul className="tasks">
            {tasks.map((task, index) => 
                <li key={index} style={{border: `1px solid ${color}`}}>
                    <span className="text">{task}</span>
                    <div className="options">
                        <button className="delete-button" onClick={() => deleteTask(index)}><FontAwesomeIcon icon={faXmark} style={{color: color2}}/></button>
                        <button className="mark-as-done" onClick={() => markAsDone(index)}><FontAwesomeIcon icon={faCheck} style={{color: color}}/></button>
                    </div>
                </li>
            )}
        </ul>

        <ul className="tasks">
        <p><b>completed tasks: </b>{completedTasks.length}</p>
            {completedTasks.map((task, index) => 
                <li key={index} style={{border: `1px solid ${color}`}}>
                    <span className="text">{task}</span>
                    <div className="options">
                        <button className="delete-button" onClick={() => deleteCompletedTask(index)}><FontAwesomeIcon icon={faXmark} style={{color: color2}}/></button>
                        <button className="mark-as-undone" onClick={() => markAsUndone(index)}><FontAwesomeIcon icon={faRotate} style={{color: color}}/></button>
                    </div>
                </li>
            )}
        </ul>
        </>
    );
}

export default ToDoList
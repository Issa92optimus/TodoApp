import React, {useContext, useState, useEffect} from "react";
import { TaskListContext } from "../context/TaskListContext";

const TaskForm = () => {
    const {addTask, clearList, editItem, editTask} = useContext(TaskListContext)

    const [title, setTitle] = useState("")

    const handleChange = e => {
        setTitle(e.target.value);
    };

    const handleSubmit = e => {
        e.preventDefault();
                fetch('http://127.0.0.1:3000/todo_app', {
            method: "GET",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({
                title: title,
            })
        })
        .then(resp => resp.json())
        .then(addTask => {
            this.props.addTask(addTask)
        })
        if(!editItem) {
        addTask(title);
        setTitle("");
        } else {
            editTask(title, editItem.id)
        }
    };

    useEffect(()  => {
        if(editItem) {
            setTitle(editItem.title);
            console.log (editItem);
        } else {
            setTitle("");
        }
    }, [editItem]);

    return (
        <form onSubmit={handleSubmit} className="form">
            <input onChange={handleChange} value={title} type="text" className="todo-input" placeholder="Add Todo..." required/>
            <div className="buttons">
                <button type="submit" class="btn btn-dark me-3" className="btn add-todo">{editItem ? 'Edit Todo' : 'Add Todo'}</button>
                <button onClick={clearList} class="btn btn-dark" className="btn clear-btn">Clear</button>
            </div>
        </form>
    )
}

export default TaskForm
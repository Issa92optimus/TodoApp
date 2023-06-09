import React, {useContext, useState, useEffect} from "react";
import { TaskListContext } from "../context/TaskListContext";


const TaskForm = () => {
    const {addTask, clearList, editItem, editTask, editDescription} = useContext(TaskListContext)

    const [title, setTitle] = useState("")
    const [description, setDescription] = useState('');
  
    const handleChange = e => {
        setTitle(e.target.value);
    };

    const handleSubmit = e => {
        e.preventDefault();
                fetch('http://127.0.0.1:3000/todo_app', {
            method: "POST",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({
                title: title,
                description: description,
                
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
            <input onChange={handleChange} value={title} type="text" className="task-input" placeholder="Add Task..." required/>
            <div className="buttons">
                <button type="submit" class="btn btn-dark me-3" className="btn add-task">{editItem ? 'Edit Task' : 'Add Task'}</button>
                <button onClick={clearList} class="btn btn-dark" className="btn clear-btn">Clear</button>
            </div>
            <input
                type="textarea"
                name="description"
                id="description"
                placeholder="Enter description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              />
            <div>
            <button type="submit" class="btn btn-dark me-3" className="btn add-description">{editDescription ? 'Edit Description' : 'Add Description'}</button>
            <button onClick={clearList} class="btn btn-dark" className="btn clear-btn">Clear</button>
            </div>
        </form>
    )
}

export default TaskForm
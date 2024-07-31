// src/components/TodoItem.js
import React, {useState} from 'react';

const TodoItem = ({ task, index, markAsDone, updateTask }) => {
    const [isEditing, setIsEditing] = useState(false);
    const [newTask, setNewTask] = useState(task.text);

    const handleUpdate = () => {
        updateTask(index, newTask);
        setIsEditing(false);
    };

    return (
        <div className={`todo-item ${task.completed ? 'completed' : ''}`}>
            {isEditing ? (
                <input
                    type="text"
                    value={newTask}
                    onChange={(e) => setNewTask(e.target.value)}
                />
            ) : (
                <span>{task.text}</span>
            )}
            <button onClick={() => markAsDone(index)}>
                {task.completed ? 'Undo' : 'Complete'}
            </button>
            {isEditing ? (
                <button onClick={handleUpdate}>Save</button>
            ) : (
                <button onClick={() => setIsEditing(true)}>Edit</button>
            )}
        </div>
    );
};

export default TodoItem;

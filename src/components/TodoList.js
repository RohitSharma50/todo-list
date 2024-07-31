// Update TodoList.js
import React, { useState, useEffect } from 'react';
import TodoItem from './TodoItem';
import TodoForm from './TodoForm';
import data from '../data/tasks.json';

const TodoList = () => {
    const [tasks, setTasks] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');

    useEffect(() => {
        setTasks(data.tasks);
    }, []);

    const addTask = (text) => {
        const newTasks = [...tasks, { text, completed: false }];
        setTasks(newTasks);
    };

    const markAsDone = (index) => {
        const newTasks = tasks.map((task, i) => {
            if (i === index) task.completed = !task.completed;
            return task;
        });
        setTasks(newTasks);
    };

    const updateTask = (index, text) => {
        const newTasks = tasks.map((task, i) => {
            if (i === index) task.text = text;
            return task;
        });
        setTasks(newTasks);
    };

    const filteredTasks = tasks.filter((task) =>
        task.text.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div className="container">
            <h1>Todo List</h1>

            <input
                type="text" 
                className="search-bar"
                placeholder="Search tasks"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
            />
            <TodoForm addTask={addTask}  />
            {filteredTasks.map((task, index) => (
                <TodoItem
                className="todoItem"
                    key={index}
                    index={index}
                    task={task}
                    markAsDone={markAsDone}
                    updateTask={updateTask}
                />
            ))}
        </div>
    );
};

export default TodoList;

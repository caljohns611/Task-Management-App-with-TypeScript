import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useTasks } from './TaskContext';

const TaskForm: React.FC = () => {
    const { addTask, updateTask, tasks } = useTasks();
    const { id } = useParams<{ id: string }>();
    const navigate = useNavigate();

    const existingTask = tasks.find((t) => t.id === id);
    const [task, setTask] = useState(existingTask || { title: '', description: '' });

    useEffect(() => {
        if (existingTask) setTask(existingTask);
    }, [existingTask]);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (id) {
            updateTask({ ...task, id });
        } else {
            addTask({ ...task, id: Date.now().toString() });
        }
        navigate('/');
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type='text'
                placeholder='Task Title'
                value={task.title}
                onChange={(e) => setTask({ ...task, title: e.target.value })}
                required
            />
            <textarea
                placeholder='Task Description'
                value={task.description}
                onChange={(e) => setTask({ ...task, description: e.target.value })}
                required
            />
            <button type='submit'>{id ? 'Update Task' : 'Create Task'}</button>
        </form>
    );
};

export default TaskForm;
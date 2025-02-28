import React from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { useTasks } from './TaskContext';

const TaskDetails: React.FC = () => {
    const { id } = useParams<{ id: string }>();
    const { tasks, deleteTask } = useTasks();
    const navigate = useNavigate();

    const task = tasks.find((t) => t.id === id);

    if (!task) {
        return <p>Task not found</p>;
    }

    return (
        <div>
            <h2>{task.title}</h2>
            <p>{task.description}</p>
            <Link to={`/task/edit/${task.id}`}>Edit Task</Link>
            <button onClick={() => { deleteTask(task.id); navigate('/'); }}>
                Delete Task
            </button>
        </div>
    );
};

export default TaskDetails;
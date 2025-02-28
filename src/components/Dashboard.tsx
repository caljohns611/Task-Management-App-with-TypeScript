import React from 'react';
import { Link } from 'react-router-dom';
import { useTasks } from './TaskContext';

const Dashboard: React.FC = () => {
    const { tasks } = useTasks();

    return (
        <div>
            <h1>Task Dashboard</h1>
            <Link to='/task/new'>Create Task</Link>
            <ul>
                {tasks.map((task) => (
                    <li key={task.id}>
                        <Link to={`/task/${task.id}`}>{task.title}</Link>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Dashboard;
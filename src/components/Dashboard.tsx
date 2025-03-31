import React from 'react';
import { Link } from 'react-router-dom';
import { useTasks } from './TaskContext';
import { Col, Container } from 'react-bootstrap';
import LoginButton from '../buttons/LoginButton';
import LogoutButton from '../buttons/LogoutButton';

const Dashboard: React.FC = () => {
    const { tasks } = useTasks();

    return (
        <div>
            <Container>
                <Col>
                    <h1>Task Dashboard</h1>
                    <LoginButton />
                    <LogoutButton />
                    <Link to='/task/new'>Create Task</Link>
                    <ul>
                        {tasks.map((task) => (
                            <li key={task.id}>
                                <Link to={`/task/${task.id}`}>{task.title}</Link>
                            </li>
                        ))}
                    </ul>
                </Col>
            </Container>
        </div>
    );
};

export default Dashboard;
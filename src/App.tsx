import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Auth0Provider } from '@auth0/auth0-react';
import Dashboard from './components/Dashboard';
import TaskDetails from './components/TaskDetails';
import TaskForm from './components/TaskForms';
import Login from './components/Login';
import { TaskProvider } from './components/TaskContext';

const App: React.FC = () => {
  return (
    <Auth0Provider
      domain='your-auth0-domain'
      clientId='your-auth0-clientId'
      authorizationParams={{ redirect_uri: window.location.origin }}
    >
      <TaskProvider>
        <Router>
          <Routes>
            <Route path='/' element={<Dashboard />} />
            <Route path='/task/:id' element={<TaskDetails />} />
            <Route path='/task/new' element={<TaskForm />} />
            <Route path='/task/edit/:id' element={<TaskForm />} />
            <Route path='/login' element={<Login />} /> 
          </Routes>
        </Router>
      </TaskProvider>
    </Auth0Provider>
  );
};

export default App;
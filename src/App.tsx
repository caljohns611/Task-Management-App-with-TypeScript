import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Dashboard from './components/Dashboard';
import TaskDetails from './components/TaskDetails';
import TaskForm from './components/TaskForms';
import Login from './components/Login';
import { TaskProvider } from './components/TaskContext';
import CallbackPage from './components/CallbackPage';
import ProtectedPage from './components/ProtectedPage';
import { useAuth0 } from '@auth0/auth0-react';
import ProfilePage from './components/ProfilePage';
import AuthenticationGuard from './authentication/AuthenticationGuard';

const App: React.FC = () => {

  const {isLoading} = useAuth0();

  if(isLoading) return (<div>Loading</div>)

  return (

    <TaskProvider>
        <Routes>
          <Route path='/' element={<Dashboard />} />
          <Route path='/profile' element={<AuthenticationGuard components={ProfilePage} />} />
          <Route path='protected' element={<AuthenticationGuard components={ProtectedPage} />} />
          <Route path='/callback' element={<CallbackPage />} />
          <Route path='/task/:id' element={<TaskDetails />} />
          <Route path='/task/new' element={<TaskForm />} />
          <Route path='/task/edit/:id' element={<TaskForm />} />
          <Route path='/login' element={<Login />} /> 
        </Routes>
    </TaskProvider>

  );
};

export default App;
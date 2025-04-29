import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';

const Login: React.FC = () => {
    const { loginWithRedirect, logout, isAuthenticated, user } = useAuth0();

    return (
        <div style={{ textAlign: 'center'}}>
            {isAuthenticated ? (
                <>
                    <p>Welcome, {user?.name}</p>
                    <button onClick={() => logout({ returnTo: window.location.origin })}>Log out</button>
                </>
            ) : (
                <button onClick={() => loginWithRedirect()}>Log in</button>
            )}
        </div>
    );
};

export default Login;
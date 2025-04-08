import React, { useEffect, useState } from 'react';
import { Auth0Provider } from '@auth0/auth0-react';
import { useNavigate } from 'react-router-dom';

type Auth0ProviderWithNavigateProps = {
    children: React.ReactNode;
};

const Auth0ProviderWithNavigate: React.FC<Auth0ProviderWithNavigateProps> = ({
    children,
}) => {
    const domain = 'dev-ytoxohcws4lsf0w4.us.auth0.com';
    const clientId = 'iJXAPsCjaCD15bP225WGhXX99YrYE8Hd';
    const redirectUri = 'http://localhost:5173/callback';

    const [isRoutingAvailable, setIsRoutingAvailable] = useState(false);
    const [navigate, setNavigate] = useState<ReturnType<typeof useNavigate> | null>(null);

    const NavigateSetter = () => {
        const navigateFn = useNavigate();
        useEffect(() => {
            setNavigate(navigateFn);
            setIsRoutingAvailable(true);
        }, [navigateFn]);

        return null;
    };

    const onRedirectCallback = (appState: any) => {
        if (navigate) {
            navigate((appState && appState.returnTo) || window.location.pathname);
        }
    };

    if (!(domain && clientId && redirectUri)) {
        return null;
    }

    return (
        <>
            <NavigateSetter />

            {isRoutingAvailable && (
                <Auth0Provider
                    domain={domain}
                    clientId={clientId}
                    authorizationParams={{
                        redirect_uri: redirectUri,
                        scope: 'openid profile email',
                    }}
                    onRedirectCallback={onRedirectCallback}
                    cacheLocation='localstorage'
                >
                    {children}
                </Auth0Provider>
            )}
        </>
    );
};

export default Auth0ProviderWithNavigate;
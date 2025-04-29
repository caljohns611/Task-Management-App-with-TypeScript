import React from 'react';
import { Auth0Provider } from '@auth0/auth0-react';

type Auth0ProviderProps = {
  children: React.ReactNode;
  navigate: (path: string) => void;
};

const Auth0ProviderWithNavigate = ({ children, navigate }: Auth0ProviderProps) => {
  const domain = 'dev-ytoxohcws4lsf0w4.us.auth0.com';
  const clientId = 'iJXAPsCjaCD15bP225WGhXX99YrYE8Hd';
  const redirectUri = window.location.origin + '/callback';

  const onRedirectCallback = (appState: any) => {
    navigate(appState?.returnTo || '/');
  };

  return (
    <Auth0Provider
      domain={domain}
      clientId={clientId}
      authorizationParams={{
        redirect_uri: redirectUri,
        scope: 'openid profile email',
      }}
      onRedirectCallback={onRedirectCallback}
      cacheLocation="localstorage"
    >
      {children}
    </Auth0Provider>
  );
};

export default Auth0ProviderWithNavigate;
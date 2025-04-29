import React from 'react';
import { useNavigate } from 'react-router-dom';
import Auth0ProviderWithNavigate from './Auth0Provider';

const Auth0ProviderWrapper: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const navigate = useNavigate();
  return <Auth0ProviderWithNavigate navigate={navigate}>{children}</Auth0ProviderWithNavigate>;
};

export default Auth0ProviderWrapper;

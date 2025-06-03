import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import Auth0ProviderWrapper from './authentication/Auth0ProviderWrapper';

const root = ReactDOM.createRoot(
  document.getElementById('root')as HTMLElement
);

root.render(
  <BrowserRouter>
    <Auth0ProviderWrapper>
      <App />
    </Auth0ProviderWrapper>
  </BrowserRouter>
);
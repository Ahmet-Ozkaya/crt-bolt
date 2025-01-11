import React from 'react';
    import ReactDOM from 'react-dom/client';
    import { BrowserRouter } from 'react-router-dom';
    import App from './App';
    import './index.scss';
    import { AppProvider } from './context/AppContext';

    const rootElement = document.getElementById('root');
    if (!rootElement) throw new Error('Failed to find the root element');

    ReactDOM.createRoot(rootElement).render(
      <React.StrictMode>
        <BrowserRouter>
          <AppProvider>
            <App />
          </AppProvider>
        </BrowserRouter>
      </React.StrictMode>
    );

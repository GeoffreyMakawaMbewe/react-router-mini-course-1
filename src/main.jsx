import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

// We import BrowserRouter from react-router-dom.
// This is the component that gives our entire application routing capabilities.
import { BrowserRouter } from 'react-router-dom';

import './index.css';
import App from './App.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/*
      We wrap our main <App /> component with <BrowserRouter>.
      This "activates" React Router for our entire app. Any component
      inside of BrowserRouter (like App and all its children) can now use
      routing features like <Link>, <Routes>, and <Route>.
    */}
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>,
);

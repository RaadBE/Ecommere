import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App'; // Import your main App component
import './index.css'; // Import any global CSS or styling if needed

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

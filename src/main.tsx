import React from 'react';
import {StrictMode} from 'react';
import {createRoot} from 'react-dom/client';
import {BrowserRouter} from 'react-router-dom';
import App from './App.tsx';
import './index.css';

const root = createRoot(document.getElementById('root')!);

// Get base path from Vite's import.meta.env.BASE_URL
// For root deployment (base: './'), BASE_URL is '/' or './'
// For subdirectory (base: '/ChugzSite/'), BASE_URL is '/ChugzSite/'
// Use undefined for root deployment, otherwise use the base path without trailing slash
const baseUrl: string = import.meta.env.BASE_URL || '/';
let basename: string | undefined;
if (baseUrl === '/' || baseUrl === './' || baseUrl === '.') {
  basename = undefined; // Root deployment, no basename needed
} else {
  basename = baseUrl.replace(/\/$/, ''); // Remove trailing slash for subdirectory
}

root.render(
  <StrictMode>
    <BrowserRouter basename={basename}>
      <App />
    </BrowserRouter>
  </StrictMode>
);

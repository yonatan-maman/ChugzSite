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

// Handle GitHub Pages 404.html redirect
// The 404.html redirects to ?/path&queryParams, we need to convert this back to a proper route
if (typeof window !== 'undefined') {
  const search = window.location.search;
  
  // Check if we have the ?/ redirect format
  if (search && search.startsWith('?/')) {
    // Extract everything after ?/
    const redirectValue = search.slice(2); // Remove '?/'
    
    // Split by & to separate path from query params
    // But we need to be careful because & might have been converted to ~and~
    const parts = redirectValue.split('&');
    const path = parts[0].replace(/~and~/g, '&');
    
    // Rebuild query string from remaining parts
    const queryParts: string[] = [];
    for (let i = 1; i < parts.length; i++) {
      queryParts.push(parts[i].replace(/~and~/g, '&'));
    }
    
    // Build the new URL
    const newPath = basename ? `${basename}${path.startsWith('/') ? path : '/' + path}` : (path.startsWith('/') ? path : '/' + path);
    const newSearch = queryParts.length > 0 ? '?' + queryParts.join('&') : '';
    const newHash = window.location.hash;
    
    // Replace the URL without the ?/ parameter
    const newUrl = newPath + newSearch + newHash;
    window.history.replaceState({}, '', newUrl);
  }
}

root.render(
  <StrictMode>
    <BrowserRouter basename={basename}>
      <App />
    </BrowserRouter>
  </StrictMode>
);

import React from 'react';
import ReactDOM from 'react-dom/client';
import { Sample } from './sample';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <Sample />
  </React.StrictMode>
);

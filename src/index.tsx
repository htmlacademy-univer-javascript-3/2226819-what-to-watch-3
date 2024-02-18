import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/app/app.tsx';
import {films} from './mocks/films.ts';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <App
      films={films}
    />
  </React.StrictMode>
);

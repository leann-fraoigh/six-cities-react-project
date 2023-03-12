import React from 'react';
import ReactDOM from 'react-dom/client';
import { offers } from './mocks/offers';
import App from './components/app/app';
import { reviews } from './mocks/reviews';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);

root.render(
  // <React.StrictMode>
  <App offers={offers} reviews={reviews}/>
  // </React.StrictMode>,
);

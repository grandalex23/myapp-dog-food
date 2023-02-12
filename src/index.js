import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from "./components/App/App";
import { BrowserRouter } from 'react-router-dom';
// import AppCallback from './hooks/AppCalback';
// import AppMemo from './hooks/AppMemo';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
   <BrowserRouter>
      <App />
   </BrowserRouter>);
//root.render(<AppCallback />);
// root.render(<AppMemo />);

import React from 'react';
import { createRoot } from 'react-dom/client';
import {createBrowserRouter, BrowserRouter, RouterProvider} from 'react-router-dom'
import { Provider } from 'react-redux';
import { store } from './app/store';
import App from './App';
import Lab1 from './features/lab1/Lab1';
import reportWebVitals from './reportWebVitals';
import './index.css';

const container = document.getElementById('root');
const root = createRoot(container);

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <h1>Not Found</h1>
  },
  {
    path: '/lab1',
    element: <Lab1 />
  }
])

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

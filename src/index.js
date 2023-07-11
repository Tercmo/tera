import './css/index.css';
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Auth0Provider } from '@auth0/auth0-react';
import { Provider } from 'react-redux';
import store from './store/store';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
   <Provider store={store}>
    <Auth0Provider 
     domain='tecrmoprueba.us.auth0.com'
     clientId='vsHBtvqA6StHm0gYvA4Zl4KLKa6T08aG'
     redirectUri={window.location.origin} >
    <App />
    </Auth0Provider>
    </Provider>
  </React.StrictMode>
);

reportWebVitals();

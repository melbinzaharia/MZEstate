<<<<<<< HEAD
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import { persistor, store } from './redux/store.js';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
=======
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { persistor, store } from './redux/store.js'
import { Provider } from 'react-redux'
import './index.css'
import { PersistGate } from 'redux-persist/integration/react'
>>>>>>> 0686cd72b435f4e74692ec766cc091a2e1cf0232

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <App />
    </PersistGate>
  </Provider>
<<<<<<< HEAD
);
=======


)
>>>>>>> 0686cd72b435f4e74692ec766cc091a2e1cf0232

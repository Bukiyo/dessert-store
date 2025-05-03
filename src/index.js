import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import "@fortawesome/fontawesome-free/css/all.min.css";
import App from './App';
import { Provider } from 'react-redux';
import store from './store';
import VConsole from 'vconsole';

// Initialize vConsole in development only
if (process.env.NODE_ENV === 'development') {
  // will show a tabbed console in mobile Safari/Chrome
  /* eslint-disable no-new */
  new VConsole();
}


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);


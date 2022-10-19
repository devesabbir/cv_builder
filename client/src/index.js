import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import App from './App';
import { Provider } from 'react-redux';
import store from './redux/store.js';
import { BrowserRouter as Router } from 'react-router-dom'
import SiteNav from './nav/SiteNav';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
   <Provider store={store}>
             
      <Router>
       <SiteNav/>
          <App />
      </Router>
   </Provider>
  
);
 

 
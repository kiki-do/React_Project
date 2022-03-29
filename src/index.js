import './index.css';
import store from './redux/state.js'
import reportWebVitals from './reportWebVitals';
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter} from 'react-router-dom';
import './index.css';
import App from './App';


let rerenderEntireTree = (state) =>{
    ReactDOM.render(
        <React.StrictMode>
          <BrowserRouter>
          <App state={state} dispatch={store.dispatch.bind(store)} store={store} />
          </BrowserRouter>
        </React.StrictMode>,
        document.getElementById('root')
      );
      
} 

rerenderEntireTree(store.getState());

store.subscribe(rerenderEntireTree);


reportWebVitals();
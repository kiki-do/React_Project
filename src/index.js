import './index.css';
import {rerenderEntireTree} from './render'
import state from './redux/state.js'
import reportWebVitals from './reportWebVitals';


rerenderEntireTree(state);


reportWebVitals();
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from "react-router-dom"

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import 'bootstrap-icons/font/bootstrap-icons.css';
import "devicon/devicon.min.css";

import App from './App.jsx'
import './styles/all.scss';

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter basename="/portfolio">
    <App />
  </BrowserRouter>
)
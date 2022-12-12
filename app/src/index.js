import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './app';
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Login from './components/user/Login';
import Register from './components/user/Register';
import Profile from './components/user/Profile';
import { GlobalProvider } from './context/GlobalState';


const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  // <React.StrictMode>
  <GlobalProvider>
    <Router>
      <Routes>
          <Route path="/" element={<App />} />
          <Route path="profile" element={<Profile />} />
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
      </Routes>
    </Router>
  </GlobalProvider>
  // </React.StrictMode>
);

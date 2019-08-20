import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import Home from './components/Home';
import Login from './components/Login';
import FriendsList from './components/FriendsList';
import PrivateRoute from "./components/PrivateRoute";

import './App.css';

// username:'jade' && password:'password1'

function App() {
  return (
    <Router>
      <div className="App">
        <ul>
        <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/login">Login</Link>
          </li>
          <li>
            <Link to="/friends">Friends List</Link>
          </li>
        </ul>
        <Route exact path='/' component={Home} />
        <Route path="/login" component={Login} />
        <PrivateRoute exact path="/friends" component={FriendsList} />
        {/* Private */}
      </div>
    </Router>
  );
}

export default App;

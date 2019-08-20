import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Login from './components/Login'

import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <ul>
          <li>
            <Link to="/login">Login</Link>
          </li>
          {/* <li>
            <Link to="/protected">Friends</Link>
          </li> */}
        </ul>
        <Route path="/login" component={Login} />
      </div>
    </Router>
  );
}

export default App;

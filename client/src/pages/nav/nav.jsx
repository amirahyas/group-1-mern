import React from 'react';
import { useState } from 'react';
import { useMutation } from '@apollo/client';
import { Link } from 'react-router-dom';
import { LOGIN } from '../../utils/mutations';
import Auth from '../../utils/auth';
import './src/components/css/login.css'; // Link to the CSS file
import './src/components/css/home.css';
import './src/components/css/signup.css';



export default Login;

// Navbar component
const Navbar = () => (
  <nav>
    <ul>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/login">Login</Link>
      </li>
      <li>
        <Link to="/signup">Signup</Link>
      </li>
    </ul>
  </nav>
);
// Home component
const Home = () => <h2>Welcome to the Home Page!</h2>;
// Login
const Login = () => <h2>Login Page</h2>;
// Signup
const Signup = () => <h2>Signup Page</h2>;
// App component
const App = () => (
  <Router>
    <div>
      <Navbar />
      <Switch>
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/signup">
          <Signup />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </div>
  </Router>
);
// Render the App
ReactDOM.render(<App />, document.getElementById("root"));
import React from 'react';
import './App.css';
import Landing from './Components/LandingBg';
import Body from './Components/Body/Body';
import Navbar from './Components/Navbar/Navbar';
import Logins from './Components/logins/Logins';
import Login from './Components/Login/Login';
import Signup from './Components/Signup/Signup';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

function App() {
    return (
        <Router>
            <div className="App">
                <Navbar />
                <Switch>
                    <Route exact path="/">
                        <Landing home="true" />
                        <Body />
                    </Route>
                    <Route exact path="/login">
                        <Logins />
                        <Login />
                    </Route>
                    <Route exact path="/signup">
                        <Logins />
                        <Signup />
                    </Route>
                </Switch>
            </div>
        </Router>
    );
}

export default App;

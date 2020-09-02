import React from 'react';
import './App.css';
import Landing from './Components/LandingBg';
import Body from './Components/Body/Body';
import Navbar from './Components/Navbar/Navbar';
function App() {
    return (
        <div className="App">
            <Navbar />
            <Landing />
            <Body />
        </div>
    );
}

export default App;

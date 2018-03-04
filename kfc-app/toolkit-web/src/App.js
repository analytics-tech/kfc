import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';

import TopNavBar from './components/layout/TopNavBar';
import CurrentTimeDisplay from './components/time/CurrentTimeDisplay';

class App extends Component {
    render() {
        return (
            <div className="App">

                <TopNavBar/>

                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo"/>
                    <h1 className="App-title">Welcome to KFC Toolkit</h1>
                </header>

                <p className="App-intro">
                    Let your imagination go weird, and build component to aid exploratory data analysis.
                    <br/>
                    Components that is Ki-Lat, Fast, and Cool
                </p>
                <br/>
                <div>
                    <CurrentTimeDisplay/>
                </div>
            </div>
        );
    }
}

export default App;

import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';


class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Let's hope I get better!</h1>
        </header>
        <p className="App-intro">
          This is my first time to work in React.
        </p>
        <p className="App-next">
        And not matter what I tried, I got an error!! :(
          </p>
      </div>
    );
  }
}



export default App;

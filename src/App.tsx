import React, { Component } from 'react';
import logo from './logo.svg';
import './App.scss';
import { Button, DangerButton, InfoButton } from './global/Button';

class App extends Component {

  handleClick = async () => {
    console.log('TEST ME');
  };

  handleClickRed = async () => {
    console.log('RED BUTTON CLICK');
  };

  handleClickInfo = async () => {
    console.log('Info BUTTON CLICK');
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <Button onClick={this.handleClick} copy="Load button"></Button>
          <DangerButton onClick={this.handleClickRed} copy="Red button"></DangerButton>
          <InfoButton onClick={this.handleClickInfo} copy="Info button"></InfoButton>
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );
  }
}

export default App;

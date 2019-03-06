import './home.scss';
import logo from './../../assets/images/logo.svg';
import { Button, SecondaryButton, InfoButton } from '../../global/Button';
import React, { Component } from 'react';

export class Home extends Component {
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
      <div className="home container">
        <h1>This is a home page</h1>

        <header className="home-header">
          <img src={logo} className="home-logo" alt="logo" />
          <Button onClick={this.handleClick} copy="Primary button" />
          <br />
          <SecondaryButton
            onClick={this.handleClickRed}
            copy="Secondary button"
          />
          <br />
          <InfoButton onClick={this.handleClickInfo} copy="Info button" />
          <br />
        </header>
      </div>
    );
  }
}

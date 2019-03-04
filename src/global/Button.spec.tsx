import React from 'react';
import ReactDOM from 'react-dom';
import {Button, SecondaryButton} from './Button';

it('Button test function for class list', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Button />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('SecondaryButton test function for class list', () => {
  const div = document.createElement('div');
  ReactDOM.render(<SecondaryButton />, div);
  ReactDOM.unmountComponentAtNode(div);
});


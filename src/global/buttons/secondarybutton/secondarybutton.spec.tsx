import React from 'react';
import ReactDOM from 'react-dom';
import { SecondaryButton } from './secondarybutton';

it('SecondaryButton test function for class list', () => {
  const div = document.createElement('div');
  ReactDOM.render(<SecondaryButton />, div);
  ReactDOM.unmountComponentAtNode(div);
});

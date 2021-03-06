import React from 'react';
import { Button } from '../button/button';

export class SecondaryButton extends Button {
  render() {
    return (
      <Button
        className="btn btn-secondary"
        onClick={this.props.onClick}
        copy={this.props.copy}
      />
    );
  }
}

import React, { Component, HTMLAttributes } from 'react';
import './button.scss';

export interface IButtonProps {
  copy?: string;
}

export class Button extends Component<
  IButtonProps & HTMLAttributes<HTMLButtonElement>,
  {}
> {
  constructor(props: IButtonProps) {
    super(props);
  }

  private getClassList = () => {
    return this.props.className ? this.props.className : 'btn btn-primary';
  };

  render() {
    return (
      <button className={this.getClassList()} onClick={this.props.onClick}>
        {this.props.copy}
      </button>
    );
  }
}

import React, { Component, HTMLAttributes } from 'react';
import './Button.scss';

export interface IButtonProps{
  copy?: string;
}

export class Button extends Component<IButtonProps & HTMLAttributes<HTMLButtonElement>, {}> {

  getClassList = () => {
    return this.props.className ? this.props.className : 'btn btn-primary';
  }

  render() {
    return <button className={this.getClassList()} onClick={this.props.onClick}>{this.props.copy}</button>;
  }
}

export class SecondaryButton extends Button {
  render() {
    return <Button className='btn btn-secondary' onClick={this.props.onClick} copy={this.props.copy}></Button>
  }
}

export const InfoButton = ({onClick, copy}) => {
  return <Button className={'btn-info btn'} onClick={onClick} copy={copy}></Button>
}
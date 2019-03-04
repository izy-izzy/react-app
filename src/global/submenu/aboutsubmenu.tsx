import React, { Component} from 'react';
import './aboutsubmenu.scss';
import { NavLink } from 'react-router-dom';

export class AboutSubMenu extends Component {
  render() {
    return (
      <div className="dropdown-menu" aria-labelledby="navbarDropdown">
        <NavLink exact className="dropdown-item" to="/about/something" activeClassName='active'>About Somthing</NavLink>
        <NavLink exact className="dropdown-item" to="/about/nothing" activeClassName='active'>About Nothing</NavLink>
      </div>
    )
  }
}
import React, { Component } from 'react';
import './app.scss';
import { Route, BrowserRouter as Router, NavLink } from 'react-router-dom';
import { Home } from '../pages/home/home';
import About from '../pages/about/about';
import { AboutSubMenu } from '../global/submenu/aboutsubmenu';
import { AboutSomething } from '../pages/about/something/aboutsomething';
import { AboutNothing } from '../pages/about/nothing/aboutnothing';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <div className="app">
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
              <div className="navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                  <li className="nav-item">
                    <NavLink
                      to="/"
                      className="nav-link"
                      activeClassName="active"
                      exact
                    >
                      Home
                    </NavLink>
                  </li>
                  <li className="nav-item dropdown">
                    <NavLink
                      className="nav-link dropdown-toggle"
                      to="/about"
                      id="navbarDropdown"
                      role="button"
                      data-toggle="dropdown"
                      aria-haspopup="true"
                      aria-expanded="false"
                      activeClassName="active"
                    >
                      About
                    </NavLink>
                    <AboutSubMenu />
                  </li>
                </ul>
              </div>
            </nav>
            <Route exact path="/" component={Home} sensitive={false} />
            <Route exact path="/about" component={About} sensitive={false} />
            <Route
              exact
              path="/about/nothing"
              component={AboutNothing}
              sensitive={false}
            />
            <Route
              exact
              path="/about/something"
              component={AboutSomething}
              sensitive={false}
            />
          </div>
        </Router>
      </div>
    );
  }
}

export default App;

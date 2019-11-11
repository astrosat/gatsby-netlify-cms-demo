import React from 'react'
import { Link } from 'gatsby'
import github from '../img/github-icon.svg'

const Navbar = class extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      active: false,
      navBarActiveClass: '',
    }
  }

  toggleHamburger = () => {
    // toggle the active boolean in the state
    this.setState(
      {
        active: !this.state.active,
      },
      // after state has been updated,
      () => {
        // set the class in state for the navbar accordingly
        this.state.active
          ? this.setState({
              navBarActiveClass: 'is-active',
            })
          : this.setState({
              navBarActiveClass: '',
            })
      }
    )
  }

  render() {
    return (
      <nav
        className="navbar is-transparent"
        role="navigation"
        aria-label="main-navigation"
      >
        <div className="navbar-container">
          <div className="navbar-brand">
            <Link
              to="/"
              className="navbar-item"
              title="Logo"
            >
              ASTROSAT
            </Link>
            {/* Hamburger menu */}
            <div
              className={`navbar-burger burger ${this.state.navBarActiveClass}`}
              data-target="navMenu"
              onClick={() => this.toggleHamburger()}
            >
              <span />
              <span />
              <span />
            </div>
          </div>
          <div
            id="navMenu"
            className={`navbar-menu ${this.state.navBarActiveClass}`}
          >
            <div className="navbar-start has-text-centered">
              <Link className="navbar-item" to="/orbis">
                OR3IS
              </Link>
              <Link className="navbar-item" to="/modules">
                MODULES
              </Link>
              <Link className="navbar-item" to="/plans">
                PLANS
              </Link>
              <Link className="navbar-item" to="/stories">
                STORIES
              </Link>
              <Link className="navbar-item" to="/contact/examples">
                CONTACT
              </Link>
            </div>

          </div>
        </div>
      </nav>
    )
  }
}

export default Navbar

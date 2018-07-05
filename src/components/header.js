import React from 'react'
import Link from 'gatsby-link'
import Logo from '../img/logox400.png'
import '../layouts/styles/layout-overide.css'

let headerStyles = {
  nav: {
    color: '#f7f7f7',
    padding: '15px 5%',
    top: '0',
    width: '100%',
    display: 'flex',
    position: 'fixed',
    justifyContent: 'space-between',
    zIndex: '999',
  },
  createEvent: {
    margin: '-11px auto',
    padding: '8px 13px',
    background: '#ff4a6e',
    color: '#fff',
    letterSpacing: '2px',
    borderRadius: '2px',
    cursor: 'pointer',
    fontSize: '13px',
    textAlign: 'center',
    fontWeight: '400',
    border: '1px solid #ff4a6e',
    transition: 'all .15s',
  },
  linkDiv: {
    display: 'block',
    margin: '10px',
    padding: '0',
  },
  link: {
    marginLeft: '16px',
    textDecoration: 'none',
    display: 'inline-block',
    padding: '0 10px',
    fontSize: '13px',
    color: 'white',
  },
  linkHover: {
    color: '#ff4a6e',
  },
}

const Header = ({ siteTitle }) => (
  <div>
    <nav style={headerStyles.nav}>
      <Link to="/index-page/">
        <img
          src={Logo}
          alt="Logo"
          style={{
            margin: '0',
            maxWidth: '160px',
            maxHeight: '70px',
          }}
        />
      </Link>

      <div id="navDiv" style={headerStyles.linkDiv}>
        <Link to="/create-event">
          <button
            style={headerStyles.createEvent}
            className="createEventButton"
          >
            create event
          </button>
        </Link>
        <Link style={headerStyles.link} to="/about/">
          About
        </Link>
        <Link style={headerStyles.link} to="/faq/">
          {' '}
          FAQ{' '}
        </Link>
        <Link style={headerStyles.link} to="/enterprise-solution/">
          {' '}
          Enterprise solution{' '}
        </Link>
        <Link style={headerStyles.link} to="/my-tickets/">
          {' '}
          My tickets{' '}
        </Link>
        <Link style={headerStyles.link} to="/login/">
          Login
        </Link>
      </div>
    </nav>
  </div>
)

export default Header

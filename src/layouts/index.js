import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import Link from 'gatsby-link'
import Header from '../components/header'
import Footer from '../components/footer'
import './index.css'
import '../layouts/styles/layout-overide.css'
import { WindowHelper } from '../components/helpers'
import Logo from '../img/logox400.png'
import LinksData from '../__mocks__/nav-links'

export const Layout = ({ children, data, staticHeader = true }) => (
  <div>
    <div>
      <WindowHelper>
        {window => (
          <nav
            id="nav"
            className={
              !staticHeader && window.scrollY <= 10 ? '' : 'scroll-header'
            }
            style={{
              padding: '15px 5%',
              top: '0',
              width: '100%',
              display: 'flex',
              position: 'fixed',
              justifyContent: 'space-between',
              zIndex: '999',
              transition: 'all 0.5s',
            }}
          >
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

            <div
              id="navDiv"
              style={{
                display: 'block',
                margin: '10px',
                padding: '0',
              }}
            >
              <Link to="/create-event">
                <button
                  style={{
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
                  }}
                  className="createEventButton"
                >
                  create event
                </button>
              </Link>
              {LinksData.map(
                linkData =>
                  linkData.type === 'gatsbyLink' ? (
                    <Link
                      style={{
                        marginLeft: '16px',
                        textDecoration: 'none',

                        display: 'inline-block',
                        padding: '0 10px',
                        fontSize: '13px',
                        color: '#f7f7f7',
                        transition: 'all 0.5s',
                      }}
                      to={linkData.link}
                    >
                      {linkData.caption}
                    </Link>
                  ) : (
                    <a
                      style={{
                        marginLeft: '16px',
                        textDecoration: 'none',

                        display: 'inline-block',
                        padding: '0 10px',
                        fontSize: '13px',
                        color: '#f7f7f7',
                        transition: 'all 0.5s',
                      }}
                      href={linkData.link}
                    >
                      {linkData.caption}
                    </a>
                  )
              )}
            </div>
          </nav>
        )}
      </WindowHelper>
    </div>s
    {children}
    <Footer />
  </div>
)

Layout.propTypes = {
  children: PropTypes.func,
}

export default ({ children }) => children()

export const query = graphql`
  query SiteTitleQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`

import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import Link from 'gatsby-link'

import Footer from '../components/footer'
import './index.css'
import '../layouts/styles/layout-overide.css'
import { WindowHelper } from '../components/helpers'
import Logo from '../img/logox400.png'
import LinksData from '../__mocks__/nav-links'

const styles = {
  hamburger: {
    backgroundColor: '#333',
    width: '22px',
    height: '2px',
    borderRadius: '1px',
    margin: '4px 0',
  },
}

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
            <a href="/">
              <img
                src={Logo}
                alt="Logo"
                style={{
                  margin: '0',
                  maxWidth: '160px',
                  maxHeight: '70px',
                }}
              />
            </a>

            <div
              id="navDiv"
              style={{
                padding: '0',
                transition: 'all .25s',
                ...(window.width > 980
                  ? { margin: '10px' }
                  : {
                      // opacity: '0',
                      // visibility: 'hidden',
                      transform: 'translateX(100%)',
                      position: 'absolute',
                      textAlign: 'center',
                      top: '65px',
                      right: '-140',
                      width: '80%',
                      maxWidth: '250px',
                      alignItems: 'baseline',
                      background: '#f5f5f5',
                      boxShadow: '0 3px 5px rgba(60,60,60,.03)',
                    }),
              }}
            >
              <a
                style={{
                  ...(window.width < 980
                    ? {
                        paddingBottom: '10px',
                        display: 'block',
                        marginTop: '30px',
                      }
                    : {}),
                }}
                href="/create-event"
              >
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
              </a>

              {LinksData.map(
                linkData =>
                  linkData.type === 'gatsbyLink' ? (
                    <a
                      style={{
                        textDecoration: 'none',

                        transition: 'all 0.5s',

                        ...(window.width > 980
                          ? {
                              marginLeft: '16px',
                              fontSize: '13px',
                              color: '#f7f7f7',
                              marginLeft: '16px',
                              padding: '0 10px',
                            }
                          : {
                              marginLeft: '0',
                              padding: '15px 20px',
                              fontSize: '15px',
                              fontWeight: '600',
                              color: '#333',
                              display: 'block',
                            }),
                      }}
                      href={linkData.link}
                    >
                      {linkData.caption}
                    </a>
                  ) : (
                    <a
                      style={{
                        textDecoration: 'none',
                        transition: 'all 0.5s',

                        display: 'inline-block',
                        ...(window.width > 980
                          ? {
                              marginLeft: '16px',
                              fontSize: '13px',
                              color: '#f7f7f7',
                              marginLeft: '16px',
                              padding: '0 10px',
                            }
                          : {
                              marginLeft: '0px',
                              padding: '15px 20px',
                              fontSize: '15px',
                              fontWeight: '600',
                              color: '#333',
                              display: 'block',
                            }),
                      }}
                      href={linkData.link}
                    >
                      {linkData.caption}
                    </a>
                  )
              )}
            </div>
            <div
              style={{
                backgroundColor: '#ddd',
                borderRadius: '4px',
                padding: '5px 10px',
                cursor: 'pointer',
                ...(window.width > 980
                  ? {
                      display: 'none',
                    }
                  : {
                      display: 'block',
                    }),
              }}
              onClick={() => {
                document.getElementById('navDiv').style.right = '250px'
              }}
            >
              <div style={styles.hamburger} />
              <div style={styles.hamburger} />
              <div style={styles.hamburger} />
            </div>
          </nav>
        )}
      </WindowHelper>
    </div>
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

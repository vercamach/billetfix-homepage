import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import Link from 'gatsby-link'
import { Button } from '../components/elements/elements'

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

export const Layout = ({ children, data, staticHeader }) => (
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
              top: '0',
              width: '100%',
              display: 'flex',
              position: 'fixed',
              justifyContent: 'space-between',
              zIndex: '999',
              transition: 'all 0.5s',
              padding: '15px 5%',
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
                      top: '75px',
                      right: '-140px',
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
                <Button
                  style={{
                    margin: '-11px auto',
                    padding: '8px 13px',

                    borderRadius: '2px',
                    cursor: 'pointer',
                    fontSize: '13px',
                    textAlign: 'center',
                    fontWeight: '400',
                  }}
                >
                  create event
                </Button>
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
                position: 'fixed',
                right: '15px',
                ...(window.width > 980
                  ? {
                      marginTop: '6px',
                      display: 'none',
                    }
                  : window.width > 450
                    ? {
                        marginTop: '6px',
                      }
                    : {
                        marginTop: '5px',
                        display: 'block',
                      }),
              }}
              onClick={() => {
                document
                  .getElementById('navDiv')
                  .classList.toggle('menuVisible')
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

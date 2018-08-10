import React from 'react'
import Link from 'gatsby-link'
import abouts from '../__mocks__/about'
import { Layout } from '../layouts/index'
import { WindowHelper } from '../components/helpers'

const About = () => {
  return (
    <Layout>
      <WindowHelper>
        {window => (
          <div>
            <section
              style={{
                overflow: 'hidden',
                background: '#fff',
                color: '#333',

                ...(window.widt > 980
                  ? {
                      padding: '125px 6%',
                    }
                  : {
                      padding: '80px 6%',
                    }),
              }}
            >
              <div
                style={{
                  maxWidth: '672px',
                  margin: '0 auto',
                }}
              >
                <h1
                  style={{
                    textAlign: 'center',
                    fontWeight: '300',

                    letterSpacing: '2px',
                    display: 'block',
                    ...(window.width > 980
                      ? {
                          fontSize: '45px',
                        }
                      : {
                          fontSize: '28px',
                        }),
                  }}
                >
                  About
                </h1>
                <div>
                  {abouts.map(part => (
                    <p
                      style={{
                        lineHeight: '32px',
                        marginTop: '15px',
                        fontSize: '16.5px',
                        letterSpacing: '1px',
                        fontWeight: '100',
                      }}
                    >
                      {part.paragraph}
                    </p>
                  ))}
                </div>
              </div>
            </section>
          </div>
        )}
      </WindowHelper>
    </Layout>
  )
}

export default About

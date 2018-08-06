import React from 'react'
import Link from 'gatsby-link'
import abouts from '../__mocks__/about'
import { WindowHelper } from '../components/helpers'

const About = () => {
  return (
    <WindowHelper>
      {window => (
        <div>
          <section
            style={{
              padding: ' 125px 6%',
              overflow: 'hidden',
              background: '#fff',
              color: '#333',
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
                  fontSize: '45px',
                  letterSpacing: '2px',
                  display: 'block',
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
  )
}

export default About

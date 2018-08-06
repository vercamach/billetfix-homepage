import React from 'react'
import { WindowHelper } from '../components/helpers'
import Img from '../img/lights.jpg'

const spanText = [
  "It's never been easier to manage events",
  'Free to use for the organizer',
  'Ultra low fees',
  'Ready to receive payments in seconds',
  'Integrate for free on your website',
]

const Hero = () => (
  <WindowHelper>
    {window => (
      <section
        id="intro-section"
        style={{
          display: 'flex',
          textAlign: 'center',
          paddingBottom: '2%',
          paddingTop: '62px',
          backgroungImage: 'Img',
          justifyContent: 'center',
          alignItems: 'center',
          height: '100vh',
          minHeight: '600px',
          background: 'Img',
          backgroundSize: 'cover',
        }}
      >
        <div>
          <div style={{ marginTop: '0' }}>
            <img
              src={Img}
              alt="background"
              style={{
                zIndex: '-1',
                position: 'absolute',
                top: '0',
                left: '0',
                minWidth: '100vw',
                minHeight: '100vh',
                filter: 'brightness(40%) contrast(70%)',
              }}
            />

            <h1
              style={{
                fontWeight: '700',
                color: '#ff4a6e',
                textShadow: '1px 1px 2px rgba(0, 0, 0, 0.3)',
                fontSize: '43px',
                lineHeight: '72px',
                letterSpacing: '5px',
              }}
            >
              It's never been easier to manage events
            </h1>

            {spanText.map(span => (
              <span
                style={{
                  color: 'white',
                  display: 'block',
                  margin: '17.6px 0',
                  fontSize: '20px',
                  lineHeight: '39px',
                  fontWeight: '100',
                  letterSpacing: '2px',
                }}
              >
                {span}
              </span>
            ))}

            {/* CREATE EVENT */}

            <div
              style={{
                display: 'flex',
                justifyContent: 'center',
                marginTop: '57px',
              }}
              className="get-started"
            >
              <input
                style={{
                  fontSize: '18px',
                  padding: '10px',
                  width: '365px',
                  height: '56px',
                  border: '.5px solid #ff4a6e',
                  borderRadius: '3px',
                }}
                id="event-title"
                type="text"
                placeholder="Your event title goes here..."
              />
              <button
                id="start"
                className="cta"
                style={{
                  background: '#ff4a6e',
                  color: '#fff',
                  letterSpacing: '3px',
                  padding: '16px 17px',
                  margin: '0',
                  borderTopLeftRadius: '0',
                  borderBottomLeftRadius: '0',
                  fontSize: '15px',
                  border: '1px solid #ff4a6e',
                }}
              >
                start selling
              </button>
            </div>
            <div>
              <button
                style={{
                  background: '#ff4a6e',
                  color: '#fff',
                  letterSpacing: '3px',
                  padding: '15px 10px',
                  marginTop: '60px',
                  marginBottom: '40px',
                  borderTopLeftRadius: '0',
                  borderBottomLeftRadius: '0',
                  fontSize: '15px',
                  border: '1px solid #ff4a6e',
                }}
                className="cta"
                id="see_video"
              >
                see video
              </button>
            </div>

            <a
              style={{
                textTransform: 'uppercase',
                color: '#fff',
                textDecoration: 'none',
                letterSpacing: '2px',
                fontWeight: '100',
              }}
              href="features"
            >
              see how easy it is
            </a>
          </div>
        </div>
      </section>
    )}
  </WindowHelper>
)
export default Hero

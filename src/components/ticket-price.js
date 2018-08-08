import React from 'react'
import prices from '../__mocks__/ticket-price'
import { WindowHelper } from '../components/helpers'

const TicketPrice = () => (
  <WindowHelper>
    {window => (
      <section style={{ padding: '7em 0' }}>
        <h3
          style={{
            fontSize: '30px',
            letterSpacing: '3px',
            paddingBottom: '15px',
            textAlign: 'center',
            margin: '0.25em 0px',
            color: 'rgb(255, 74, 110)',
            fontWeight: '100',
          }}
        >
          The cheapest signup system in the market!
        </h3>
        <div
          style={{
            display: 'flex',
            flexFlow: 'row wrap',
            justifyContent: ' center',
          }}
        >
          {prices.map(price => (
            <div
              className="price-card"
              style={{
                margin: '20px',
                minWidth: '280px',
                border: '2px solid #ff4a6e',
                borderRadius: ' 3px',
                background: '#f7f7f7',
                color: '#333',
                display: 'block',
              }}
            >
              <div
                className="header-price"
                style={{
                  width: '100%',
                  background: '#ff4a6e',
                  color: '#fff',
                  textAlign: 'center',
                  letterSpacing: '2px',
                  textTransform: 'uppercase',
                  fontWeight: '700',
                }}
              >
                <span
                  style={{
                    paddingTop: ' 1em',
                    display: 'block',
                    fontSize: '.75em',
                    fontWeight: '100',
                    letterSpacing: '3px',
                  }}
                >
                  Attendee price
                </span>
                <h3
                  style={{
                    color: '#fff',
                    display: 'inline-block',
                    fontSize: '35px',
                    margin: ' 0',
                    fontWeight: '400',
                    padding: '5px 0',
                    letterSpacing: 'normal',
                    textAlign: 'center',
                  }}
                >
                  {price.AttendeePrice}
                </h3>
                <span
                  style={{
                    fontWeight: '100',
                    letterSpacing: '2px',
                  }}
                >
                  {' '}
                  DKK
                </span>
              </div>
              <div
                className="body"
                style={{
                  textAlign: 'center',
                  padding: '10px',
                }}
              >
                <span
                  style={{
                    fontWeight: '100',
                    display: 'block',
                    padding: '.5em 0',
                    letterSpacing: '2px',
                    fontSize: '1.2em',
                  }}
                >
                  <strong>Free </strong>to host
                </span>
                <span
                  style={{
                    fontWeight: '100',
                    display: 'block',
                    padding: '.5em 0',
                    letterSpacing: '2px',
                    fontSize: '1.2em',
                  }}
                >
                  <strong>Free</strong> website integration
                </span>
                <span
                  style={{
                    fontWeight: '100',
                    display: 'block',
                    padding: '.5em 0',
                    letterSpacing: '2px',

                    fontSize: '1.2em',
                  }}
                >
                  <strong>Free </strong>support
                </span>

                <div
                  className="price"
                  style={{
                    fontWeight: '100',
                    borderTop: '1px solid #ccc',
                    padding: '10px 0',
                    margin: '10px auto',
                  }}
                >
                  <span
                    style={{
                      fontWeight: '500',
                      verticalAlign: 'top',
                      letterSpacing: '2px',
                      marginRight: '8px',
                    }}
                  >
                    DKK
                  </span>
                  <span
                    style={{
                      fontSize: '3.5em',
                      letterSpacing: '2px',
                    }}
                  >
                    {price.TicketPrice}
                  </span>
                  <sub style={{ fontSize: '16px' }}>{price.Percentage}</sub>
                  <span
                    style={{
                      display: 'block',
                      letterSpacing: '2px',
                    }}
                  >
                    Service fee per attendee
                  </span>
                </div>
                <a href="../create-event/" style={{ textDecoration: 'none' }}>
                  <button
                    style={{
                      margin: ' 3px auto 10px',
                      padding: '10px 15px',
                      letterSpacing: '1px',
                      background: '#ff4a6e',
                      color: '#fff',
                      fontSize: '15px',
                      letterSpacing: '3px',
                      borderColor: ' #ff4a6e',
                      textTransform: 'uppercase',
                      borderRadius: '2px',
                      transition: 'all .15s',
                    }}
                  >
                    Create Event
                  </button>
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>
    )}
  </WindowHelper>
)

export default TicketPrice

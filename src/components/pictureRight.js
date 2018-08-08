import React from 'react'
import IconTeaser from '../img/icon-teaser.png'

const Teaser = () => (
  <section
    style={{
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      overflow: 'hidden',
      background: '#f7f7f7',
      padding: '7em 6%',
      position: 'relative',
    }}
    id="teaser"
  >
    <div
      style={{
        maxWidth: '50%',
        minWidth: '33%',
        padding: '0 10px',
      }}
      className="details"
    >
      <h3
        style={{
          fontSize: '30px',
          letterSpacing: '3px',
          lineHeight: '1.2em',
          margin: '.25em 0',
          color: '#ff4a6e',
          fontWeight: '100',
        }}
      >
        Custom information about the attendee
      </h3>
      <p
        style={{
          lineHeight: '30px',
          letterSpacing: '2px',
          marginTop: 16,
          fontSize: '16px',
          color: '#333',
          fontWeight: '100',
        }}
      >
        Do you want to know something during signup?
      </p>
      <p
        style={{
          lineHeight: '30px',
          letterSpacing: '2px',
          marginTop: 16,
          fontSize: '16px',
          color: '#333',
          fontWeight: '100',
        }}
      >
        Get all the information you would like with custom fields. What field of
        study? What year are you on? Is it the first time you attend? Just
        contact us here for help!
      </p>
    </div>
    <div className="icon">
      <img
        src="https://placeimg.com/240/240/animals"
        style={{
          height: '200px',
          marginRight: '240px',
        }}
      />
    </div>
  </section>
)
export default Teaser

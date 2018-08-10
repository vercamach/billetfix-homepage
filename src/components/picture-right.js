import React from 'react'
import { SmileyHiIcon } from './icons/smileyHiIcon'

const Teaser = () => (
  <section
    style={{
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      overflow: 'hidden',
      background: '#f7f7f7',
      padding: '6% 6%',
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
        Are you organizing an event for your fellow students?
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
        Regardsless if it's to the christmas lunch, intro trip or end of
        semester party, we have made it easy for students.
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
        Forget about complicated spreadsheets and time consuming sale in the
        breaks. Just do it online - for free!
      </p>
    </div>
    <div
      className="icon"
      style={{
        minWidth: '33%',
        padding: '0 10px',
      }}
    >
      <SmileyHiIcon />
    </div>
  </section>
)
export default Teaser

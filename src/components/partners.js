import React from 'react'
import DtuImg from '../img/dtu.png'
import CseImg from '../img/cse.jpg'
import FondenImg from '../img/fonden.png'
import TicketButlerImg from '../img/ticketbutler.png'
import TinyRhinoImg from '../img/tiny-rhino.png'

const Partners = () => (
  <section>
    <div
      style={{
        display: 'flex',
        background: '#fff',
        zIndex: '1',
        flexFlow: 'row wrap',
        width: '100%',
        justifyContent: 'space-around',
        padding: '32px',
      }}
    >
      {[TicketButlerImg, TinyRhinoImg, DtuImg, FondenImg, CseImg].map(src => (
        <img
          style={{
            objectFit: 'contain',
            maxHeight: '80px',
            maxWidth: '192px',
            padding: '16px',
            filter: 'grayscale(100%)',
          }}
          src={src}
        />
      ))}
    </div>
  </section>
)

export default Partners

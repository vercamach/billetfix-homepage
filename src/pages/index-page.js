import React from 'react'
import Link from 'gatsby-link'
import '../layouts/styles/layout-overide.css'
import Img from '../img/lights.jpg'
import DtuImg from '../img/dtu.png'
import CseImg from '../img/cse.jpg'
import FondenImg from '../img/fonden.png'
import TicketButlerImg from '../img/ticketbutler.png'
import TinyRhinoImg from '../img/tiny-rhino.png'
let styles = {
  sectionIntro: {
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
  },

  span: {
    color: 'white',
    display: 'block',
    margin: '17.6px 0',
    fontSize: '20px',
    lineHeight: '39px',
    fontWeight: '100',
    letterSpacing: '2px',
  },
  h1: {
    fontWeight: '700',
    color: '#ff4a6e',
    textShadow: '1px 1px 2px rgba(0, 0, 0, 0.3)',
    fontSize: '43px',
    lineHeight: '72px',
    letterSpacing: '5px',
  },
  img: {
    zIndex: '-1',
    position: 'absolute',
    top: '0',
    left: '0',
    minWidth: '100vw',
    minHeight: '100vh',
    filter: 'brightness(40%) contrast(70%)',
  },
  introText: {
    marginTop: '0',
  },
  getStarted: {
    display: 'flex',
    justifyContent: 'center',
    marginTop: '57px',
  },
  getStartedInput: {
    fontSize: '18px',
    padding: '10px',
    width: '365px',
    height: '56px',
    border: '.5px solid #ff4a6e',

    borderRadius: '3px',
  },
  getStartedButton: {
    background: '#ff4a6e',
    color: '#fff',
    letterSpacing: '3px',
    padding: '16px 17px',
    margin: '0',
    borderTopLeftRadius: '0',
    borderBottomLeftRadius: '0',
    fontSize: '15px',
    border: '1px solid #ff4a6e',
  },

  videoButton: {
    background: '#ff4a6e',
    color: '#fff',
    letterSpacing: '3px',
    padding: '15px 10px',
    margin: '60px auto',
    borderTopLeftRadius: '0',
    borderBottomLeftRadius: '0',
    fontSize: '15px',
    border: '1px solid #ff4a6e',
  },

  partnerLogosDiv: {
    display: 'flex',
    flexFlow: 'row wrap',
    width: '100%',
    justifyContent: 'space-around',
    padding: '32px',
  },
  partnerLogosImg: {
    objectFit: 'contain',
    maxHeight: '80px',
    maxWidth: '192px',
    padding: '16px',
    filter: 'grayscale(100%)',
  },
  h3Teaser: {
    fontSize: '2em',
    lineHeight: '1.2em',
    margin: '.25em 0',
    color: '#ff4a6e',
    fontWeight: '100',
  },
  pTeaser: {
    lineHeight: '1.8em',
    marginTop: '1em',
    fontSize: '1.1em',
    color: '#333',
    fontWeight: '100',
  },
  sectionTeaser: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingLeft: '6%',
    paddingRight: '6%',
    overflow: 'hidden',
    background: '#f7f7f7',
    padding: '7em 0',
    position: 'relative',
  },
  divTeaserDetails: {
    maxWidth: '50%',
    minWidth: '33%',
    padding: '0 10px',
  },
}

const IndexPage = () => (
  <div>
    <section style={styles.sectionIntro}>
      <div style={styles.introText}>
        <img src={Img} alt="background" style={styles.img} />
        <h1 style={styles.h1}>It's never been easier to manage events</h1>
        <span style={styles.span}>Free to use for the organizer</span>
        <span style={styles.span}>Ultra low fees</span>
        <span style={styles.span}>Ready to receive payments in seconds</span>
        <span style={styles.span}>Integrate for free on your website</span>
      </div>

      {/* Create event part */}
      <div style={styles.getStarted} className="get-started">
        <input
          style={styles.getStartedInput}
          id="event-title"
          type="text"
          placeholder="Your event title goes here..."
        />
        <button id="start" className="cta" style={styles.getStartedButton}>
          start selling
        </button>
      </div>
      <div> </div>
      <button style={styles.videoButton} class="cta" id="see_video">
        see video
      </button>
    </section>

    {/* Partner section */}
    <div style={styles.partnerLogosDiv}>
      <img style={styles.partnerLogosImg} src={TicketButlerImg} />
      <img style={styles.partnerLogosImg} src={TinyRhinoImg} />
      <img style={styles.partnerLogosImg} src={DtuImg} />
      <img style={styles.partnerLogosImg} src={FondenImg} />
      <img style={styles.partnerLogosImg} src={CseImg} />
    </div>

    <section
      style={styles.sectionTeaser}
      id="teaser"
      className="component flex"
    >
      <div style={styles.divTeaserDetails} className="details">
        <h3 style={styles.h3Teaser}>
          Are you organizing an event for your fellow students?
        </h3>
        <p style={styles.pTeaser}>
          Regardsless if it's to the christmas lunch, intro trip or end of
          semester party, we have made it easy for students.
        </p>
        <p style={styles.pTeaser}>
          Forget about complicated spreadsheets and time consuming sale in the
          breaks. Just do it online - for free!
        </p>
      </div>
      <div className="icon">
        <h1> svg missing</h1>
      </div>
    </section>
  </div>
)

export default IndexPage

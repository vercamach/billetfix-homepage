import React from 'react'
import Link from 'gatsby-link'
import '../layouts/styles/layout-overide.css'
import Img from '../img/lights.jpg'
import DtuImg from '../img/dtu.png'
import CseImg from '../img/cse.jpg'
import FondenImg from '../img/fonden.png'
import TicketButlerImg from '../img/ticketbutler.png'
import TinyRhinoImg from '../img/tiny-rhino.png'
import IconTeaser from '../img/icon-teaser.png'
import Features1 from '../img/features1.png'
import Features2 from '../img/features2.png'
import Features3 from '../img/features3.png'

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
    Width: '100%',
    height: 'auto',
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
    marginTop: '60px',
    marginBottom: '40px',
    borderTopLeftRadius: '0',
    borderBottomLeftRadius: '0',
    fontSize: '15px',
    border: '1px solid #ff4a6e',
  },

  linkToFeatures: {
    textTransform: 'uppercase',
    color: '#fff',
    textDecoration: 'none',
    letterSpacing: '2px',
    fontWeight: '100',
  },

  partnerLogosDiv: {
    display: 'flex',
    background: '#fff',
    zIndex: '1',
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
    fontSize: '30px',
    letterSpacing: '3px',
    lineHeight: '1.2em',
    margin: '.25em 0',
    color: '#ff4a6e',
    fontWeight: '100',
  },
  pTeaser: {
    lineHeight: '30px',
    letterSpacing: '2px',
    marginTop: '16px',
    fontSize: '16px',
    color: '#333',
    fontWeight: '100',
  },
  sectionTeaser: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    overflow: 'hidden',
    background: '#f7f7f7',
    padding: '7em 6%',
    position: 'relative',
  },
  divTeaserDetails: {
    maxWidth: '50%',
    minWidth: '33%',
    padding: '0 10px',
  },
  iconTeaser: {
    height: '200px',
    marginRight: '200px',
  },
  featuresSection: {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr 1fr',
    textAlign: 'center',

    padding: '100px 2vw',
  },
  featuresDiv: {
    margin: '10px auto',
    padding: '0 2vw',
  },
  featuresImg: {
    width: '30%',
  },
  h4Features: {
    textTransform: 'uppercase',
    fontSize: '21px',
    lineHeight: '38px',
    fontWeight: '500',
    letterSpacing: '2px',
  },
  pFeatures: {
    fontSize: '16px',
    lineHeight: '24.64px',
    fontWeight: '100',
    letterSpacing: '2px',
    textAlign: 'justify',
    margin: '10px',
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

      {/* CREATE EVENT */}
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
      <div>
        <button style={styles.videoButton} className="cta" id="see_video">
          see video
        </button>
      </div>
      <div>
        <a style={styles.linkToFeatures} href="features">
          see how easy it is
        </a>
      </div>
    </section>

    {/* PARTNERS */}
    <div style={styles.partnerLogosDiv}>
      <img style={styles.partnerLogosImg} src={TicketButlerImg} />
      <img style={styles.partnerLogosImg} src={TinyRhinoImg} />
      <img style={styles.partnerLogosImg} src={DtuImg} />
      <img style={styles.partnerLogosImg} src={FondenImg} />
      <img style={styles.partnerLogosImg} src={CseImg} />
    </div>

    {/* TEASER */}
    <section style={styles.sectionTeaser} id="teaser">
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
        <img style={styles.iconTeaser} src={IconTeaser} alt="iconTeaser" />
      </div>
    </section>

    {/* FEATURES */}
    <section id="features" style={styles.featuresSection}>
      <div style={styles.featuresDiv}>
        <img src={Features1} style={styles.featuresImg} alt="features1" />

        <h4 style={styles.h4Features}> 1. Receive payments in 50 seconds</h4>
        <p style={styles.pFeatures}>
          Tell us your <strong>event name, date, ticket types and price</strong>{' '}
          and immediately start receiving money and collect signups from your
          attendees via a unique link. Optionally add more ticket types to
          accomodate for tickets at different prices.
        </p>
      </div>
      <div style={styles.featuresDiv}>
        <img src={Features2} style={styles.featuresImg} alt="features2" />
        <h4 style={styles.h4Features}>2. Spread the word about your event</h4>
        <p style={styles.pFeatures}>
          Your attendees signup on a <strong>unique page for the event</strong>{' '}
          in a matter of seconds and pay with <strong>MobilePay</strong> or
          credit card (if there is an admission fee). Share the link on your{' '}
          <strong>Facebook</strong> event, Facebook group or integrate the
          ticket sale directly in your website. Meanwhile,{' '}
          <strong>track the signups</strong> and update event details at anytime
          via your personal dashboard.
        </p>
      </div>
      <div style={styles.featuresDiv}>
        <img src={Features3} style={styles.featuresImg} alt="features3" />
        <h4 style={styles.h4Features}>
          3. Maintain overview and receive money
        </h4>
        <p style={styles.pFeatures}>
          On the day you'll have a complete list of all attendees who you can{' '}
          <strong>check in on a computer, tablet or smartphone</strong>. The
          attendees have received the ticket via email, which can be printed or
          displayed directly from a smartphone. After the event, you’ll
          automatically receive an <strong>overview of the ticket sales</strong>{' '}
          and the money deposited to your bank account.
        </p>
      </div>
    </section>
  </div>
)

export default IndexPage

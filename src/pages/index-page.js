import React from 'react'
import Link from 'gatsby-link'
import '../layouts/styles/layout-overide.css'
import Img from '../img/lights.jpg'

let styles = {
  span: {
    display: 'block',
    margin: '1.1em 0',
    fontSize: '1.4em',
    lineHeight: '1.4em',
    textAlign: 'center',
  },
  h1: {
    fontWeight: '700',
    color: '#ff4a6e',
    textShadow: '1px 1px 2px rgba(0,0,0,.3)',
    textAlign: 'center',
    fontSize: '2.5em',
    lineHeight: '1.5em',
    letterSpacing: '3px',
    fontFamily: 'Quicksand, sans-serif',
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
}

const IndexPage = () => (
  <div>
    <img src={Img} alt="background" style={styles.img} />
    <h1 style={styles.h1}>It's never been easier to manage events</h1>
    <span style={styles.span}>Free to use for the organizer</span>
    <span style={styles.span}>Ultra low fees</span>
    <span style={styles.span}>Ready to receive payments in seconds</span>
    <span style={styles.span}>Integrate for free on your website</span>
  </div>
)

export default IndexPage

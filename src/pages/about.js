import React from 'react'
import Link from 'gatsby-link'

let styles = {
  section: {
    padding: ' 125px 6%',

    overflow: 'hidden',
    background: '#fff',
    color: '#333',
  },
  title: {
    textAlign: 'center',
    fontWeight: '300',
    fontSize: '45px',
    letterSpacing: '1px',
    display: 'block',
  },
  contentDiv: {
    maxWidth: '672px',
    margin: '0 auto',
  },
  contentText: {
    lineHeight: '32px',
    marginTop: '16px',
    fontSize: '16.5px',
    letterSpacing: '1px',
    fontWeight: '100',
  },
}

const About = () => (
  <div>
    <section style={styles.section}>
      <div style={styles.contentDiv}>
        <h1 style={styles.title}>About</h1>
        <div>
          <p style={styles.contentText}>
            BilletFix offers a ticketing system to students who volunteer a lot
            of time and energy into organising events for their fellow students.
            Our stupidly simple ticketing system is designed to provide these
            volunteering heroes with more time and energy to concentrate on
            their events awesome - instead of managing the hassle of signups and
            payments.
          </p>
          <p style={styles.contentText}>
            We know that students don't have a lot of money to spend - so
            BilletFix is free for organisers. The guests pay the lowest service
            fee possible of 3 kr per paid ticket (only a bottle deposit) - AND
            your guests can pay with MobilePay! Too good to be true, right?
            Well, to keep the servers running and fuel our developers with
            energy drinks we find advertisers to support the project.
          </p>
          <p style={styles.contentText}>
            The founders of BilletFix are to brothers who together are eager to
            make your life as a volunteer organiser easier and your guests
            happier.
          </p>
          <p style={styles.contentText}>
            So forget complicated spreadsheets and time consuming ticket sales.
            Do it all online – simple and for free!
          </p>
        </div>
      </div>
    </section>
  </div>
)

export default About

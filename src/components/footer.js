import React from 'react'
import styled from 'styled-components'
import Link from 'gatsby-link'
import FBIcon from '../img/fb-icon.png'

const FooterSection = styled.footer`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  text-align: center;
  background-color: #f7f7f7;
  width: 100%;

  > ul {
    list-style-type: none;
    text-align: left;
    margin: 0;
    padding: 25px;
    min-width: 300px;
  }
  > ul:nth-child(2) li {
    font-weight: 700;
    font-size: 14px;
    text-align: center;
    line-height: 1.8em;
    letter-spacing: 1px;
  }
  > ul.right-column {
    text-align: right;
  }
  li,
  a.ticketbutler-link,
  span {
    font-weight: 100;
    line-height: 20px;
    font-size: 13px;
    letter-spacing: 1px;
  }
  a {
    color: #ff4a6e;
    text-decoration: none;
  }
  img {
    height: 24px;
    width: 24px;
    display: inline-block;
    vertical-align: middle;
    margin: 0 5px;
  }
`

const Footer = ({}) => (
  <div>
    <FooterSection>
      <ul className="left-column">
        <li> Ticketing delivered by:</li>
        <a
          className="ticketbutler-link"
          href="https://ticketbutler.io"
          target="_blank"
        >
          Ticketbutler
        </a>
        <span> (CVR: 38404687)</span>
      </ul>
      <ul className="middle-column">
        <li>
          <Link to="//">Home</Link>
        </li>
        <li>
          <Link to="/contact/">Contact</Link>
        </li>
        <li>
          <Link to="/privacy-policy/">Privacy Policy</Link>
        </li>
        <li>
          <Link to="//">Terms & Conditions</Link>
        </li>
        <li>
          <img src={FBIcon} alt="fb-icon" />
          <a href="https://www.facebook.com/BilletFix/"> Find us on Facebook</a>
        </li>
      </ul>
      <ul className="right-column">
        <li>BilletFix IVS</li>
        <li>CVR: 37073911</li>
        <li>Porcelænshaven 26 1.</li>
        <li>Frederiksberg 2000</li>
        <li>89 80 12 80</li>
        <li>
          <a href="mailto:info@billetfix.dk">info@billetfix.dk</a>
        </li>
      </ul>
    </FooterSection>
  </div>
)

export default Footer

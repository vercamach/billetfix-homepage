import React from 'react'
import Link from 'gatsby-link'
import Logo from '../img/logox400.png'
import '../layouts/styles/layout-overide.css'

import LinksData from '../__mocks__/nav-links'
import { WindowHelper } from './helpers'

let headerStyles = {
  linkDiv: {
    display: 'block',
    margin: '10px',
    padding: '0',
  },
  link: {
    marginLeft: '16px',
    textDecoration: 'none',

    display: 'inline-block',
    padding: '0 10px',
    fontSize: '13px',
    color: '#f7f7f7',
    transition: 'all 0.5s',
  },
}

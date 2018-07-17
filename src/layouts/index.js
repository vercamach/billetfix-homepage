import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import Link from 'gatsby-link'
import Header from '../components/header'
import Footer from '../components/footer'
import './index.css'
import '../layouts/styles/layout-overide.css'

const Layout = ({ children, data }) => (
  <div>
    <Header siteTitle={'BilletFix'} />

    {children()}
    <Footer />
  </div>
)

Layout.propTypes = {
  children: PropTypes.func,
}

export default Layout

export const query = graphql`
  query SiteTitleQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`

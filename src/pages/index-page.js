import React from 'react'
import Link from 'gatsby-link'
import '../layouts/styles/layout-overide.css'
import Partners from '../components/partners'
import Teaser from '../components/picture-right'
import Features from '../components/features'

import Hero from '../components/hero-section'
import PictureLeft from '../components/picture-left'

const IndexPage = () => (
  <div>
    <Hero />

    <Partners />
    <Teaser />

    <Features />
    <PictureLeft />
  </div>
)

export default IndexPage

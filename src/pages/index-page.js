import React from 'react'
import Link from 'gatsby-link'
import '../layouts/styles/layout-overide.css'
import Partners from '../components/partners'
import PictureRight from '../components/picture-right'
import Features from '../components/features'
import SecondRight from '../components/pictureRight'
import { Layout } from '../layouts/index'
import Hero from '../components/hero-section'
import PictureLeft from '../components/picture-left'
import TicketPrice from '../components/ticket-price'

const IndexPage = () => (
  <Layout staticHeader={false}>
    <Hero />

    <Partners />

    <PictureRight />
    <Features />
    <PictureLeft />
    <TicketPrice />
  </Layout>
)

export default IndexPage

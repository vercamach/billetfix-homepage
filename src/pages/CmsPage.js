import React from 'react'
import Link from 'gatsby-link'
import '../layouts/styles/layout-overide.css'
import Partners from '../components/partners'
import PictureRight from '../components/picture-right'
import Features from '../components/features'
import CreateEvent from '../components/create-event'
import { Layout } from '../layouts/index'
import HeroSection from '../components/hero-section'
import PictureLeft from '../components/picture-left'
import ContactForm from '../components/contact'
import PricingCards from '../components/ticket-price'
import Footer from '../components/footer'
import SMIcons from '../components/soc-med-icons'
import Article from '../components/article'
import Legal from '../components/legal'
import QNA from '../components/qna'

const components = [
  { Component: Partners, id: 'partners' },
  { Component: PictureRight, id: 'picture_right' },
  { Component: Features, id: 'features' },
  { Component: CreateEvent, id: 'create_event' },
  { Component: HeroSection, id: 'hero_section' },
  { Component: PictureLeft, id: 'picture_left' },
  { Component: ContactForm, id: 'contact_form' },
  { Component: PricingCards, id: 'pricing_cards' },
  { Component: SMIcons, id: 'soc_med_icons' },
  { Component: Article, id: 'article' },
  { Component: Legal, id: 'legal' },
  { Component: QNA, id: 'qna' },
  { Component: Footer, id: 'footer' },
]
const CmsPage = ({ pathContext }) => (
  <Layout {...pathContext.layout}>
    {pathContext.sections &&
      pathContext.sections.map((section, i) => {
        const Component = components.find(({ id }) => id === section.type)
          .Component
        return <Component key={i} {...section} />
      })}
  </Layout>
)

export default CmsPage

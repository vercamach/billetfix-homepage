import React from 'react'

import Features1 from '../img/features1.png'
import Features2 from '../img/features2.png'
import Features3 from '../img/features3.png'
import { WindowHelper } from '../components/helpers'

import FeaturesData from '../__mocks__/features'

const Features = () => {
  return (
    <WindowHelper>
      {window => (
        <section
          id="features"
          style={{
            display: 'grid',
            textAlign: 'center',
            padding: '100px 2vw',

            ...(window.width > 980
              ? {
                  gridTemplateColumns: '1fr 1fr 1fr',
                }
              : {
                  gridTemplateColumns: '1fr',
                }),
          }}
        >
          {FeaturesData.map(feature => (
            <div
              style={{
                margin: '10px auto',
                padding: '0 2vw',
              }}
            >
              <img
                src={feature.imgSrc}
                style={{ width: '30%' }}
                alt="features1"
              />

              <h4
                style={{
                  textTransform: 'uppercase',
                  fontSize: '21px',
                  lineHeight: '38px',
                  fontWeight: '500',
                  letterSpacing: '2px',
                  marginTop: '19px',
                }}
              >
                {feature.title}
              </h4>
              <p
                style={{
                  fontSize: '16px',
                  lineHeight: '24.64px',
                  fontWeight: '100',
                  letterSpacing: '2px',
                  textAlign: 'justify',
                  margin: '10px',
                }}
              >
                {feature.text}
              </p>
            </div>
          ))}
        </section>
      )}
    </WindowHelper>
  )
}
export default Features

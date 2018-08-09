import React from 'react'

import { WindowHelper } from '../components/helpers'

import FeaturesData from '../__mocks__/features'

const Features = () => {
  return (
    <WindowHelper>
      {window => (
        <section
          id="features"
          style={{
            flexFlow: 'row nowrap',
            justyfy: 'space-between',
            alignItems: 'flex-start',
            textAlign: 'center',
            padding: '100px 2vw',

            ...(window.width > 980
              ? {
                  display: 'flex',
                }
              : {
                  display: 'block',
                }),
          }}
        >
          {FeaturesData.map(feature => (
            <div
              style={{
                margin: '0 auto',
                padding: '0 1vw',

                ...(window.width > 980
                  ? {
                      maxWidth: '30%',
                      padding: '0 1vw',
                    }
                  : {
                      maxWidth: '100%',
                      padding: '20px 2%',
                    }),
              }}
            >
              <img
                src={feature.imgSrc}
                style={{ width: '7.5em' }}
                alt="features1"
              />

              <h4
                style={{
                  textTransform: 'uppercase',

                  fontWeight: '500',
                  letterSpacing: '2px',
                  marginTop: '19px',

                  ...(window.width > 980
                    ? {
                        fontSize: '21px',
                        lineHeight: '38px',
                      }
                    : {
                        fontSize: '20px',
                        lineHeight: '28px',
                      }),
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
                dangerouslySetInnerHTML={{ __html: feature.text }}
              />
            </div>
          ))}
        </section>
      )}
    </WindowHelper>
  )
}
export default Features

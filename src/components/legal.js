import React from 'react'
import { WindowHelper } from '../components/helpers'
import { Layout } from '../layouts/index'

import mock from '../__mocks__/terms-conditions'

const PrivacyPolicy = () => {
  return (
    <Layout>
      <WindowHelper>
        {window => (
          <section
            style={{
              padding: '100px 6%',
              overflow: 'hidden',
            }}
          >
            <h1
              style={{
                fontWeight: '200',
                textAlign: 'center',
                fontSize: '35px',
                lineHeight: '1.5em',
                letterSpacing: '1px',
              }}
            >
              {mock.heading}
            </h1>
            <div dangerouslySetInnerHTML={{ __html: mock.markup }} />
          </section>
        )}
      </WindowHelper>
    </Layout>
  )
}

export default PrivacyPolicy

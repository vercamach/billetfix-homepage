import React from 'react'
import { Layout } from '../layouts/index'
import { WindowHelper } from '../components/helpers'

const Contact = () => (
  <Layout>
    <WindowHelper>
      {window => (
        <section
          style={{
            textAlign: 'center',
            padding: '100px 0',
            background: '#fff',
            color: '#333',
          }}
        >
          <form>
            <h1
              style={{
                fontWeight: '200',
                fontSize: '3em',
                lineHeight: '1.5em',
                letterSpacing: '2px',
              }}
            >
              Contact
            </h1>
            <label
              for="send-address"
              style={{
                textAlign: 'center',
                display: 'block',
                marginTop: '25px',
                fontWeight: '100',
                color: '#333',
              }}
            >
              Your email please
            </label>
            <input
              required
              id="send-address"
              maxLength="256"
              name="send address"
              type="email"
              style={{
                display: 'block',
                margin: '10px auto',
                maxWidth: '300px',
                width: '300px',
                border: '1px solid rgba(255,74,110,.5)',
                borderRadius: '3px',
                padding: '10px 15px',
                outline: '#000',
                fontSize: 'inherit',
              }}
            />
            <label
              for="message"
              style={{
                fontWeight: '100',
                textAlign: 'center',
                display: 'block',
                marginTop: '25px',
                color: '#333',
              }}
            >
              Message
            </label>
            <textarea
              required
              id="message"
              rows="10"
              style={{
                outline: 'none',
                width: '90%',
                maxWidth: ' 400px',
                fontFamily: 'inherit',
                fontSize: 'inherit',
                margin: '10px',
                lineHeight: 'inherit',
                border: '1px solid rgba(255,74,110,.5)',
                borderRadius: '3px',
                padding: '.5em .75em',
              }}
            />
            <button
              type="submit"
              style={{
                letterSpacing: '2px',
                borderColor: '#ff4a6e',
                display: 'block',
                background: '#ff4a6e',
                color: '#fff',
                borderRadius: '2px',
                margin: ' auto',
                cursor: 'pointer',
                padding: '10px 25px',
                textAlign: 'center',
                fontWeight: '300',
                fontSize: '13px',
                border: '1px solid #ff4a6e',

                transition: 'all .15s',
              }}
            >
              SEND!
            </button>
          </form>
        </section>
      )}
    </WindowHelper>
  </Layout>
)

export default Contact

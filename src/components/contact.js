import React from 'react'
import { Layout } from '../layouts/index'
import { WindowHelper } from '../components/helpers'
import 'font-awesome/css/font-awesome.min.css'

const Contact = () => (
  <Layout>
    <WindowHelper>
      {window => {
        let style = {
          icons: {
            display: 'inline',
            float: 'left',
            fontSize: '20px',
          },
          contactTitles: {
            display: 'block',
            textAlign: 'center',
            width: '250px',
            textAlign: 'left',
            fontSize: '25px',
            fontWeight: '400',
            marginBottom: '10px',
            ...(window.width > 980
              ? { marginLeft: '50px' }
              : { marginLeft: '30px', fontSize: '20px' }),
          },
          contactText: {
            letterSpacing: '1px',
            display: 'inherit',
            textAlign: 'left',
            marginLeft: '30px',
            marginTop: '0px',
            marginBottom: '0px',
            width: '250px',
            fontWeight: '300',
            ...(window.width > 980
              ? { fontSize: '18px' }
              : { fontSize: '16px' }),
          },
        }

        return (
          <section
            style={{
              clear: 'both',
              textAlign: 'center',
              padding: '100px 0',
              background: '#fff',
              color: '#333',
            }}
          >
            <div
              style={{
                ...(window.width > 980
                  ? {
                      width: '50%',
                      float: 'left',
                    }
                  : {
                      display: 'block',
                      width: '100%',
                      paddingBottom: '70px',
                    }),
              }}
            >
              <form>
                <h1
                  style={{
                    fontWeight: '200',

                    lineHeight: '1.5em',
                    letterSpacing: '3px',
                    ...(window.width > 980
                      ? {
                          fontSize: '50px',
                        }
                      : {
                          fontSize: '28px',
                        }),
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
            </div>
            <div
              style={{
                backgroundColor: 'rgb(255, 74, 110)',

                ...(window.width > 980
                  ? {
                      width: '50%',
                      float: 'right',
                      height: '660px',
                      padding: '110px',
                    }
                  : {
                      display: 'block',
                      width: '100%',
                      padding: '90px 40px',
                      height: '550px',
                    }),
              }}
            >
              <div>
                <div
                  style={{
                    ...(window.width > 980
                      ? { marginLeft: '40px' }
                      : { marginLeft: '0' }),
                  }}
                >
                  <div
                    style={{
                      display: 'block',

                      ...(window.width > 980
                        ? {
                            margin: '30px auto',
                            width: '340px',
                          }
                        : {
                            margin: '0 18px',
                          }),
                    }}
                  >
                    <i className="fa fa-map-marker" style={style.icons} />
                    <p style={style.contactTitles}>Address </p>
                    <p style={style.contactText} id="address">
                      Porcelænshaven 26, 2000
                    </p>
                    <p style={style.contactText}>Frederiksberg 2000</p>
                  </div>
                  <div
                    style={{
                      display: 'block',

                      ...(window.width > 980
                        ? {
                            width: '340px',
                            margin: '50px auto',
                          }
                        : { margin: '50px 18px' }),
                    }}
                  >
                    <i className="fa fa-phone" style={style.icons} />
                    <p style={style.contactTitles}>Telephon</p>
                    <p style={style.contactText}> +45 89 80 12 80</p>
                  </div>
                  <div
                    style={{
                      display: 'block',

                      ...(window.width > 980
                        ? {
                            margin: '50px auto',
                            width: '340px',
                          }
                        : { margin: '50px 18px' }),
                    }}
                  >
                    <i className="fa fa-envelope" style={style.icons} />
                    <p style={style.contactTitles}>E-mail</p>
                    <p style={style.contactText} id="support">
                      info@billetfix.dk
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>
        )
      }}
    </WindowHelper>
  </Layout>
)

export default Contact

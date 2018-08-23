import React from 'react'
import { WindowHelper } from '../components/helpers'
import faqs from '../__mocks__/faq'
import { Layout } from '../layouts/index'
const styles = {
  caption: {
    fontSize: '30px',
    lineHeight: '44px',
    fontWeight: '100',
    color: '#ff4a6e',
    letterSpacing: '1.5px',
    margin: '.25em 0',
  },
}

const faq = () => {
  return (
    <Layout>
      <WindowHelper>
        {window => (
          <section
            style={{
              overflow: 'hidden',

              ...(window.width > 980
                ? {
                    padding: '125px 6%',
                  }
                : {
                    padding: '80px 6%',
                  }),
            }}
          >
            <div
              style={{
                maxWidth: '671px',
                margin: '0 auto',
              }}
            >
              <h1
                style={{
                  textAlign: 'center',
                  fontWeight: '300',
                  letterSpacing: '1px',
                  textTransform: 'uppercase',
                  marginBottom: '36px',

                  marginTop: '32px',

                  ...(window.width > 460
                    ? {
                        fontSize: '45px',
                      }
                    : {
                        fontSize: '28px',
                      }),
                }}
              >
                FAQ
              </h1>
              <h3 style={styles.caption}>Organizer</h3>
              <ul
                style={{
                  margin: '0',
                }}
              >
                {faqs.filter(({ type }) => type === 'organiser').map(faq => (
                  <li>
                    <a
                      href={'#' + faq.id}
                      style={{
                        color: '#ff4a6e',
                        textDecoration: 'none',
                        letterSpacing: '1px',
                        fontWeight: '100',
                        fontSize: '15px',
                      }}
                    >
                      {faq.question}
                    </a>
                  </li>
                ))}
              </ul>
              <h3 style={styles.caption}>Guest</h3>
              <ul style={{ margin: '0' }}>
                {faqs.filter(({ type }) => type === 'guest').map(faq => {
                  if (window.width > 400) {
                    return (
                      <li>
                        <a
                          href={'#' + faq.id}
                          style={{
                            ...(window.width > 400
                              ? {
                                  color: '#ff4a6e',
                                  textDecoration: 'none',
                                  letterSpacing: '1px',
                                  lineHeight: '22px',
                                  fontWeight: '100',
                                  fontSize: '15px',
                                }
                              : { color: 'green' }),
                          }}
                        >
                          {faq.question}
                        </a>
                      </li>
                    )
                  } else {
                    return <span>This is the other markup</span>
                  }
                })}
              </ul>
              <h3 style={styles.caption}>Organizer</h3>
              <ul>
                {faqs.filter(({ type }) => type === 'organiser').map(faq => (
                  <li>
                    <h4
                      id={faq.id + 1}
                      style={{
                        fontSize: '18px',
                        textTransform: 'uppercase',
                        letterSpacing: '1px',
                        fontWeight: '100',
                        lineHeight: '1.4em',
                        marginTop: '25px',
                      }}
                    >
                      {faq.question}
                    </h4>
                    <p
                      style={{
                        fontWeight: '100',
                        fontSize: '15px',
                        lineHeight: '22px',
                        letterSpacing: '1px',
                      }}
                    >
                      {faq.answer}
                    </p>
                  </li>
                ))}
              </ul>
              <h3 style={styles.caption}> Guest</h3>

              <ul>
                {faqs.filter(({ type }) => type === 'guest').map(faq => (
                  <li>
                    <h4
                      id={faq.id + 1}
                      style={{
                        fontSize: '18px',
                        textTransform: 'uppercase',
                        letterSpacing: '1px',
                        fontWeight: '100',
                        lineHeight: '1.4em',
                        marginTop: '25px',
                      }}
                    >
                      {faq.question}
                    </h4>
                    <p
                      style={{
                        fontWeight: '100',
                        fontSize: '15px',
                        lineHeight: '22px',
                        letterSpacing: '1px',
                      }}
                    >
                      {faq.answer}
                    </p>
                  </li>
                ))}
              </ul>
            </div>
          </section>
        )}
      </WindowHelper>
    </Layout>
  )
}

export default faq

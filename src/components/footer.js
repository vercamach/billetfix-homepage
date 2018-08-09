import React from 'react'
import styled from 'styled-components'
import Link from 'gatsby-link'
import { WindowHelper } from '../components/helpers'
import FooterData from '../__mocks__/footer'

const Footer = () => {
  return (
    <WindowHelper>
      {window => (
        <footer
          style={{
            display: 'flex',
            flexFlow: 'row wrap',
            textAlign: 'center',
            justifyContent: 'space-between',
            backgroundColor: ' #f7f7f7',
            width: '100%',
          }}
        >
          {FooterData.filter(({ type }) => type === 'leftSection').map(data => (
            <div
              style={{
                fontWeight: '100',
                lineHeight: '20px',
                fontSize: '13px',
                letterSpacing: '1px',
                textAlign: 'left',
                padding: '25px',

                ...(window.width > 980
                  ? {}
                  : {
                      display: 'block',
                      width: '100%',
                      textAlign: 'center',
                    }),
              }}
            >
              <p style={{ margin: '0' }}> {data.line1}</p>
              <a
                style={{ color: '#ff4a6e', textDecoration: 'none' }}
                href={data.linkTicketbutler}
                target="_blank"
              >
                {data.linkText}
              </a>
              <span> {data.cvr}</span>
            </div>
          ))}

          <div
            style={{
              fontWeight: '700',
              fontSize: '14px',
              textAlign: 'center',
              lineHeight: '1.8em',
              letterSpacing: '1px',
              ...(window.width > 980
                ? {}
                : {
                    display: 'block',
                    width: '100%',
                    textAlign: 'center',
                  }),
            }}
          >
            <ul
              style={{
                listStyleType: 'none',
                listStyleType: 'none',
                margin: '0',
                padding: '25px',
                minWidth: '300px',
              }}
              className="middle-column"
            >
              {FooterData.filter(({ type }) => type === 'centerSection').map(
                data => (
                  <li>
                    <a
                      style={{
                        color: '#ff4a6e',
                        textDecoration: 'none',
                      }}
                      href={data.link}
                    >
                      {data.text}
                    </a>
                  </li>
                )
              )}
              {FooterData.filter(({ type }) => type === 'icon').map(data => (
                <li>
                  <img
                    style={{
                      height: '24px',
                      width: '24px',
                      display: 'inline-block',
                      verticalAlign: 'middle',
                      margin: '0 5px',
                    }}
                    src={data.src}
                    alt={data.alt}
                  />
                  <a
                    style={{
                      color: '#ff4a6e',
                      textDecoration: 'none',
                    }}
                    href={data.link}
                  >
                    {data.linkText}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div
            style={{
              textAlign: 'right',
              listStyleType: 'none',
              margin: '0',
              padding: '25px',
              minWidth: '300px',
              ...(window.width > 980
                ? {}
                : {
                    display: 'block',
                    width: '100%',
                    textAlign: 'center',
                  }),
            }}
            className="right-column"
          >
            {FooterData.filter(({ type }) => type === 'rightSection').map(
              data => (
                <p
                  style={{
                    margin: '0',
                    fontWeight: '100',
                    lineHeight: '20px',
                    fontSize: '13px',
                    letterSpacing: '1px',
                  }}
                >
                  {data.text}
                </p>
              )
            )}

            {FooterData.filter(({ type }) => type === 'rightSectionMail').map(
              data => (
                <p
                  style={{
                    margin: '0',
                    fontWeight: '100',
                    lineHeight: '20px',
                    fontSize: '13px',
                    letterSpacing: '1px',
                  }}
                >
                  <a style={{ color: '#ff4a6e' }} href={data.href}>
                    {data.text}
                  </a>
                </p>
              )
            )}
          </div>
        </footer>
      )}
    </WindowHelper>
  )
}

export default Footer

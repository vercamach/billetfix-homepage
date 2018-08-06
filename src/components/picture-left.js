import React from 'react'
import PaymentIcon from '../img/payment.png'

const pictureLeft = () => (
  <section
    style={{
      display: 'flex',
      flexDirection: 'row-reverse',
      alignItems: 'center',
      boxPack: 'justify',
      padding: '112px 83px',
      background: '#f7f7f7',
    }}
  >
    <div style={{ padding: '15px' }}>
      <h3
        style={{
          color: '#ff4a6e',
          fontSize: '30px',
          lineHeight: '40px',
          margin: '.25em 0',
          fontWeight: '100',
          letterSpacing: '2px',
        }}
      >
        Guests can pay with MobilePay or their credit card
      </h3>
      <p
        style={{
          fontWeight: '500',
          padding: '15px 0',
          textAlign: 'right',
          fontSize: '18px',
          lineHeight: '17px',
        }}
      >
        50% of our users pay with MobilePay.
      </p>
      <p
        style={{
          lineHeight: '20px',
          marginTop: '16px',
          fontSize: '16px',
          fontWeight: '100',
          letterSpacing: '1px',
          textAlign: 'right',
        }}
      >
        After the event has competed, your money is deposited directly into your
        bank account.
      </p>
    </div>

    <img
      style={{
        width: '19%',
        marginRight: '137px',
      }}
      src={PaymentIcon}
      alt="payment icon"
    />
  </section>
)

export default pictureLeft

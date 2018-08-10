import React from 'react'
import Link from 'gatsby-link'
import styled from 'styled-components'
import Smiley from '../img/smiley.png'
import Calendar from '../img/calendar.png'
import Ticket from '../img/ticket.png'
import Trash from '../img/trash.png'
import { WindowHelper } from '../components/helpers'
import AddButton from '../img/plus-button.png'

let styles = {
  label: {
    display: 'block',
    fontSize: '1.2em',
    verticalAlign: 'bottom',
    margin: '20px 0',
    position: 'relative',
    fontWeight: '100',
  },
  input: {
    display: 'block',
    margin: '10px 0',

    fontSize: 'medium',
    padding: '11px 10px',
    fontWeight: '100',
    border: '1px solid rgba(255, 74, 110, 0.5)',
    borderRadius: '3px',
    letterLetterspacing: '1px',
    ...(window.width > 450
      ? {
          width: '300px',
        }
      : {
          width: '275px',
        }),
  },
}

const NewTicket = ({ ticket, i, onRemove }) => (
  <WindowHelper>
    {window => (
      <div
        style={{
          border: ' 1px solid #ff4a6e',
          borderRadius: '3px',
          margin: '0 20px 20px 0',
          padding: '20px',

          height: '368px',
          overflow: 'hidden',
          display: 'flex',
          ...(window.width > 980
            ? {
                width: '342px',
              }
            : {
                width: '315px',
              }),
        }}
      >
        <div className="tickets">
          <div className="ticket dynamic-form row1">
            <label style={styles.label} className="type-label">
              Ticket Name
              <input
                style={styles.input}
                required=""
                type="text"
                id="id_form-0-title"
                name="form-0-title"
                placeholder="Entry / Standing / Gold / VIP"
                maxLength="32"
              />
            </label>

            <label
              style={styles.label}
              className="type-label"
              htmlFor="id_price"
            >
              Price
              <input
                style={styles.input}
                required=""
                type="number"
                id="id_price"
                name="form-0-price"
                min="0"
                placeholder="kr - or '0' for FREE"
                step="1"
              />
            </label>

            <label
              style={styles.label}
              className="type-label"
              htmlFor="id_amount"
            >
              Number of tickets
              <input
                style={styles.input}
                required=""
                type="number"
                min="1"
                id="id_amount"
                name="form-0-amount"
                placeholder="Pcs"
              />
            </label>
            <a
              id="delete-ticket"
              className="delete-row"
              href="javascript:void(0)"
              onClick={() => onRemove(i)}
            >
              <img
                style={{
                  height: ' 30px',
                  width: 'auto',
                  float: 'right',
                }}
                className="trash"
                src={Trash}
                alt="trash"
              />
            </a>
          </div>
        </div>
      </div>
    )}
  </WindowHelper>
)

function deleteTick(e) {
  {
    console.log(e.target)
  }
}

export default NewTicket

import React from 'react'
import Link from 'gatsby-link'
import styled from 'styled-components'
import Smiley from '../img/smiley.png'
import Calendar from '../img/calendar.png'
import Ticket from '../img/ticket.png'
import Trash from '../img/trash.png'
import AddButton from '../img/plus-button.png'

const Icon = styled.img`
  height: 35px;
  width: auto;

  margin: 0 5px;
`
const NewTicketWrapper = styled.div`
  display: flex;
`
const TicketBox = styled.div`
  border: 1px solid #ff4a6e;
  border-radius: 3px;
  margin: 0 20px 20px 0;
  padding: 20px;
  width: 342px;
  height: 368px;
  overflow: hidden;
  display: flex;
  > a img {
    width: 50px;
    height: auto;
  }
`
const DeleteIcon = styled.img`
  height: 30px;
  width: auto;
  float: right;
`

const TicketTypeLabel = styled.label`
  display: block;
  font-size: 1.2em;
  vertical-align: bottom;
  margin: 20px 0;
  position: relative;
  font-weight: 100;
`
const Input = styled.input`
  display: block;
  margin: 10px 0;
  width: 300px;
  font-size: medium;
  padding: 11px 10px;
  font-weight: 100;
  border: 1px solid rgba(255, 74, 110, 0.5);
  border-radius: 3px;
  letter-letterspacing: 1px;
`

const NewTicket = ({}) => (
  <div>
    <TicketBox className="tickets">
      <div className="ticket dynamic-form row1">
        <TicketTypeLabel className="type-label">
          Ticket Name
          <Input
            required=""
            type="text"
            id="id_form-0-title"
            name="form-0-title"
            placeholder="Entry / Standing / Gold / VIP"
            maxlength="32"
          />
        </TicketTypeLabel>

        <TicketTypeLabel className="type-label" htmlFor="id_price">
          Price
          <Input
            required=""
            type="number"
            id="id_price"
            name="form-0-price"
            min="0"
            placeholder="kr - or '0' for FREE"
            step="1"
          />
        </TicketTypeLabel>

        <TicketTypeLabel className="type-label" htmlFor="id_amount">
          Number of tickets
          <Input
            required=""
            type="number"
            min="1"
            id="id_amount"
            name="form-0-amount"
            placeholder="Pcs"
          />
        </TicketTypeLabel>
        <a className="delete-row" href="javascript:void(0)">
          <DeleteIcon className="trash" src={Trash} alt="trash" />
        </a>
      </div>
    </TicketBox>
  </div>
)

export default NewTicket

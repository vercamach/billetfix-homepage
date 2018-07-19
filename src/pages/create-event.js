import React from 'react'
import Link from 'gatsby-link'
import styled from 'styled-components'
import Smiley from '../img/smiley.png'
import Calendar from '../img/calendar.png'
import Ticket from '../img/ticket.png'
import Trash from '../img/trash.png'
import AddButton from '../img/plus-button.png'
import NewTicket from '../components/ticket.js'
const Section = styled.section`
  padding: 125px 6%;
  overflow: hidden;
`

const Details = styled.div`
  display: flex;
  flex-flow: row wrap;
  margin-right: 40px;
  > label {
    min-width: 300px;
    margin-right: 40px;
    display: block;
    font-size: 1.2em;
    vertical-align: bottom;
    margin-marginBottom: : 15px;
    font-weight:100;
    letter-spacing: 1px;
  }
  label.marg-left{
    margin-left: 30px;
  }
  > label#start-time {
    margin-top: 21px;
  }
`
const Icon = styled.img`
  height: 35px;
  width: auto;

  margin: 0 5px;
`
let wrapperStyle = {
  display: 'grid',
  gridTemplateColumns: '1fr 1fr 1fr',
}

const TicketBox = styled.div`
  border: 1px solid #ff4a6e;
  border-radius: 3px;
  margin: 0 20px 20px 0;
  padding: 20px;
  width: 342px;
  height: 368px;
  overflow: hidden;
  display: flex;
  > a {
    margin-top: 65px;
    text-decoration: none;
  }
  a p {
    margin-left: 68px;
    font-size: 1.2em;
    color: #ff4a6e;
    font-weight: 100;
  }
  > a img {
    width: 77px;
    height: auto;
    margin-left: 110px;
    margin-top: 15px;
  }
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
let wrapper = document.getElementById('wrapper')

const CreateEvent = () => (
  <Section>
    <form action="." method="POST" acceptCharset="utf-8" id="event-form">
      <Input
        type="hidden"
        name="csrfmiddlewaretoken"
        value="ntJg983VNqfcurgSD3O2XwFn556nWKSF3EPMxjTgIBZWDtCTUftSVKvpViqKjQzP"
      />
      <Details className="details">
        <label htmlFor="id_event_title">
          <Icon src={Smiley} alt="smiley" />
          Event Title
          <Input
            required=""
            id="id_event_title"
            type="text"
            maxlength="128"
            name="title"
            placeholder="Go on..."
            htmlFor="id_title"
            value=""
            className=""
          />
        </label>
        <label className="marg-left" htmlFor="id_start_date">
          <Icon src={Calendar} alt="calendar" />
          Event date
          <Input
            required=""
            id="id_start_date"
            className="jQdatePicker"
            name="start_date"
            type="date"
          />
        </label>
        <label className="marg-left" id="start-time" htmlFor="id_start_time">
          Event time
          <Input
            required=""
            id="id_start_time"
            className="jQtimePicker"
            name="start_time"
            type="time"
          />
        </label>
      </Details>
      <TicketTypeLabel>
        {' '}
        <Icon src={Ticket} alt="ticket" /> Create Ticket
      </TicketTypeLabel>
      <div id="wrapper" className="ticket-types" style={wrapperStyle}>
        <NewTicket />

        <TicketBox>
          <a className="add-row" href="javascript:void(0)" onClick={addTicket}>
            <p>Add new ticket type</p>
            <img className="addButton" src={AddButton} alt="add-button" />
          </a>
        </TicketBox>
      </div>
    </form>
  </Section>
)

function addTicket() {
  console.log('hi mom')
  console.log(wrapper)
  console.log(NewTicket)
}
export default CreateEvent

import React from 'react'
import DateTimePicker from 'date-time-picker-react'
import { Smiley } from '../components/icons/smileyIcon'
import { CalendarIcon } from '../components/icons/calendarIcon'
import Calendar from '../img/calendar.png'
import Ticket from '../img/ticket.png'
import Trash from '../img/trash.png'
import AddButton from '../img/plus-button.png'
import NewTicket from '../components/ticket.js'
import { Layout } from '../layouts/index'
import { WindowHelper } from '../components/helpers'
import { Button } from '../components/elements/elements'
import { TicketIcon } from '../components/icons/ticketIcon'

class CreateEvent extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      tickets: [{ NewTicket }],
    }
  }

  render() {
    return (
      <Layout>
        <WindowHelper>
          {window => (
            <section
              style={{
                padding: '125px 6%',
                overflow: 'hidden',
              }}
            >
              <form
                action="."
                method="POST"
                acceptCharset="utf-8"
                id="event-form"
              >
                <div
                  style={{
                    display: 'flex',
                    flexFlow: 'row wrap',
                    marginRght: '40px',
                  }}
                  className="details"
                >
                  <label
                    style={{
                      minWidth: '300px',
                      marginRight: '40px',
                      display: 'block',
                      fontSize: '1.2em',
                      verticalAlign: 'bottom',
                      marginMarginBottom: '15px',
                      fontWeight: '100',
                      letterSpacing: '1px',
                    }}
                  >
                    <Smiley />
                    Event Title
                    <input
                      style={{
                        display: 'block',
                        margin: '10px 0',
                        width: '300px',
                        fontSize: 'medium',
                        padding: '11px 10px',
                        fontWeight: '100',
                        border: ' 1px solid rgba(255, 74, 110, 0.5)',
                        borderRadius: '3px',
                        letterSpacing: '1px',
                      }}
                      required=""
                      id="id_event_title"
                      type="text"
                      maxLength="128"
                      name="title"
                      placeholder="Go on..."
                      htmlFor="id_title"
                    />
                  </label>
                  <label
                    style={{
                      minWidth: '300px',
                      marginRight: '40px',
                      display: 'block',
                      fontSize: '1.2em',
                      verticalAlign: 'bottom',
                      marginMarginBottom: '15px',

                      fontWeight: '100',
                      letterSpacing: '1px',
                      ...(window.width > 980
                        ? {
                            marginLeft: '30px',
                          }
                        : {
                            marginLeft: '0',
                            marginTop: '15px',
                          }),
                    }}
                    className="marg-left"
                    htmlFor="id_start_date"
                  >
                    <CalendarIcon />
                    Event date
                    <DateTimePicker
                      inputStyle={{
                        margin: '10px 0',
                        width: '300px',
                        fontSize: 'medium',
                        padding: '11px 10px',
                        fontWeight: '100',
                        border: ' 1px solid rgba(255, 74, 110, 0.5)',
                        borderRadius: '3px',
                        letterSpacing: '1px',
                      }}
                      onChange={value => {
                        // do something...
                      }}
                    />
                  </label>
                </div>
                <label
                  style={{
                    display: 'block',
                    fontsize: '1.2em',
                    verticalAlign: 'bottom',
                    margin: '20px 0',
                    position: 'relative',
                    fontWeight: '100',
                  }}
                >
                  <TicketIcon />
                  Create Ticket
                </label>

                <div
                  id="wrapper"
                  className="ticket-types"
                  style={{
                    display: 'grid',

                    ...(window.width > 980
                      ? {
                          gridTemplateColumns: '1fr 1fr 1fr',
                        }
                      : window.width > 450
                        ? {
                            gridTemplateColumns: '1fr 1fr',
                          }
                        : {
                            gridTemplateColumns: '1fr',
                          }),
                  }}
                >
                  {this.state.tickets.map((t, i) => (
                    <NewTicket
                      ticket={t}
                      index={i}
                      onRemove={index => {
                        this.setState(({ tickets }) => ({
                          tickets: tickets.filter((_, index) => index !== i),
                        }))
                      }}
                    />
                  ))}

                  <div
                    style={{
                      border: '1px solid #ff4a6e',
                      borderRadius: '3px',
                      margin: '0 20px 20px 0',
                      padding: '20px',

                      height: ' 368px',
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
                    <a
                      style={{
                        marginTop: '65px',
                        textDecoration: 'none',
                      }}
                      className="add-row"
                      href="javascript:void(0)"
                      onClick={() => {
                        this.setState({ tickets: [...this.state.tickets, {}] })
                        console.log('del')
                      }}
                    >
                      <p
                        style={{
                          marginLeft: '68px',
                          fontsize: '1.2em',
                          color: '#ff4a6e',
                          fontweight: '100',
                        }}
                      >
                        Add new ticket type
                      </p>
                      <img
                        style={{
                          width: '77px',
                          height: 'auto',
                          marginLeft: '110px',
                          marginTop: '15px',
                        }}
                        className="addButton"
                        src={AddButton}
                        alt="add-button"
                      />
                    </a>
                  </div>
                </div>

                <p className="tcs" style={{ textAlign: 'center' }}>
                  By clicking "Create" you're agreeing to
                  <a
                    href="/en/tandc/#tandc-organiser"
                    target="_blank"
                    style={{ color: '#ff4a6e', textDecoration: 'none' }}
                  >
                    <span> the T&amp;C's</span>
                  </a>.
                </p>
                <Button style={{ display: 'block', margin: '0 auto' }}>
                  create event
                </Button>
              </form>
            </section>
          )}
        </WindowHelper>
      </Layout>
    )
  }
}

export default CreateEvent

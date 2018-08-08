import React from 'react'

import Smiley from '../img/smiley.png'
import Calendar from '../img/calendar.png'
import Ticket from '../img/ticket.png'
import Trash from '../img/trash.png'
import AddButton from '../img/plus-button.png'
import NewTicket from '../components/ticket.js'
import { Layout } from '../layouts/index'
import { WindowHelper } from '../components/helpers'

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
                    htmlFor="id_event_title"
                  >
                    <img
                      style={{
                        height: '35px',
                        width: 'auto',
                        margin: ' 0 5px',
                      }}
                      src={Smiley}
                      alt="smiley"
                    />
                    Event Title
                    <input
                      style={{
                        display: 'block',
                        margin: '10px 0',
                        width: '300px',
                        fontSize: 'medium',
                        padding: ' 11px 10px',
                        fontWeight: '100',
                        border: ' 1px solid rgba(255, 74, 110, 0.5)',
                        borderRadius: '3px',
                        letterSpacing: '1px',
                      }}
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
                  <label
                    style={{
                      minWidth: '300px',

                      marginRight: '40px',
                      marginLeft: '30px',
                      display: 'block',
                      fontSize: '1.2em',
                      verticalAlign: 'bottom',
                      marginMarginBottom: '15px',
                      fontWeight: '100',
                      letterSpacing: '1px',
                    }}
                    className="marg-left"
                    htmlFor="id_start_date"
                  >
                    <img
                      style={{
                        height: '35px',
                        width: 'auto',
                        margin: '0 5px',
                      }}
                      src={Calendar}
                      alt="calendar"
                    />
                    Event date
                    <input
                      style={{
                        display: 'block',
                        margin: '10px 0',
                        width: '300px',
                        fontSize: 'medium',
                        padding: ' 11px 10px',
                        fontWeight: '100',
                        border: ' 1px solid rgba(255, 74, 110, 0.5)',
                        borderRadius: '3px',
                        letterSpacing: '1px',
                      }}
                      required=""
                      id="id_start_date"
                      className="jQdatePicker"
                      name="start_date"
                      type="date"
                    />
                  </label>
                  <label
                    style={{
                      minWidth: '300px',
                      marginTop: '21px',
                      marginRight: '40px',
                      display: 'block',
                      fontSize: '1.2em',
                      verticalAlign: 'bottom',
                      marginMarginBottom: '15px',
                      fontWeight: '100',
                      letterSpacing: '1px',
                    }}
                    htmlFor="id_start_time"
                  >
                    Event time
                    <input
                      style={{
                        display: 'block',
                        margin: '10px 0',
                        width: '300px',
                        fontSize: 'medium',
                        padding: ' 11px 10px',
                        fontWeight: '100',
                        border: ' 1px solid rgba(255, 74, 110, 0.5)',
                        borderRadius: '3px',
                        letterSpacing: '1px',
                      }}
                      required=""
                      id="id_start_time"
                      className="jQtimePicker"
                      name="start_time"
                      type="time"
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
                  {' '}
                  <img
                    style={{
                      height: '35px',
                      width: 'auto',
                      margin: ' 0 5px',
                    }}
                    src={Ticket}
                    alt="ticket"
                  />{' '}
                  Create Ticket
                </label>

                <div
                  id="wrapper"
                  className="ticket-types"
                  style={{
                    display: 'grid',
                    gridTemplateColumns: '1fr 1fr 1fr',
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
                      width: '342px',
                      height: ' 368px',
                      overflow: 'hidden',
                      display: 'flex',
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

                <p className="tcs">
                  By clicking "Create" you're agreeing to
                  <a href="/en/tandc/#tandc-organiser" target="_blank">
                    the T&amp;C's
                  </a>.
                </p>
                <button className="createEventButton">Create event</button>
              </form>
            </section>
          )}
        </WindowHelper>
      </Layout>
    )
  }
}

export default CreateEvent

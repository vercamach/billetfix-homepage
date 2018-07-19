import React from 'react'
import Link from 'gatsby-link'
import styled from 'styled-components'

const FaqSection = styled.section`
  overflow: hidden;
  padding: 125px 6%;
`
const FaqDiv = styled.div`
  max-width: 650px;
  margin: 0 auto;
  > ul li a {
    color: #ff4a6e;
    text-decoration: none;
    letter-spacing: 1px;
    line-height: 22px;
    font-weight: 100;
    font-size: 15px;
  }

  > h1 {
    text-align: center;
    font-weight: 300;
    font-size: 3em;
    line-height: 1.5em;
    letter-spacing: 1px;
    text-transform: uppercase;
  }
  > h3 {
    font-size: 30px;
    line-height: 16px;
    margin: 0.25em 0;
    font-weight: 100;
    color: #ff4a6e;
    letter-spacing: 1.5px;
    margin: ;
  }
  h4 {
    font-size: 17px;
    text-transform: uppercase;
    font-weight: 100;
    line-height: 1.4em;
    margin-top: 25px;
  }
  p {
    font-weight: 100;
    font-size: 15px;
    line-height: 22px;
  }
`
const AnswersSection = styled.section``
const AnswersDiv = styled.div``

const about = () => (
  <div>
    <FaqSection>
      <FaqDiv>
        <h1> faq</h1>
        <h3>Organizer</h3>
        <ul>
          <li>
            <a href="#1">
              How can BilletFix have such low service fee in comparison to other
              ticket systems/providers?
            </a>
          </li>
          <li>
            <a href="#1">How do I integrate the signup on my own website?></a>
          </li>
          <li>
            <a href="#2">How do I link the signup to my Facebook event?</a>
          </li>
          <li>
            <a href="#3">How do I cancel an event?</a>
          </li>
          <li>
            <a href="#4">
              How do I ask for extra information during attendee's signup?
            </a>
          </li>
          <li>
            <a href="#5">How do I scan the guest's tickets?</a>
          </li>
          <li>
            <a href="#6">
              If I create an event on the Danish site, will it also be in
              English?
            </a>
          </li>
          <li>
            <a href="#7">I'm not a student, can I use BilletFix anyway?</a>
          </li>
          <li>
            <a href="#8">How much does it cost to use BilletFix?</a>
          </li>
          <li>
            <a href="#9">When do I receive the money collected for an event?</a>
          </li>
          <li>
            <a href="#10">Can I provide a description of an event?</a>
          </li>
          <li>
            <a href="#11">Can I limit the amount of tickets someone can buy?</a>
          </li>
          <li>
            <a href="#12">
              Can I send a message to all the attendees before the event?
            </a>
          </li>
          <li>
            <a href="#13">Do you have an API?</a>
          </li>
        </ul>
        <h3> Guest</h3>
        <ul>
          <li>
            <a href="#14">I haven't received my ticket what do I do?</a>
          </li>
          <li>
            <a href="#15">How do I find the address of the event?</a>
          </li>
          <li>
            <a href="#16">The event has been cancelled, what do I do?</a>
          </li>
          <li>
            <a href="#17">Do I need to print out the ticket?</a>
          </li>
        </ul>

        <h3>Organizer</h3>
        <ul>
          <li id="1">
            <h4>
              HOW CAN BILLETFIX HAVE SUCH LOW SERVICE FEE IN COMPARISON TO OTHER
              TICKET SYSTEMS/PROVIDERS?
            </h4>
            <p>
              BilletFix is for students on SU, and the price is therefor as low
              as possible! The servicefee is as low as bottle depost! We can do
              this since we in the future will display advertisement for the
              signups.
            </p>
          </li>
          <li id="2">
            <h4>HOW DO I INTEGRATE THE SIGNUP ON MY OWN WEBSITE?</h4>
            <p>
              Just send an email to info@billetfix.dk, and ask for access to the
              integration on your own website. Then we’ll give you the
              directions.
            </p>
          </li>
          <li id="3">
            <h4>HOW DO I LINK THE SIGNUP TO MY FACEBOOK EVENT?</h4>
            <p>
              To link your sign-up from a Facebook event, when you create the
              event on your Facebook page or Facebook group. In the event list
              on BilletFix you’ll find the unique signup link which you
              copy/paste to “web-address for tickets”. If you’ve already created
              the event, go to “Edit” and find the field “web-address for
              tickets”. If you haven’t created the event from a Facebook page or
              Facebook group, just copy the link to the sign-up page to the
              description of the event. Don’t hesitate emailing
              info@billetfix.dk and get help with this.
            </p>
          </li>
          <li id="4">
            <h4>HOW DO I CANCEL AN EVENT??</h4>
            <p>
              First and foremost inform your attendees the event is cancelled.
              You can always find the list of emails people have signed up with
              under “Order list” for the event. Hereafter find the with the
              event ID. You find it in the event list -- it starts with “#”.
              Write an email to info@billetfix.dk and inform you would like to
              cancel the event. Then we’ll take care of refunding the tickets.
            </p>
          </li>
          <li id="5">
            <h4>
              HOW DO I ASK FOR EXTRA INFORMATION DURING ATTENDEE'S SIGNUP?
            </h4>
            <p>
              First find the event id for the event in the event list -- it
              starts with “#”. Write an email to info@billetfix.dk stating the
              event ID and tell us what you would like to know about the guest.
              Then we’ll ensure the questions are asked during signup.
            </p>
          </li>
          <li id="6">
            <h4>HOW DO I SCAN THE GUEST'S TICKETS?</h4>
            <p>
              BilletFix offer a simple live check-in which you’ll access via the
              event list. The attendees either show the ticket on their
              smartphone or as a printed ticket. Just find the name or email and
              click “Check in”. You don’t have to install anything on your
              computer or download an app -- it doesn’t get more simple.
            </p>
          </li>
          <li id="7">
            <h4>
              IF I CREATE AN EVENT ON THE DANISH SITE, WILL IT ALSO BE IN
              ENGLISH?
            </h4>
            <p>
              Yes, everyone can always change the language on the flag on the
              top right hand corner, regardless of which language you’ve created
              the event in.
            </p>
          </li>
          <li id="8">
            <h4>I'M NOT A STUDENT, CAN I USE BILLETFIX ANYWAY?</h4>
            <p>
              You can use BilletFix for any type of event. Write an email to
              info@billetfix.dk if you have particular needs or functionalities
              for your event. We have things hidden behind the scene ;-)
            </p>
          </li>
          <li id="9">
            <h4>HOW MUCH DOES IT COST TO USE BILLETFIX?</h4>
            <p>
              It is always free for the organizer to use BilletFix! For free
              events there is no signup fee. For paid events we’ve set the fee
              the same as bottle deposit, 3 kr per ticket for the guest
              regardless of ticket price!
            </p>
          </li>
          <li id="10">
            <h4>WHEN DO I RECEIVE THE MONEY COLLECTED FOR AN EVENT?</h4>
            <p>
              To protect the rights for attendee’s refund in case the event will
              not take place we’ll transfer the money collected to the organizer
              within three working days after the conclusion of the event.
            </p>
          </li>
          <li id="11">
            <h4>CAN I PROVIDE A DESCRIPTION OF AN EVENT?</h4>
            <p>
              The concept of BilletFix is simplicity, so you as an organizer
              don’t have to do more work than strictly needed. You’ve already
              given the information about the event on your Facebook group,
              website or newsletter so why should you add it to the event page
              again? Though, if you insist on having extra text on the event
              page, just send us an email on info@billetfix.dk.
            </p>
          </li>
          <li id="12">
            <h4>CAN I LIMIT THE AMOUNT OF TICKETS SOMEONE CAN BUY?</h4>
            <p>
              Yes, first find the event id for the event in the event list -- it
              starts with “#”. Write an email to info@billetfix.dk stating the
              event ID and tell us what limitations you would like, then we’ll
              set it up for you.
            </p>
          </li>
          <li id="13">
            <h4>CAN I SEND A MESSAGE TO ALL THE ATTENDEES BEFORE THE EVENT?</h4>
            <p>
              Sure, first find the event id for the event in the event list --
              it starts with “#”. Write an email to info@billetfix.dk stating
              the event ID and tell us the event ID, then we’ll automatically
              send an email to everyone 1 day before the event.
            </p>
          </li>
          <li id="14">
            <h4>DO YOU HAVE AN API?</h4>
            <p>
              Yes, we have an API in private Beta. Just write an email to
              info@billetfix.dk if you’re interested in getting access.
            </p>
          </li>
        </ul>
        <h3> Guest</h3>
        <ul>
          <li id="15">
            <h4>I HAVEN'T RECEIVED MY TICKET WHAT DO I DO?</h4>
            <p>
              Write a message or call the organizer of the event. The contact
              information is on the event page where you’ve signed up.
            </p>
          </li>
          <li id="16">
            <h4>HOW DO I FIND THE ADDRESS OF THE EVENT?</h4>
            <p>
              The address is where you found the description about the event.
              e.g. on Facebook, website or newsletter.
            </p>
          </li>
          <li id="17">
            <h4>THE EVENT HAS BEEN CANCELLED, WHAT DO I DO?</h4>
            <p>
              If you haven’t received your money within a few days after the
              event informed you about the cancellation, don’t hesitate emailing
              us on info@billetfix.dk with the name of the event and the link to
              the signup page. Then we’ll help you.
            </p>
          </li>
          <li id="18">
            <h4>DO I NEED TO PRINT OUT THE TICKET?</h4>
            <p>
              No, you don’t have to print it out unless the organizer has told
              you so. Just show the ticket on your smartphone.
            </p>
          </li>
        </ul>
      </FaqDiv>
    </FaqSection>
  </div>
)

export default about

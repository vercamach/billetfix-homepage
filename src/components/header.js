import React from 'react'
import Link from 'gatsby-link'
import Logo from '../img/logox400.png'

let headerStyles = {
  div:{
    color: "#f7f7f7",
    padding: "15px 5%",
    top: "0",
    width: "100%",
    display: "flex",
    justifyContent: "space-between"
},
  createEvent:{
    margin: "-11px auto",
    padding: "0.7em 1em",
    background: "#ff4a6e",
    color: "#fff",
    letterSpacing: "2px",
    borderColor: "#ff4a6e",
    borderRadius: "2px",
    cursor: "pointer",
    fontSize: "13px",
    textAlign: "center",
    fontWeight: "400",
    border: "1px solid #ff4a6e"
  },
linkDiv:{
display: "block"
},
  link:{
    display: "inline-block",
    padding: "0 10px",
    fontWeight: "400",
    fontSize: "13px"
  }

}

const Header = ({ siteTitle }) => (
  <div
    style={headerStyles.div}
  >
  <Link to="/index-page/">
  <img src={Logo} alt="Logo" style={{
margin: "0",
  maxWidth: "160px",
  maxHeight: "70px"
  }} /></Link>
    
     <div id ="navDiv" style ={headerStyles.linkDiv}>
      <Link to="/create-event"><button style= {headerStyles.createEvent} >CREATE EVENT</button></Link>
      <Link style= {headerStyles.link} to="/about/">About</Link>
      <Link style= {headerStyles.link} to="/faq/"> FAQ </Link>
      <Link style= {headerStyles.link} to="/enterprise-solution/"> Enterprise solution </Link>
      <Link style= {headerStyles.link} to="/my-tickets/"> My tickets </Link>
      <Link style= {headerStyles.link} to="/login/">Login</Link>
     
    </div>
    </div>
  
)

export default Header

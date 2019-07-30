import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import StyledTextField from "../components/material-ui"


const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1 style={{color: `#34495E`}}>Donation Page</h1>
    <form action="">
    <StyledTextField label="First Name" style={{paddingBottom: `10px`}} variant="outlined" ></StyledTextField><br/>
    <StyledTextField label="Middle Initial" style={{paddingBottom: `10px`}} variant="outlined"></StyledTextField><br/>
    <StyledTextField label="Last Name" style={{paddingBottom: `10px`}} variant="outlined"></StyledTextField><br/>
    <StyledTextField label="Email Address" style={{paddingBottom: `10px`}} variant="outlined"></StyledTextField><br/>
    <StyledTextField label="Phone Number" style={{paddingBottom: `10px`}} variant="outlined"></StyledTextField><br/>
    <StyledTextField label="Address" style={{paddingBottom: `10px`}} variant="outlined"></StyledTextField><br/>
    <StyledTextField label="Apt Number" style={{paddingBottom: `10px`}} variant="outlined"></StyledTextField><br/>
    <StyledTextField label="City" style={{paddingBottom: `10px`}} variant="outlined"></StyledTextField><br/>
    <StyledTextField label="State" style={{paddingBottom: `10px`}} variant="outlined"></StyledTextField><br/>
    <StyledTextField label="Zip" style={{paddingBottom: `10px`}} variant="outlined"></StyledTextField><br/>
    <StyledTextField label="Card Number" style={{paddingBottom: `10px`}} variant="outlined"></StyledTextField><br/>
    <StyledTextField label="Exp Date" style={{paddingBottom: `10px`}} variant="outlined"></StyledTextField><br/>
    <StyledTextField label="CVV" style={{paddingBottom: `10px`}} variant="outlined"></StyledTextField><br/>


      <input type="submit" value="Submit"/>
    </form>
    
    
  </Layout>
)




export default IndexPage

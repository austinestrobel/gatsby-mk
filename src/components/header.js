import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import Icon from "../images/icon.svg";

const Header = ({ siteTitle }) => (

  <header
    style={{
      background: `#B7DFEA`,      
    }}
  >  
    <div
      style={{
        margin: `auto`,
        maxWidth: 960,
        paddingTop: `2rem`,
        marginBottom: `-60px`,
      }}
    >     
    <Icon 
        style={{
          maxWidth: `180px`,
          
        }}>
        <Link to="/"/>
    </Icon>
     
    </div>      
    <div class="secure"></div>

  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header

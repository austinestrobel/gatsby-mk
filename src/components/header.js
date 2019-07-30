import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import Icon from "../images/icon.svg";

const Header = ({ siteTitle }) => (

  <header
    style={{
      background: `#B7DFEA`,
      marginBottom: `1.45rem`,
    }}
  >  
    <div
      style={{
        margin: `0 auto`,
        maxWidth: 960,
        padding: `1.45rem 1.0875rem`,
      }}
    >     
    <Icon 
        style={{
          maxWidth: `200px`,
        }}>
        <Link to="/"/>
    </Icon>
      <h1 style={{ margin: 0 }}>
        <Link
          to="/"
          style={{
            color: `white`,
            textDecoration: `none`,
          }}
        >
          {siteTitle}
        </Link>
      </h1>

    </div>      
    <span class="secure">SECURE RESPONSE</span>

  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header


import React from "react"
import PropTypes from "prop-types"
import Header from "./header"
import "./layout.css"

const Layout = ({ children }) => {

  return (
    <>
        <div className="page-container">
              <Header/>

            <main class="page-content">{children}</main>

          
          <footer className="footer">
            <p>Every Donation Matters, Thank You.</p>
            <p>&copy; MK Decision</p>
          </footer>
        </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout

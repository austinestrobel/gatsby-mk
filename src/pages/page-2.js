import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const SecondPage = () => (
  <Layout>
    <SEO title="Page two" />
    <h1>Thank you for your Donation.</h1>
    <p>We hope to see you again!</p>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default SecondPage

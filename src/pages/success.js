import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const Success = () => (
  <Layout>
    <SEO title="Success" />
    <div className="container">
      <h1>Thank you for submitting the form</h1>
      <Link to="/about-me">continue browsing</Link>
    </div>
  </Layout>
)

export default Success

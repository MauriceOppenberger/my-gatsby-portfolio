import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const Success = () => (
  <Layout>
    <SEO title="Success" />
    <h1>Thank you for submitting the form</h1>

    <Link to="/about-me">back to our site</Link>
  </Layout>
)

export default Success

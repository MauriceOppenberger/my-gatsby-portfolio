import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"

const index = ({ pageContext }) => (
  <Layout>
    <SEO title={pageContext.title} />
    <div>
      <h1>{pageContext.title}</h1>
    </div>
  </Layout>
)

export default index

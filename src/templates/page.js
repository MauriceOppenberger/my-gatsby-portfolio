import React from "react"
import Layout from "../components/layout"

const page = ({ pageContext }) => (
  <Layout>
    <h1>{pageContext.title}</h1>
    <div dangerouslySetInnerHTML={{ __html: pageContext.content }}></div>
  </Layout>
)

export default page

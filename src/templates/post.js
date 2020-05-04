import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"

const post = ({ pageContext }) => {
  return (
    <Layout>
      <SEO title={pageContext.title} />
      <div className="container">
        <h1>{pageContext.title}</h1>
        <div
          dangerouslySetInnerHTML={{
            __html: pageContext.content,
          }}
        ></div>
      </div>
    </Layout>
  )
}

export default post

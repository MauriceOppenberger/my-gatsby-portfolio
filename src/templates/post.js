import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import DOMPurify from "dompurify"

const post = ({ pageContext }) => {
  const cleanHtml = DOMPurify.sanitize(pageContext.content, {
    SAFE_FOR_JQUERY: true,
  })
  return (
    <Layout>
      <SEO title={pageContext.title} />
      <div className="container">
        <h1>{pageContext.title}</h1>
        <div
          dangerouslySetInnerHTML={{
            __html: cleanHtml,
          }}
        ></div>
      </div>
    </Layout>
  )
}

export default post

import React from "react"
import Layout from "../components/layout"
import Img from "gatsby-image"

const portfolio = ({ pageContext }) => (
  <Layout>
    <h1>{pageContext.title}</h1>
    <a href={pageContext.acf.url} target="_blank" rel="noopener noreferrer">
      vist Site
    </a>

    {pageContext.featured_media.title != "default_fallback_image" ? (
      <Img
        style={{ width: "300px", height: "100%" }}
        fluid={pageContext.featured_media.localFile.childImageSharp.fluid}
      />
    ) : null}

    <div dangerouslySetInnerHTML={{ __html: pageContext.content }}></div>
  </Layout>
)

export default portfolio

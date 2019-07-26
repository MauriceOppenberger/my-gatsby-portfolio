import React from "react"
import Layout from "../components/layout"
import Img from "gatsby-image"

import { PortfolioWrapper } from "./styles/Portfolio"

const portfolio = ({ pageContext }) => (
  <Layout>
    <PortfolioWrapper>
      <h1>{pageContext.title}</h1>
      <div className="center">
        <div className="left">
          {pageContext.featured_media.title !== "default_fallback_image" ? (
            <Img
              fluid={pageContext.featured_media.localFile.childImageSharp.fluid}
            />
          ) : null}
        </div>
        <div className="right">
          <div className="inner">
            <div dangerouslySetInnerHTML={{ __html: pageContext.content }} />
            <a
              href={pageContext.acf.url}
              target="_blank"
              rel="noopener noreferrer"
            >
              Live Site
            </a>
          </div>
        </div>
      </div>
    </PortfolioWrapper>
  </Layout>
)

export default portfolio

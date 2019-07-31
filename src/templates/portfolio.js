import React from "react"
import Layout from "../components/layout"
import Img from "gatsby-image"

import { PortfolioWrapper } from "./styles/Portfolio"

const portfolio = ({ pageContext }) => (
  <Layout>
    <PortfolioWrapper>
      <div className="center">
        <div className="project-media">
          {pageContext.acf.prototype_url ? (
            <iframe
              width="100%"
              height="500"
              src={pageContext.acf.prototype_url}
              frameborder="0"
              allowfullscreen=""
            ></iframe>
          ) : pageContext.featured_media.title !== "default_fallback_image" ? (
            <Img
              fluid={pageContext.featured_media.localFile.childImageSharp.fluid}
            />
          ) : null}
        </div>
        <div className="project-main">
          <div className="project-inner">
            <div className="project-title">
              <h1>{pageContext.title}</h1>
            </div>
            <div className="project-details">
              <p>Role: {pageContext.acf.role}</p>
              {pageContext.acf.collaboration ? (
                <p>
                  Collaboration:{" "}
                  <a href={pageContext.acf.collaboration.team_member.url}>
                    {pageContext.acf.collaboration.team_member.title}
                  </a>
                </p>
              ) : null}
            </div>
            <div className="project-content">
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
      </div>
    </PortfolioWrapper>
  </Layout>
)

export default portfolio

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
              title={pageContext.title}
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
              {pageContext.acf.role ? (
                <div className="role">
                  <span>Role:</span>
                  <span>{pageContext.acf.role}</span>
                </div>
              ) : null}
              {pageContext.acf.collaboration ? (
                <div className="team">
                  <span> Collaboration:</span>
                  <span>
                    <a href={pageContext.acf.collaboration.team_member.url}>
                      {pageContext.acf.collaboration.team_member.title}
                    </a>
                  </span>
                </div>
              ) : null}
              {pageContext.acf.client ? (
                <div className="client">
                  <span>Client:</span>
                  <span>
                    <a
                      href={pageContext.acf.client.url}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {pageContext.acf.client.title}
                    </a>
                  </span>
                </div>
              ) : null}
            </div>

            <div className="project-content">
              <div className="subtitle">Project discription</div>
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

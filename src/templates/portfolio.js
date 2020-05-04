import React from "react"
import Layout from "../components/layout"
import Img from "gatsby-image"
import SEO from "../components/seo"
import DOMPurify from "dompurify"

import { PortfolioWrapper } from "./styles/Portfolio"

const portfolio = ({ pageContext }) => {
  return (
    <Layout>
      <SEO title={pageContext.title} />
      <PortfolioWrapper>
        <div className="center">
          <div className="project-title">
            <h1>{pageContext.title}</h1>
          </div>
          <div className="project-media">
            {pageContext.acf.prototype_url ? (
              <iframe
                title={pageContext.title}
                width="100%"
                height="650px"
                src={pageContext.acf.prototype_url}
                frameborder="0"
                allowfullscreen=""
              ></iframe>
            ) : pageContext.featured_media.title !==
              "default_fallback_image" ? (
              <Img
                fixed={
                  pageContext.featured_media.localFile.childImageSharp.fixed
                }
                className="fixed-Img"
              />
            ) : null}
            <div className="btn-container">
              {pageContext.acf.client.url ? (
                <button className="cta-btn">
                  <a
                    href={pageContext.acf.client.url}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <p>Visit the Website</p>
                  </a>
                </button>
              ) : null}
            </div>
          </div>

          <div className="project-main">
            <div className="project-inner">
              {/* <div className="project-title">
              <h1>{pageContext.title}</h1>
            </div> */}

              <div className="project-content">
                <div
                  dangerouslySetInnerHTML={{
                    __html: pageContext.content,
                  }}
                />
              </div>
              <div className="project-subtitle">
                <h4>Project Details</h4>
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
                    <span>Team:</span>
                    <span>
                      <a
                        href={pageContext.acf.collaboration.team_member.url}
                        rel={pageContext.acf.collaboration.team_member.title}
                      >
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
            </div>
          </div>
        </div>
        {/* </div> */}
      </PortfolioWrapper>
    </Layout>
  )
}

export default portfolio

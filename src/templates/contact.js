import React from "react"
import Layout from "../components/layout"
import { ContactWrapper } from "./styles/Contact"
import Img from "gatsby-image"
import SEO from "../components/seo"
import DOMPurify from "dompurify"

import { FaLinkedin, FaGithub } from "react-icons/fa"

const contact = ({ pageContext }) => {
  const cleanHtml = DOMPurify.sanitize(pageContext.title, {
    SAFE_FOR_JQUERY: true,
  })

  return (
    <Layout>
      <SEO title="About Me" />
      <ContactWrapper>
        <div className="center">
          <div className="social-media">
            <div className="profile-image">
              <h1
                dangerouslySetInnerHTML={{
                  __html: cleanHtml,
                }}
              />
              <Img
                fluid={
                  pageContext.featured_media.localFile.childImageSharp.fluid
                }
              />
            </div>

            <div
              dangerouslySetInnerHTML={{
                __html: cleanHtml(pageContext.content, {
                  SAFE_FOR_JQUERY: true,
                }),
              }}
            />

            <ul className="social-icons">
              <li>
                <a
                  href={pageContext.acf.social_media.linkedin.url}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaLinkedin size={26} />
                </a>
              </li>

              <li>
                <a
                  href={pageContext.acf.social_media.github.url}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaGithub size={26} />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </ContactWrapper>
    </Layout>
  )
}

export default contact

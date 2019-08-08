import React from "react"
import Layout from "../components/layout"
import { ContactWrapper } from "./styles/Contact"
import Img from "gatsby-image"
import SEO from "../components/seo"

import { FaFacebookSquare, FaLinkedin, FaGithub } from "react-icons/fa"

const contact = ({ pageContext }) => (
  <Layout>
    <SEO title="About Me" />
    <div className="container">
      <ContactWrapper>
        <div className="center">
          <div className="social-media">
            <div dangerouslySetInnerHTML={{ __html: pageContext.content }} />
            <h4>find me on </h4>
            <ul>
              <li>
                <a
                  href={pageContext.acf.social_media.linkedin.url}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaLinkedin size={22} />
                  <strong>{pageContext.acf.social_media.linkedin.title}</strong>
                </a>
              </li>
              <li>
                <a
                  href={pageContext.acf.social_media.facebook.url}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaFacebookSquare size={22} />
                  <strong>{pageContext.acf.social_media.facebook.title}</strong>
                </a>
              </li>
              <li>
                <a
                  href={pageContext.acf.social_media.github.url}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaGithub size={22} />
                  <strong>{pageContext.acf.social_media.github.title}</strong>
                </a>
              </li>
            </ul>
          </div>
          <div className="profile-image">
            <Img
              fluid={pageContext.featured_media.localFile.childImageSharp.fluid}
            />
          </div>
        </div>
      </ContactWrapper>
    </div>
  </Layout>
)

export default contact

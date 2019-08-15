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
            <h1>{pageContext.title}</h1>
            <div dangerouslySetInnerHTML={{ __html: pageContext.content }} />
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
                  href={pageContext.acf.social_media.facebook.url}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaFacebookSquare size={26} />
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

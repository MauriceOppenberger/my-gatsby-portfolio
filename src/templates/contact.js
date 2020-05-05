import React from "react"
import Layout from "../components/layout"
import { ContactWrapper } from "./styles/Contact"
<<<<<<< HEAD
=======
import WorldMap from "../components/WorldMap"
>>>>>>> a73c88ce58ed76d26bf56d5c9aa47d49b92fc5c2
import Img from "gatsby-image"
import SEO from "../components/seo"

import { FaLinkedin, FaGithub } from "react-icons/fa"

const contact = ({ pageContext }) => {
  return (
    <Layout>
      <SEO title="Software Developer | About Me" />
      <ContactWrapper>
        <div className="center">
          <div className="profile-image">
            <h1
              dangerouslySetInnerHTML={{
                __html: pageContext.title,
              }}
            />
            <Img
              fluid={pageContext.featured_media.localFile.childImageSharp.fluid}
            />
          </div>

          <div
            dangerouslySetInnerHTML={{
              __html: pageContext.content,
            }}
          />
        </div>
<<<<<<< HEAD

=======
        <h3>My travels</h3>
        <WorldMap />
>>>>>>> a73c88ce58ed76d26bf56d5c9aa47d49b92fc5c2
        <div className="social-media">
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
      </ContactWrapper>
    </Layout>
  )
}

export default contact

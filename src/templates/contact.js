import React from "react"
import Layout from "../components/layout"
import { ContactWrapper } from "./styles/Contact"
import Img from "gatsby-image"
import SEO from "../components/seo"

import { FaLinkedin, FaGithub } from "react-icons/fa"

const contact = ({ pageContext }) => {
  return (
    <Layout>
      <SEO title="About Me" />
      <ContactWrapper>
        <div className="center">
          <div className="social-media">
            <h1 dangerouslySetInnerHTML={{ __html: pageContext.title }} />

            <div dangerouslySetInnerHTML={{ __html: pageContext.content }} />
            <div className="profile-image">
              <Img
                fluid={
                  pageContext.featured_media.localFile.childImageSharp.fluid
                }
              />{" "}
            </div>
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
// < div className = "profile-image" >
//   <Img
//     fluid={pageContext.featured_media.localFile.childImageSharp.fluid}
//   />
//       </div >

export default contact

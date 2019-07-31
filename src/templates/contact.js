import React from "react"
import Layout from "../components/layout"
import { ContactWrapper } from "./styles/Contact"
import Img from "gatsby-image"
import ContactForm from "../components/ContactForm"

const contact = ({ pageContext }) => (
  <Layout>
    <ContactWrapper>
      <div dangerouslySetInnerHTML={{ __html: pageContext.content }} />
      <div className="center">
        <div className="profile-image">
          <Img
            fluid={pageContext.featured_media.localFile.childImageSharp.fluid}
          />
        </div>
        <div className="contact-form">
          <ContactForm />
        </div>
      </div>
    </ContactWrapper>
  </Layout>
)

export default contact

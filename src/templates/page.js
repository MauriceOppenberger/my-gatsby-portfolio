import React from "react"
import Layout from "../components/layout"
import { PageWrapper } from "./styles/Page"
import SEO from "../components/seo"

const page = ({ pageContext }) => (
  <Layout>
    <SEO title="Homepage" />

    <PageWrapper>
      <div className="about">
        <h1 dangerouslySetInnerHTML={{ __html: pageContext.title }} />

        <div dangerouslySetInnerHTML={{ __html: pageContext.content }} />
      </div>

      <div className="contact">
        <h2>Get in touch!</h2>
        <p className="status">
          I am always open to new opportunities and cool projects!
        </p>
      </div>
    </PageWrapper>
  </Layout>
)

export default page

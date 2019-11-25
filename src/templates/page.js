import React from "react"
import Layout from "../components/layout"
import { PageWrapper } from "./styles/Page"
import SEO from "../components/seo"

const page = ({ pageContext }) => {
  const cleanHtmlTitle = DOMPurify.sanitize(pageContext.title, {
    SAFE_FOR_JQUERY: true,
  })
  const cleanHtmlContent = DOMPurify.sanitize(pageContext.content, {
    SAFE_FOR_JQUERY: true,
  })

  return (
    <Layout>
      <SEO title="Homepage" />
      <PageWrapper>
        <div className="about">
          <h1
            dangerouslySetInnerHTML={{
              __html: cleanHtmlTitle,
            }}
          />

          <div
            dangerouslySetInnerHTML={{
              __html: cleanHtmlContent,
            }}
          />
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
}

export default page

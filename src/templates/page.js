import React from "react"
import Layout from "../components/layout"
import styled from "styled-components"
import ContactForm from "../components/ContactForm"
import { Link } from "gatsby"
import SEO from "../components/seo"

export const PageWrapper = styled.div`
  .blurb {
    line-height: 2 !important;
    font-weight: 600;
    margin: 2rem 0 5rem;
    font-size: 0.9rem;
  }
  @media screen and (min-width: 992px) {
    .blurb {
      max-width: 80%;
    }
  }
  .status {
    font-size: 2rem;
    color: green;
    margin: 4rem 0;
    line-height: 1.5;
    max-width: 90%;
  }
  .contact {
    margin: 0 0 4rem;
    max-width: 80%;
  }
  .projects {
    padding: 4rem 0;
  }
  .projects a {
    color: blue;
    text-decoration: underline;
  }
`

const page = ({ pageContext }) => (
  <Layout>
    <SEO title="Homepage" />
    <div className="container">
      <PageWrapper>
        <h1 dangerouslySetInnerHTML={{ __html: pageContext.title }} />

        <div dangerouslySetInnerHTML={{ __html: pageContext.content }} />
        <div className="contact">
          <ContactForm />
        </div>
        <div className="projects">
          <h3>
            check out my latest <Link to="/projects">projects</Link>
          </h3>
        </div>
      </PageWrapper>
    </div>
  </Layout>
)

export default page

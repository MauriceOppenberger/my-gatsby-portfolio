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
    /* margin: 2rem 0; */
    font-size: 1rem;
  }
  .blurb a {
    color: blue;
    text-decoration: underline;
  }
  @media screen and (min-width: 992px) {
    h1 {
      max-width: 42%;
    }
    .blurb {
      max-width: 75%;
    }
  }
  .status {
    font-size: 2rem;
    color: green;
    margin: 6rem 0;
    line-height: 1.5;
    font-weight: 700;
    /* text-align: center; */
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
// < div className = "projects" >
//   <h5>
//     check out my latest <Link to="/projects">projects</Link>
//   </h5>
//       </div >
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
      </PageWrapper>
    </div>
  </Layout>
)

export default page

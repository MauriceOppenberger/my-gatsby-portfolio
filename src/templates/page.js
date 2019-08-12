import React from "react"
import Layout from "../components/layout"
import { PageWrapper } from "./styles/Page"
import ContactForm from "../components/ContactForm"
import { Link } from "gatsby"
import SEO from "../components/seo"

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

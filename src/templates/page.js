import React from "react"
import Layout from "../components/layout"
import { PageWrapper } from "./styles/Page"
import ContactForm from "../components/ContactForm"
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
        <div className="about">
          <h1 dangerouslySetInnerHTML={{ __html: pageContext.title }} />

          <div dangerouslySetInnerHTML={{ __html: pageContext.content }} />
        </div>

        <div className="contact">
          <p className="status">
            Get in touch! I would love to hear about your Project.
          </p>
          <ContactForm />
        </div>
      </PageWrapper>
    </div>
  </Layout>
)

export default page

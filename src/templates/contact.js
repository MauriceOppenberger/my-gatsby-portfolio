import React from "react"
import Layout from "../components/layout"
import { ContactWrapper } from "./styles/Contact"

const contact = ({ pageContext }) => (
  <Layout>
    <ContactWrapper>
      <div dangerouslySetInnerHTML={{ __html: pageContext.content }} />
    </ContactWrapper>
  </Layout>
)

export default contact

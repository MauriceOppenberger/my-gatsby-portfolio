import React from "react"
import Layout from "../components/layout"
import styled from "styled-components"

export const PageWrapper = styled.div`
  .blurb {
    line-height: 2 !important;
    font-weight: 600;
    margin: 2rem 0 5rem;
    font-size: 0.9rem;
    max-width: 80%;
  }
`

const page = ({ pageContext }) => (
  <Layout>
    <div className="container">
      <PageWrapper>
        <h1 dangerouslySetInnerHTML={{ __html: pageContext.title }}></h1>
        <div dangerouslySetInnerHTML={{ __html: pageContext.content }}></div>
      </PageWrapper>
    </div>
  </Layout>
)

export default page

import React from "react"
import Layout from "../components/layout"
import PortfolioItems from "../components/PortfolioItems"

const portfolioUnderContent = ({ pageContext }) => (
  <Layout>
    <h1>{pageContext.title}</h1>
    <div dangerouslySetInnerHTML={{ __html: pageContext.content }}></div>
    <PortfolioItems />
  </Layout>
)

export default portfolioUnderContent

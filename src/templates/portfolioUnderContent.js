import React from "react"
import Layout from "../components/layout"
import PortfolioItems from "../components/PortfolioItems"

const portfolioUnderContent = ({ pageContext }) => (
  <Layout>
    <div className="container">
      <h1>{pageContext.title}</h1>
      <div dangerouslySetInnerHTML={{ __html: pageContext.content }}></div>
      <PortfolioItems />
    </div>
  </Layout>
)

export default portfolioUnderContent

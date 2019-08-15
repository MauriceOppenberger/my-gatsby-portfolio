import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import styled from "styled-components"
import { Link } from "gatsby"

export const NotFoundWrapper = styled.div`
  display: block;
  max-width: 80%;
  margin: auto;
  text-align: center;

  h1 {
    color: green;
    padding: 2rem 0;
  }
  div {
    transform: rotate(120deg);
  }
  div p {
    padding: 50px;
    font-size: 140px;
    margin: 4rem 0;
  }
  h4 {
    padding: 2rem;
  }
`
const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />
    <div className="container">
      <NotFoundWrapper>
        <h1>SORRY... STILL WORKING ON THAT ONE</h1>
        <div>
          <p>:-(</p>
        </div>
        <Link to="/home">
          <h4>back to Homepage</h4>
        </Link>
      </NotFoundWrapper>
    </div>
  </Layout>
)

export default NotFoundPage

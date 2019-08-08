import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"

import Layout from "../components/layout"
import SEO from "../components/seo"

export const SuccessWrapper = styled.div`
  display: block;
  max-width: 80%;
  margin: auto;
  text-align: center;

  h1 {
    color: green;
    padding: 2rem 0;
  }
  div {
    transform: rotate(50deg);
  }
  div p {
    padding: 50px;
    font-size: 140px;
    margin-bottom: 2rem;
  }
  h4 {
    padding: 2rem;
  }
`

const Success = () => (
  <Layout>
    <SEO title="Success" />
    <div className="container">
      <SuccessWrapper>
        <h1>Thanks for reaching out!</h1>
        <div>
          <p>:-)</p>
        </div>
        <Link to="/home">
          <h4>back to Homepage</h4>
        </Link>
      </SuccessWrapper>
    </div>
  </Layout>
)

export default Success

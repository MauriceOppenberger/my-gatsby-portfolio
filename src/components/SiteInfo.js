import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import styled from "styled-components"

const SiteInfoWrapper = styled.div`
  flex-grow: 1;
  margin: 0px;

  h3 {
    margin-bottom: 0.3rem;
  }
  h5 {
    margin: 0;
  }
  @media (max-width: 991px) {
    display: none;
  }
`

const SiteInfo = () => {
  const {
    info: {
      edges: [{ node: info }],
    },
  } = useStaticQuery(graphql`
    query MetaQuery {
      info: allWordpressSiteMetadata {
        edges {
          node {
            name
            description
          }
        }
      }
    }
  `)

  return (
    <SiteInfoWrapper>
      <div>
        <h3>{info.name}</h3>
      </div>
      <div>
        <h5>{info.description}</h5>
      </div>
    </SiteInfoWrapper>
  )
}

export default SiteInfo

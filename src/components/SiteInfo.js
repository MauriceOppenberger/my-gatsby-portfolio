import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import styled from "styled-components"

const SiteInfoWrapper = styled.div`
  flex-grow: 1;
  margin: 0px;

  h2 {
    margin-bottom: 0rem;
    /* font-size: 2.25rem; */
    font-size: 1.62671rem;
    color: #fff;
  }
  /* h5 {
    margin: 0;
  } */
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
        <h2>{info.name}</h2>
      </div>
      <div>
        <h5 dangerouslySetInnerHTML={{ __html: info.description }} />
      </div>
    </SiteInfoWrapper>
  )
}

export default SiteInfo

import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import PropTypes from "prop-types"

import PortfolioItem from "./PortfolioItem"

import styled from "styled-components"

const PortfolioItemsWrapper = styled.div`
  .portfolio {
    padding: 4rem 0;
  }
  .center {
    width: 100%;
    margin: 3rem auto;
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
    grid-column-gap: 2rem;
    grid-row-gap: 2rem;
  }

  @media screen and (min-width: 576px) {
    .center {
      grid-template-columns: repeat(auto-fill, minmax(24vw, 1fr));
    }
    .links {
      width: 60vw;
    }
  }
  @media screen and (min-width: 1200px) {
    .center {
      width: 100%;
      /* max-width: 1170px; */
    }
  }
`

const PortfolioItems = () => {
  const data = useStaticQuery(graphql`
    query {
      porfolioItems: allWordpressWpPortfolio {
        edges {
          node {
            id
            slug
            title
            acf {
              excerpt
            }
            date(formatString: "MMMM Do, Y")
            content
            featured_media {
              title
              localFile {
                childImageSharp {
                  fluid(quality: 100, maxWidth: 500, maxHeight: 300) {
                    ...GatsbyImageSharpFluid_withWebp
                  }
                }
              }
            }
          }
        }
      }
    }
  `)

  return (
    <PortfolioItemsWrapper>
      <div className="portflolio">
        <div className="center">
          {data.porfolioItems.edges.map(({ node }) => (
            <PortfolioItem key={node.id} portfolio={node} />
          ))}
        </div>
      </div>
    </PortfolioItemsWrapper>
  )
}

PortfolioItems.propTypes = {
  data: PropTypes.object,
}

export default PortfolioItems

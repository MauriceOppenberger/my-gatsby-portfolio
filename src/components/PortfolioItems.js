import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import PropTypes from "prop-types"

import PortfolioItem from "./PortfolioItem"

import styled from "styled-components"

const PortfolioItemsWrapper = styled.div`
  .portfolio {
    padding: 4rem 0;
    margin: auto;
    max-width: 45vw;
  }
  .center {
    width: 100%;
    margin: auto;
    display: grid;

    grid-template-columns: 1fr;
    grid-column-gap: 2rem;
    grid-row-gap: 2rem;
  }
  @media screen and (max-width: 992px) {
    .portfolio {
      max-width: 100%;
    }
    .center {
      max-width: 100%;
      /* grid-template-columns: repeat(auto-fill, minmax(30%, 1fr)); */
      /* grid-template-columns: 1fr; */
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
              role
              link
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
              author {
                name
              }
            }
          }
        }
      }
    }
  `)

  return (
    <PortfolioItemsWrapper>
      <div className="portfolio">
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

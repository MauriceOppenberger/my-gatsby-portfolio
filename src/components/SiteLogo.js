import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const SiteLogo = () => {
  const data = useStaticQuery(graphql`
    query {
      logo: allWordpressWpLogo {
        edges {
          node {
            url {
              localFile {
                childImageSharp {
                  fluid(quality: 100, maxWidth: 100) {
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
    <>
      <Img
        fluid={data.logo.edges[0].node.url.localFile.childImageSharp.fluid}
      />
    </>
  )
}

export default SiteLogo

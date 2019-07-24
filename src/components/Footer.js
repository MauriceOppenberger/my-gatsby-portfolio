import { useStaticQuery, graphql } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

import FooterMenu from "../components/FooterMenu"
import { FooterWrapper } from "../components/styles/FooterStyles"

const Footer = () => {
  const {
    footerMenu: {
      edges: [{ node: footer }],
    },
  } = useStaticQuery(graphql`
    query FooterQuery {
      site {
        siteMetadata {
          title
        }
      }
      footerMenu: allWordpressWpApiMenusMenusItems(
        filter: { wordpress_id: { eq: 3 } }
      ) {
        edges {
          node {
            items {
              title
              url
              object_slug
            }
            name
          }
        }
      }
    }
  `)

  return (
    <FooterWrapper>
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <FooterMenu footerMenu={footer} />
          </div>
        </div>
      </div>
    </FooterWrapper>
  )
}

Footer.propTypes = {
  footerMenu: PropTypes.object,
}

export default Footer

import { useStaticQuery, graphql, Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

import MainMenu from "../components/MainMenu"

import { HeaderWrapper } from "../components/styles/HeaderStyles"
import SiteInfo from "./SiteInfo"
import SiteLogo from "./SiteLogo"

const Header = () => {
  const {
    menu: {
      edges: [{ node: menu }],
    },
  } = useStaticQuery(graphql`
    query HeaderQuery {
      menu: allWordpressWpApiMenusMenusItems(
        filter: { wordpress_id: { eq: 2 } }
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
    <HeaderWrapper>
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-1">
            <Link to="/">
              <div className="logo">
                <SiteLogo />
              </div>
            </Link>
          </div>
          <div className="col-md-3">
            <SiteInfo />
          </div>
          <div className="col-md-7">
            <MainMenu menu={menu} />
          </div>
        </div>
      </div>
    </HeaderWrapper>
  )
}

Header.propTypes = {
  menu: PropTypes.object,
}

export default Header

import React from "react"
import { useStaticQuery, graphql, Link } from "gatsby"
import PropTypes from "prop-types"

import { Overlay } from "./styles/OverlayMenuStyles"
import SiteLogo from "./SiteLogo"

import closeButton from "../images/close_button.svg"

const OverlayMenu = ({ menuOpen, callback }) => {
  const {
    menu: {
      edges: [{ node: menu }],
    },
  } = useStaticQuery(graphql`
    query OverlayMenu {
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
    <Overlay menuOpen={menuOpen}>
      <div className="inner">
        <div className="SiteLogo">
          <SiteLogo />
        </div>
        <ul className="overlayMenu">
          {menu.items.map((item, i) => (
            <li key={i}>
              <Link to={`/${item.object_slug}`} activeClassName="overlayActive">
                {item.title}
              </Link>
            </li>
          ))}
        </ul>
        <div
          className="closeButton"
          onClick={callback}
          role="button"
          tabIndex="0"
          onKeyDown={callback}
        >
          <img src={closeButton} alt="close_button" />
        </div>
      </div>
    </Overlay>
  )
}
OverlayMenu.propTypes = {
  menuopen: PropTypes.bool,
  callback: PropTypes.func,
}

export default OverlayMenu

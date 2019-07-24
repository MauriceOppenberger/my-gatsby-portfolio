import React from "react"
import { Link } from "gatsby"

import { NavWrapper } from "../components/styles/NavStyles"

const MainMenu = ({ menu }) => {
  return (
    <div style={{ textAlign: "right" }}>
      <NavWrapper>
        <ul>
          {menu.items.map((item, i) => (
            <li key={i}>
              <Link to={`/${item.object_slug}`} activeClassName="nav-active">
                {item.title}
              </Link>
            </li>
          ))}
        </ul>
      </NavWrapper>
    </div>
  )
}

export default MainMenu

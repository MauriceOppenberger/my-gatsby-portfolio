import React from "react"
import { Link } from "gatsby"

import { NavWrapper } from "../components/styles/NavStyles"

const MainMenu = ({ menu }) => {
  return (
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
  )
}

export default MainMenu

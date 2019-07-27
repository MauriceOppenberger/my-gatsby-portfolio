import React from "react"
import { Link } from "gatsby"

const FooterMenu = ({ footerMenu }) => {
  return (
    <>
      <ul>
        {footerMenu.items.map((item, i) => (
          <li key={i}>
            <Link to={`/${item.object_slug}/`}>{item.title}</Link>
          </li>
        ))}
      </ul>
    </>
  )
}

export default FooterMenu

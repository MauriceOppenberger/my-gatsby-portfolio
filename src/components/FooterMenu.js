import React from "react"
import { Link } from "gatsby"
import { FaUserAlt, FaRegFolder, FaHome } from "react-icons/fa"

const FooterMenu = ({ footerMenu }) => {
  return (
    <>
      <ul>
        {footerMenu.items.map((item, i) => (
          <li key={i}>
            {item.title === "About Me" ? (
              <Link to={`/${item.object_slug}/`}>
                <FaUserAlt size={22} />
                {item.title}
              </Link>
            ) : item.title === "Projects" ? (
              <Link to={`/${item.object_slug}/`}>
                <FaRegFolder size={22} />
                {item.title}
              </Link>
            ) : item.title === "Home" ? (
              <Link to={`/${item.object_slug}/`}>
                <FaHome size={22} />
                {item.title}
              </Link>
            ) : null}
          </li>
        ))}
      </ul>
    </>
  )
}

export default FooterMenu

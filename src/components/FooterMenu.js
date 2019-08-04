import React from "react"
import { Link } from "gatsby"
import { FaUserAlt, FaHome, FaCode } from "react-icons/fa"
import { MdCode, MdHome, MdPerson } from "react-icons/md"

const FooterMenu = ({ footerMenu }) => {
  return (
    <>
      <ul>
        {footerMenu.items.map((item, i) => (
          <li key={i}>
            {item.title === "About Me" ? (
              <Link to={`/${item.object_slug}/`}>
                <MdPerson size={33} />
                <p>{item.title}</p>
              </Link>
            ) : item.title === "Projects" ? (
              <Link to={`/${item.object_slug}/`}>
                <MdCode size={33} />
                <p>{item.title}</p>
              </Link>
            ) : item.title === "Home" ? (
              <Link to={`/${item.object_slug}/`}>
                <MdHome size={33} />
                <p>{item.title}</p>
              </Link>
            ) : null}
          </li>
        ))}
      </ul>
    </>
  )
}

export default FooterMenu

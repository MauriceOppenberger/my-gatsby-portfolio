import React from "react"
import { Link } from "gatsby"
import Img from "gatsby-image"
import SiteLogo from "./SiteLogo"

import { PortfolioItemWrapper } from "./styles/PorfolioItem"

const PortfolioItem = ({ portfolio }) => {
  const markUp = (
    <div className="blog">
      <div className="contentContainer">
        <div className="frontmatter">
          <div className="logo">
            <SiteLogo />
          </div>
          <div className="info">
            <p>Maurice Oppenberger</p>
            <p>{portfolio.date}</p>
          </div>
        </div>

        <div className="imgContainer">
          {portfolio.featured_media.title !== "default_fallback_image" ? (
            <Img
              className="image"
              fluid={portfolio.featured_media.localFile.childImageSharp.fluid}
            />
          ) : null}
        </div>
        <h2>{portfolio.title}</h2>

        <p className="excerpt">{portfolio.acf.excerpt}...</p>
        {/* <p className="stack">{portfolio.acf.excerpt}</p> */}
        <p className="role">{portfolio.acf.role}</p>
      </div>
    </div>
  )
  return (
    <PortfolioItemWrapper>
      {portfolio.acf.link ? (
        <a
          href={`https://${portfolio.acf.link}`}
          target="_blank"
          rel="noreferrer noopener"
          className="link"
        >
          {markUp}
        </a>
      ) : (
        <Link to={`/portfolio/${portfolio.slug}`} className="link">
          {markUp}
        </Link>
      )}
    </PortfolioItemWrapper>
  )
}

export default PortfolioItem

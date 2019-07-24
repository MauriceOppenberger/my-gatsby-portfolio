import React from "react"
import { Link } from "gatsby"
import Img from "gatsby-image"

import { PortfolioItemWrapper } from "./styles/PorfolioItem"

const PortfolioItem = ({ portfolio }) => (
  <PortfolioItemWrapper>
    <div className="blog">
      <div className="imgContainer">
        {portfolio.featured_media.title != "default_fallback_image" ? (
          <Img
            fluid={portfolio.featured_media.localFile.childImageSharp.fluid}
          />
        ) : null}
      </div>
      <div className="contentContainer">
        <div className="date">
          <p>{portfolio.date}</p>
        </div>
        <h2>{portfolio.title}</h2>

        <div
          dangerouslySetInnerHTML={{
            __html: portfolio.excerpt,
          }}
        />
        <Link to={`/portfolio/${portfolio.slug}`} className="link">
          Read More
        </Link>
      </div>
    </div>
  </PortfolioItemWrapper>
)

export default PortfolioItem

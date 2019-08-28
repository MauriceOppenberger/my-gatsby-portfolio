import React from "react"
import { Link } from "gatsby"
import Img from "gatsby-image"

import { PortfolioItemWrapper } from "./styles/PorfolioItem"

const PortfolioItem = ({ portfolio }) => (
  <PortfolioItemWrapper>
    <Link to={`/portfolio/${portfolio.slug}`} className="link">
      <div className="blog">
        <div className="imgContainer">
          {portfolio.featured_media.title !== "default_fallback_image" ? (
            <Img
              fluid={portfolio.featured_media.localFile.childImageSharp.fluid}
            />
          ) : null}
        </div>
        <div className="contentContainer">
          <h2>{portfolio.title}</h2>
          {/* <div
            dangerouslySetInnerHTML={{
              __html: portfolio.acf.excerpt,
            }}
          /> */}
          <p>{portfolio.acf.excerpt} &#123;...&#125;</p>
          <div className="date">
            <p>{portfolio.date}</p>
          </div>
        </div>
      </div>
    </Link>
  </PortfolioItemWrapper>
)

export default PortfolioItem

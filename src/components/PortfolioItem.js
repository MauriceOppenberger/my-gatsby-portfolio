import React from "react"
import { Link } from "gatsby"
import Img from "gatsby-image"

import { PortfolioItemWrapper } from "./styles/PorfolioItem"

const PortfolioItem = ({ portfolio }) => {
  return (
    <>
      <PortfolioItemWrapper>
        <div className="blog">
          <div className="imgContainer">
            {portfolio.featured_media.title !== "default_fallback_image" ? (
              <Img
                fluid={portfolio.featured_media.localFile.childImageSharp.fluid}
              />
            ) : null}
          </div>
          <div className="contentContainer">
            <p className="top">{portfolio.acf.role}</p>
            <h2>{portfolio.title}</h2>

            <p>{portfolio.acf.excerpt} &#123;...&#125;</p>
            <h3>Project details</h3>
            <ul>
              <li>{portfolio.acf.role}</li>
              <li>{portfolio.acf.collaboration.team_member.title}</li>
              <li>{portfolio.acf.client.title}</li>
            </ul>
            <Link to={`/portfolio/${portfolio.slug}`}>
              <div className="cta-btn">
                <a>More about the project!</a>
              </div>
            </Link>
          </div>
        </div>
      </PortfolioItemWrapper>
      {/* <div className="date">
        <p>{portfolio.date}</p>
      </div> */}
    </>
  )
}

export default PortfolioItem

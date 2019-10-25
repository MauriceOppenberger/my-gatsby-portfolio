import styled from "styled-components"

export const PortfolioWrapper = styled.div`
  width: 95vw;
  max-width: 1280px;
  margin: auto;
  .center {
    width: 100%;
    margin: auto auto 2.5rem auto;
    display: grid;
    grid-template-columns: 1fr;
  }
  .project-title {
    text-align: center;
  }
  .project-title h1 {
    margin: 2rem auto;
  }
  .project-details {
    text-align: left;
    margin: 1rem auto 3rem;
  }
  .project-details div {
    margin: 0.75rem auto;
    font-weight: 600;
    font-size: 0.9rem;

    grid-gap: 0.5rem;
  }
  .project-content ul li {
    font-size: 0.9rem;
  }

  .project-details div a:hover {
    color: blue;
  }
  .project-details div span:nth-child(1) {
    margin-right: 0.5rem;
  }
  .project-details div span:nth-child(2) {
    color: gray;
  }

  .explainer {
    max-width: 100%;
  }
  .explainer video {
    max-width: inherit;
  }
  .project-content h4 {
    text-transform: uppercase;
    color: gray;
    padding-top: 1.45rem;
  }
  .project-content .wp-block-image {
    text-align: center;
  }
  .project-content .wp-block-image img {
    margin: auto;
  }
  .project-content .wp-block-image figcaption {
    font-size: small;
    color: gray;
    text-transform: lowercase;
  }

  .project-subtitle {
    margin: 1rem auto;

    text-decoration: underline;
  }

  .project-media iframe {
    display: none;
  }
  .project-media .fixed-Img {
    width: 100%;
    height: 115vw;
  }
  a p {
    text-align: center;
    color: #000;
    text-decoration: underline;
  }

  .project-main {
    padding: 1rem 15px 0px 15px;
    background: #fff;
    z-index: 99;
  }
  @media screen and (min-width: 992px) {
    .project-media iframe {
      display: block;
      width: 100%;
      height: 650px !important;

      margin-top: 0rem;
    }

    .project-media .fixed-Img {
      height: 29vmax;
      max-height: 500px;
    }
    .project-media .fixed-Img picture img {
      object-fit: contain !important;
    }
    .project-media {
      margin: 2.5rem;
    }
    .project-inner {
      /* max-width: 75%; */
      margin: auto;
    }
    .center {
      width: 75%;
    }
  }
`

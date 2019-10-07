import styled from "styled-components"

export const PortfolioWrapper = styled.div`
  .center {
    width: 100%;
    margin: auto auto 2.5rem auto;
    display: grid;
    grid-template-columns: 1fr;
    grid-column-gap: 1rem;
    grid-row-gap: 2rem;
  }
  .project-title {
    margin-bottom: 2rem;
  }
  .project-details {
    text-align: left;
    margin: 1rem auto 3rem;
  }
  .project-details div {
    margin: 0.75rem auto;
    font-weight: 600;
    font-size: small;
    /* display: grid; */
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
    /* font-size: smaller; */
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

    /* font-size: 0.9rem; */
  }

  .project-media {
    height: initial;
    margin: 0;
    margin-bottom: 2rem;

    display: flex;
    justify-content: center;
  }
  .project-media iframe {
    height: 500px;
    width: 70%;
  }
  .project-media .fluid-Img {
    /* width: 52vw;
    height: 60vw; */
    width: 40vw;
    /* height: 580px; */
  }
  a p {
    text-align: center;
    color: #000;
    text-decoration: underline;
  }

  @media screen and (min-width: 992px) {
    .center {
      /* grid-template-columns: 0.8fr 1.1fr; */
    }

    /* .project-media iframe {
      position: fixed;
      right: 57vw;
      height: 650px !important;
      width: 37vw !important;
      top: 17vmin;
      margin-top: 0rem;
    } */
    /* .project-media .fixed-Img {
      position: fixed !important;
      width: 25vmax;
      height: 29vmax;
      top: 170px;
      right: 61%;
      max-width: 100%;
      max-height: 700px;
    } */
    .project-media {
      margin: 2.5rem;
    }
  }
  @media screen and (min-width: 1200px) {
    .center {
      width: 100%;
      /* max-width: 1170px; */
    }
    .project-inner {
      max-width: 90%;
    }
  }
`

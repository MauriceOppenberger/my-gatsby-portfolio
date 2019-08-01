import styled from "styled-components"

export const PortfolioWrapper = styled.div`
  .center {
    width: 100%;
    margin: auto auto 2.5rem auto;
    display: grid;
    grid-template-columns: 1fr;
    grid-column-gap: 0rem;
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
    margin: 1rem auto 1.5rem;
    font-weight: 600;
    font-size: 0.9rem;
    display: grid;
    grid-gap: 0.5rem;
  }
  .project-details div span:nth-child(1) {
    margin-right: 0.5rem;
  }
  .project-details div span:nth-child(2) {
    color: gray;
    font-size: smaller;
  }

  .project-subtitle {
    margin: 1rem auto;

    text-decoration: underline;

    /* font-size: 0.9rem; */
  }

  .project-media {
    height: max-content;
    margin: 2.5rem;
  }

  @media screen and (min-width: 992px) {
    .center {
      grid-template-columns: 0.85fr 1.15fr;
    }

    .project-media {
      position: sticky;
      top: 90px;
      padding-top: 5rem;
    }
  }
  @media screen and (min-width: 1200px) {
    .center {
      width: 100%;
      /* max-width: 1170px; */
    }
    .project-inner {
      max-width: 95%;
    }
  }

  img {
    max-width: 100%;
    max-height: 400px;
  }
`

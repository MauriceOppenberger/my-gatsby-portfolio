import styled from "styled-components"

export const PortfolioWrapper = styled.div`
  .center {
    width: 100%;
    margin: auto;
    display: grid;
    grid-template-columns: 1fr;
    grid-column-gap: 0rem;
    grid-row-gap: 2rem;
  }
  .project-details {
    text-align: left;
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
      top: 30vmin;
    }
  }
  @media screen and (min-width: 1200px) {
    .center {
      width: 100%;
      /* max-width: 1170px; */
    }
  }

  .project-inner {
    max-width: 90%;
    margin: auto;
  }

  img {
    max-width: 100%;
    max-height: 400px;
  }
`

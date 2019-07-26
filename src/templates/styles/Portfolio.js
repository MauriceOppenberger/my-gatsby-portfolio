import styled from "styled-components"

export const PortfolioWrapper = styled.div`
  h1 {
    text-align: center;
  }
  .center {
    width: 100%;
    margin: 3rem auto;
    display: grid;
    grid-template-columns: 1fr;
    grid-column-gap: 2rem;
    grid-row-gap: 2rem;
  }

  @media screen and (min-width: 992px) {
    .center {
      grid-template-columns: 1fr 1fr;
    }
    .links {
      width: 60vw;
    }
    .left {
      margin-top: 2.5rem;
    }
  }
  @media screen and (min-width: 1200px) {
    .center {
      width: 100%;
      /* max-width: 1170px; */
    }
  }

  .right {
    max-height: 500px;
    overflow: scroll;
  }
  .right::-webkit-scrollbar {
    display: none;
  }
  .inner {
    max-width: 90%;
    margin: auto;
  }

  img {
    max-width: 100%;
    max-height: 400px;
  }
`

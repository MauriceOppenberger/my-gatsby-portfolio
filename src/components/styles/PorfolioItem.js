import styled from "styled-components"

export const PortfolioItemWrapper = styled.div`
  .blog {
    box-shadow: var(--lightShadow);
    transition: var(--mainTransition);
    height: max-content;
    width: 100%;
  }
  .blog:hover {
    box-shadow: var(--darkShadow);
  }

  .img-container {
    position: relative;
    background: var(--primaryColor);
    transition: var(--mainTransition);
  }
  .img {
    transition: var(--mainTransition);
  }
  .img-container:hover .img {
    opacity: 0.3;
  }
  .contentContainer {
    display: none;
  }
  .contentContainer p {
    font-weight: 600;
    color: #000;
    font-size: 0.8rem;
    text-align: center;
    margin: 0.5rem auto;
    font-weight: 600;
  }

  .link {
    background: var(--mainWhite);
    opacity: 1;
    text-transform: capitalize;
    color: var(--mainBlack);
    margin: 0.5rem 0rem;
    display: flex;
    justify-content: flex-end;
    transition: var(--mainTransition);
    cursor: pointer;
  }
  .link:hover {
    background: var(--mainWhite);
    color: var(--primaryColor);
  }
  .img-container:hover .link {
    opacity: 1;
  }

  @media screen and (min-width: 992px) {
    .blog {
      display: grid;
    }
    .imgContainer {
      grid-row: 1;
      grid-column: 1;
      z-index: 100;
    }
    .contentContainer {
      background: #fff;
      display: block;
      grid-row: 2;
      grid-column: 1;
      margin: 0 !important;
      height: max-content;
      z-index: 101;
      text-align: center;
    }
    .date {
      float: right;
    }
    .date p {
      font-size: smaller;
    }
  }
`

import styled from "styled-components"

export const PortfolioItemWrapper = styled.div`
  .blog {
    /* box-shadow: var(--lightShadow); */
    transition: var(--mainTransition);
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
    margin: 1rem;
  }
  .contentContainer p {
    font-size: smaller;
  }

  .link {
    opacity: 1;
    text-transform: capitalize;
    color: var(--mainBlack);
    padding: 0.5rem 0rem;
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
`

import styled from "styled-components"

export const PortfolioItemWrapper = styled.div`
  .blog {
    /* box-shadow: var(--lightShadow); */
    box-shadow: rgba(0, 0, 0, 0.1) 0px 1px 4px;
    transition: var(--mainTransition);
    height: max-content;
    width: 100%;
    background-color: rgba(255, 255, 255, 1);
  }
  .blog:hover {
    box-shadow: var(--lightShadow);
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
    padding: 1rem;
  }
  .contentContainer p {
    font-weight: 600;
    color: #000;
    font-size: 0.8rem;
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
  .frontmatter {
    display: flex;
    align-items: center;
    margin-bottom: 2rem;
  }
  .frontmatter p {
    font-size: 0.8rem;
    font-weight: 600;
    margin: 0;

    color: #4a4949;
  }
  .frontmatter p:nth-child(2) {
    color: #656565;
    font-size: 0.7rem;
  }

  .frontmatter .logo {
    flex: 1;
    max-width: 50px;
    /* padding: 5px; */
    margin-right: 1rem;
  }
  .contentContainer h2 {
    color: #000;
    /* font-weight: 800; */
    font-size: 2rem;
  }
  .contentContainer .excerpt {
    color: #4a4949;
  }

  .contentContainer .role {
    color: #4a4949;
    padding: 10px;
    text-align: end;
  }
  .imgContainer {
    margin: 1rem;
  }

  @media screen and (min-width: 992px) {
    .blog {
      display: grid;
    }
    .contentContainer {
      background: #fff;
      display: block;
      grid-row: 2;
      grid-column: 1;
      margin: 0 !important;
      height: max-content;
      z-index: 101;
      text-align: left;
    }
    .imgContainer {
      grid-row: 1;
      grid-column: 1;
      z-index: 100;
    }
    .imgContainer .image {
      height: 250px;
      margin: 1rem;
    }
    .imgContainer .image img {
      object-position: top !important;
    }
  }
`

import styled from "styled-components"

export const PortfolioItemWrapper = styled.div`
  .blog {
    /* box-shadow: var(--lightShadow); */
    border: 2px solid;

    border-radius: 6px;
    border-color: rgb(210, 210, 210);
    box-shadow: rgba(0, 0, 0, 0.1) 0px 1px 4px;
    transition: var(--mainTransition);
    height: max-content;
    width: 100%;
    background-color: rgba(255, 255, 255, 1);
  }
  /* .blog:hover {
    box-shadow: var(--lightShadow);
  } */

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
    /* padding: 1rem; */
  }
  .contentContainer p {
    line-height: 1.5;
    color: #000;
    font-size: 0.8rem;
    margin: 0.5rem auto;
    font-weight: 600;
  }

  .link {
    font-size: 0.9rem;

    font-weight: 700;
    background: var(--mainWhite);
    opacity: 1;
    color: var(--mainBlack);
    /* display: flex;
    justify-content: flex-end; */
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
    font-size: 1.4rem;
    margin-bottom: 1rem;
  }
  .contentContainer .excerpt {
    color: #000;
  }

  .contentContainer .role {
    color: #4a4949;
    padding: 10px;
    text-align: end;
  }
  .imgContainer .image {
    border-bottom-left-radius: 20px;
    border-bottom-right-radius: 20px;
  }
  .imgContainer .image img {
    object-fit: contain !important;
    max-height: 100%;
  }
  .textContainer {
    margin: 1rem;
    padding: 0.5rem;
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
      height: 350px;
    }
  }
`

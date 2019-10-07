import styled from "styled-components"

export const PortfolioItemWrapper = styled.div`
  .top {
    text-transform: uppercase;
  }
  h2 {
    font-size: 2.5rem;
    margin-bottom: 2rem;
  }
  p {
    font-size: 1rem;
    color: #a29baf;
    line-height: 2;
  }
  h3 {
    font-size: 1.5rem;
    margin: 2.5rem 0;
  }
  ul {
    margin-left: 2rem;
  }
  ul li {
    font-size: 0.9rem;
    color: #a29baf;
    line-height: 2;
    font-weight: 600;
  }
  .blog {
    /* box-shadow: var(--lightShadow); */
    transition: var(--mainTransition);
    height: max-content;
    min-height: 500px;
  }
  .blog:hover {
    /* box-shadow: var(--darkShadow); */
  }

  .imgContainer {
    position: relative;
    height: max-content;
    margin: auto 0;
    background: var(--primaryColor);
    transition: var(--mainTransition);
  }
  .img {
    transition: var(--mainTransition);
  }
  .imgContainer:hover .img {
    opacity: 0.3;
  }
  .contentContainer {
    /* margin: 1rem 1rem; */
  }
  .contentContainer p {
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
  .cta-btn a {
    margin: 2.5rem 0;
    background-color: #001c3f;
    display: flex;
    justify-content: center;
    width: max-content;
    padding: 10px 35px;
    color: #fff;
    font-size: 1.1rem;
    font-weight: 600;
    border-radius: 30px;
    box-shadow: var(--lightShadow);
    transition: var(--mainTransition);
  }
  .cta-btn a:hover {
    box-shadow: var(--darkShadow);
  }

  @media screen and (min-width: 992px) {
    .blog {
      display: grid;
      grid-column-gap: 8%;
      grid-template-columns: 0.8fr 0.95fr;
      margin: 2rem 0;
    }
    .contentContainer {
      /* margin: auto 2rem !important; */
      /* max-width: 95%; */
    }

    .date {
      float: right;
    }
    .date p {
      font-size: smaller;
    }
  }
`

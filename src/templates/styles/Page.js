import styled from "styled-components"

export const PageWrapper = styled.div`
  .blurb {
    line-height: 2 !important;
    font-weight: 600;
    /* margin: 2rem 0; */
    font-size: 1rem;
    margin: 2rem 0 3rem;
  }
  .blurb a {
    color: blue;
    text-decoration: underline;
  }
  .stack td {
    /* display: flex;
    align-items: center;
    justify-content: space-between; */
    border: none;
  }
  .cta-btn a {
    display: flex;
    width: max-content;
    padding: 10px 15px;
    color: #fff;

    border-radius: 20px;
    box-shadow: var(--lightShadow);
    transition: var(--mainTransition);
  }
  .cta-btn a:hover {
    box-shadow: var(--darkShadow);
  }
  @media screen and (min-width: 992px) {
    h1 {
      /* max-width: 42%; */
    }
    .blurb {
      max-width: 75%;
    }
  }
  .status {
    font-size: 1.5rem;
    color: green;
    margin: 8rem 0 2rem auto;
    line-height: 1.5;
    font-weight: 700;
    /* text-align: center; */
    max-width: 600px;
  }
  .contact {
    margin: 0 0 4rem auto;
    max-width: 80%;
  }
  .projects {
    padding: 4rem 0;
  }
  .projects a {
    color: blue;
    text-decoration: underline;
  }
`

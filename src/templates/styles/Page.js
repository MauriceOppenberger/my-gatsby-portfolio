import styled from "styled-components"

export const PageWrapper = styled.div`
  width: 95vw;
  max-width: 1280px;
  margin: auto;

  h1 {
    font-size: 5vmax;
  }
  .blurb {
    line-height: 2 !important;
    font-weight: 600;
    /* margin: 2rem 0; */
    font-size: 0.9rem;
    margin: 2rem 0 3rem;
    max-width: 90vw;
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
    padding: 10px 35px;
    color: #fff;
    border-radius: 30px;
    box-shadow: var(--lightShadow);
    transition: var(--mainTransition);
  }
  .cta-btn a:hover {
    box-shadow: var(--darkShadow);
  }
  .contact h2 {
    font-size: 4vmax;
  }
  @media screen and (min-width: 992px) {
    .about {
      width: 90%;
    }
    .blurb {
      max-width: 80%;
      font-size: 1.1rem !important;
    }
    .contact {
      max-width: 50%;
      margin: 7rem 2vw 4rem auto;
    }
  }

  @media screen and (max-width: 992px) {
    .contact {
      max-width: 90%;
      margin: 5rem auto 8rem;
    }
  }
  .status {
    line-height: 2 !important;
    font-weight: 600;
    font-size: 1rem;
    /* font-size: 1.5rem; */
    color: green;
    /* margin-left: auto; */
    /* line-height: 1.5; */
    /* font-weight: 700; */
    /* text-align: center; */
    max-width: 600px;
  }

  .projects {
    padding: 4rem 0;
  }
  .projects a {
    color: blue;
    text-decoration: underline;
  }
`

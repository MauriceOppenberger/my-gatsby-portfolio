import styled from "styled-components"

export const PageWrapper = styled.div`
  .blurb {
    line-height: 2 !important;
    font-weight: 600;
    /* margin: 2rem 0; */
    font-size: 1rem;
    margin-bottom: 5rem;
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
  @media screen and (min-width: 992px) {
    h1 {
      max-width: 42%;
    }
    .blurb {
      max-width: 75%;
    }
  }
  .status {
    font-size: 2rem;
    color: green;
    margin: 4rem 0 2rem;
    line-height: 1.5;
    font-weight: 700;
    /* text-align: center; */
    max-width: 90%;
  }
  .contact {
    margin: 0 0 4rem;
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

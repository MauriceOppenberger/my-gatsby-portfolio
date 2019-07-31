import styled from "styled-components"

export const ContactWrapper = styled.div`
  .center {
    width: 100%;
    margin: 0 auto;
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
    .blurb {
      padding-right: 15vw;
      line-height: 2 !important;
      font-weight: 600;
      margin: 2rem auto 5rem;
      font-size: 1rem;
    }
    .contact-form {
      margin-bottom: 5rem;
    }
  }
  @media screen and (min-width: 767px) {
    .blurb {
      font-size: 0.9rem !important;
    }
    .center {
      margin: 5rem auto 0;
    }
  }

  .blurb {
    text-align: left;
    font-size: 0.7rem;
    line-height: 1.5;
  }
  .blurb a {
    /* text-transform: uppercase; */
    text-decoration: underline;
    color: blue;
  }

  .contact-form {
    display: block;
    justify-content: center;
    margin: auto;
    width: inherit;
    max-width: 80%;
  }

  .inner {
    max-width: 90%;
    margin: 100%;
  }
  .profile-image {
    max-height: 700px;
    overflow: hidden;
    margin-top: auto;
  }
  .profile-image figure.wp-block-image {
    display: flex;
    margin-bottom: 0px;
  }
  .profile-image figure.wp-block-image img {
    margin-bottom: 0px;
  }
`

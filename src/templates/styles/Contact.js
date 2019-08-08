import styled from "styled-components"

export const ContactWrapper = styled.div`
  .center {
    width: 100%;
    /* margin: 4rem auto 0; */
    display: grid;
    grid-template-columns: 100%;
    grid-column-gap: 0rem;
    grid-row-gap: 0rem;
    height: auto;
  }

  @media screen and (min-width: 992px) {
    .center {
      grid-template-columns: 1.2fr 0.8fr;
      height: 73vh !important;
    }
    .links {
      width: 60vw;
    }
    .blurb {
      /* padding-right: 15vw; */
      line-height: 2 !important;
      font-weight: 600;
      margin: 2rem auto 5rem;
      font-size: 1rem;
    }
  }
  @media screen and (min-width: 767px) {
    .blurb {
      font-size: 0.9rem !important;
    }
    .center {
      /* margin: 4rem auto 0; */
    }
    .social-media ul {
      display: flex !important;
      margin-left: 0;
    }
  }

  .blurb {
    text-align: left;
    /* font-size: 0.7rem; */
    line-height: 1.5;
    margin-bottom: 5rem;
  }
  .blurb a {
    /* text-transform: uppercase; */
    text-decoration: underline;
    color: blue;
  }

  .social-media {
    display: block;
    /* justify-content: center; */
    /* margin: 2rem 0; */
    width: inherit;
    /* max-width: 80%; */
  }
  .social-media ul {
    display: block;
    margin-left: 0;
  }

  .social-media li {
    display: flex;
    margin: 1.45rem 1.45rem 1rem 0;
  }
  .social-media a {
    display: flex;
    align-items: center;
    word-spacing: 5px;
  }
  .social-media a strong {
    margin: 0 10px;
  }

  .profile-image {
    max-height: 700px;
    overflow: hidden;
    margin-top: auto;
    border-bottom-right-radius: 200px;
  }
  .profile-image figure.wp-block-image {
    display: flex;
    margin-bottom: 0px;
  }
`

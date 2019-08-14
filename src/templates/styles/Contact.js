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

  .stack {
    display: flex;
    align-items: center;
    justify-content: space-between;
    /* width: 90%; */
    height: 120px;
  }
  .stack:nth-last-child(1) {
    margin-bottom: 2rem;
  }
  .stack .wp-block-column .wp-block-image figure img {
    width: 80px;
    height: auto;
    margin: 0;
  }
  .gatsby-image-wrapper {
    max-width: 400px;
    margin: auto;
    border-bottom-right-radius: 200px;
  }

  @media screen and (min-width: 992px) {
    .center {
      grid-template-columns: 0.7fr;
      min-height: 73vh !important;
      /* width: 60vw; */
    }
    .links {
      width: 60vw;
    }
    .blurb {
      /* padding-right: 15vw; */
      line-height: 2 !important;
      font-weight: 600;
      margin: 2rem auto 2rem;
      font-size: 1rem;
    }
    .profile-image {
      position: absolute;
      width: 400px;
      right: 5vw;
      bottom: 56px;
    }
    .social-media ul {
      position: fixed;

      z-index: 100;
      display: flex;
      flex-direction: column;
      left: 0;
      bottom: 56px;
      margin: 0 0 0 1vw;
      padding: 0px 16px;
    }
    .social-media li {
      width: 40px;
      display: flex;
      justify-content: center;
      margin: 1.45rem 0rem 1rem 0 !important;
      padding: 1rem 0;
    }
    .social-media li a svg {
      -webkit-transition: width, height 0.2s ease-out;
      -moz-transition: width, height 0.2s ease-out;
      -o-transition: width, height 0.2s ease-out;
      transition: width, height 0.2s ease-out;
    }
    .social-media li a svg:hover {
      width: 32px;
      height: 32px;
    }
  }
  @media screen and (min-width: 767px) {
    .center {
      /* margin: 4rem auto 0; */
    }
    /* .social-media ul {
      display: flex !important;
      margin-left: 0;
    } */
    .stack .wp-block-column .wp-block-image figure img {
      width: 130px;
      height: auto;
      margin: 0;
    }
    .stack:nth-last-child(1) {
      margin-bottom: 5rem;
    }
  }

  .blurb {
    text-align: left;
    font-size: 0.9rem;
    line-height: 2;
    margin-bottom: 5rem;
    font-weight: 600;
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
  @media screen and (max-width: 992px) {
    .social-media ul {
      display: flex;
      margin: auto;
      /* margin-left: 0; */
      justify-content: space-evenly;
      width: 80%;
    }
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

  .profile-image {
    height: auto;
    overflow: hidden;
    margin-top: auto;
  }
  .profile-image figure.wp-block-image {
    display: flex;
    margin-bottom: 0px;
  }
`

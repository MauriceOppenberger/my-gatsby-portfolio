import styled from "styled-components"

export const ContactWrapper = styled.div`
  .center {
    width: 100%;

    display: grid;
    grid-template-columns: 100%;
    grid-column-gap: 0rem;
    grid-row-gap: 0rem;
    height: auto;
  }
  .stack {
    display: grid;
    grid-template-columns: auto auto auto;
    margin: 3rem auto;
  }
  .stack li {
    align-items: center;
    display: flex;
    height: 100px;
  }
  .stack li figure img {
    width: 90px;
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
    }

    .links {
      width: 60vw;
    }
    .blurb {
      line-height: 2 !important;
      font-weight: 600;
      margin: 2rem auto 2rem;
      font-size: 1rem;
    }
    .profile-image {
      position: absolute;
      width: 400px;
      right: 10vw;
      bottom: 56px;
    }
    .social-media .social-icons {
      position: fixed;
      z-index: 100;
      display: flex;
      flex-direction: column;
      right: 0;
      bottom: 20%;
      margin: 0 3vw 0 0;
      padding: 0px 16px;
    }
    .social-media .social-icons li {
      width: 40px;
      display: flex;
      justify-content: center;
      margin: 1.45rem 0rem 1rem 0 !important;
      padding: 1rem 0;
    }
    .social-media .social-icons li a svg {
      -webkit-transition: width, height 0.2s ease-out;
      -moz-transition: width, height 0.2s ease-out;
      -o-transition: width, height 0.2s ease-out;
      transition: width, height 0.2s ease-out;
    }
    .social-media .social-icons li a svg:hover {
      width: 32px;
      height: 32px;
    }
    .stack {
      display: grid;
      grid-template-columns: auto auto auto auto;
    }

    .stack li figure img {
      width: 120px;
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
    text-decoration: underline;
    color: blue;
  }

  .social-media {
    display: block;

    width: inherit;
  }

  @media screen and (max-width: 992px) {
    .social-media .social-icons {
      display: flex;
      margin: auto;

      justify-content: space-evenly;
      width: 80%;
    }
  }

  .social-media .social-icons li {
    display: flex;
    margin: 1.45rem 1.45rem 1rem 0;
  }
  .social-media .social-icons li a {
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

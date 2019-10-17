import styled from "styled-components"

export const ContactWrapper = styled.div`
  width: 95vw;
  max-width: 1280px;
  margin: auto;

  .center {
    width: 100%;
  }
  h1 {
    font-size: 5vmax;
  }
  h3 {
    font-size: 1.8rem;
  }
  .technologies {
    display: flex;
    flex-wrap: wrap;
    margin: auto;
  }
  .technologies li {
    flex: 1 1 max-content;
    margin-right: 1.3rem;
    display: block;

    padding: 5px;
    /* border-bottom-right-radius: 10px;
    border-bottom-left-radius: 10px; */
  }
  .technologies li:nth-child(1) {
    border-bottom: 2px solid #20759b;
  }
  .technologies li:nth-child(2) {
    border-bottom: 2px solid #787cb5;
  }
  .technologies li:nth-child(3) {
    border-bottom: 2px solid #2a194b;
  }
  .technologies li:nth-child(4) {
    border-bottom: 2px solid #f58232;
  }
  .technologies li:nth-child(5) {
    border-bottom: 2px solid #83cd29;
  }
  .technologies li:nth-child(6) {
    border-bottom: 2px solid #3fa7bd;
  }
  .technologies li:nth-child(7) {
    border-bottom: 2px solid #734f95;
  }
  .technologies li:nth-child(8) {
    border-bottom: 2px solid #00d8ff;
  }
  .technologies li:nth-child(9) {
    border-bottom: 2px solid #ea25c0;
  }
  .technologies li:nth-child(10) {
    border-bottom: 2px solid #d92228;
  }
  .technologies li:nth-child(11) {
    border-bottom: 2px solid #ffd85f;
  }
  .technologies li:nth-last-child(1) {
    border-bottom: 2px solid #69b23f;
  }

  /* .stack {
    display: none;
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
  } */

  .gatsby-image-wrapper {
    max-width: 400px;
    margin: auto;
    border-bottom-right-radius: 200px;
  }

  @media screen and (min-width: 992px) {
    .center {
      max-width: 70%;
    }

    .links {
      width: 60vw;
    }
    .blurb {
      font-size: 1.1rem !important;
    }
    .profile-image {
      /* display: none; */
      position: absolute;
      width: 400px;
      right: 10vw;
      bottom: 86px;
    }
    .social-media .social-icons {
      position: fixed;
      z-index: 100;
      display: flex;
      flex-direction: column;
      height: 15%;
      justify-content: space-between;
      right: 0;
      bottom: 45%;
      margin: 0 3vw 0 0;
      padding: 0px 16px;
    }
    .social-media .social-icons li {
      width: 40px;
      display: flex;
      justify-content: center;
      margin: 0px !important;
      /* padding: 1rem 0; */
    }
    .social-media .social-icons li a svg {
      -webkit-transition: all 0.2s ease-out;
      -moz-transition: all 0.2s ease-out;
      -o-transition: all 0.2s ease-out;
      transition: all 0.2s ease-out;
    }
    .social-media .social-icons li a svg:hover {
      width: 32px;
      height: 32px;
    }
    .technologies {
      margin: 0 auto 0 0;
      max-width: 90%;
    }
    /* .stack {
      display: none;
      grid-template-columns: auto auto auto auto;
    }

    .stack li figure img {
      width: 120px;
    } */
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

  /* .profile-image {
    height: auto;
    overflow: hidden;
    margin-top: auto;
  }
  .profile-image figure.wp-block-image {
    display: flex;
    margin-bottom: 0px;
  } */
`

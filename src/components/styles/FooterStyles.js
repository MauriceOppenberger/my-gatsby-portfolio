import styled from "styled-components"

export const FooterWrapper = styled.footer`
  background: #000;
  color: #fff;
  text-align: center;
  padding: 40px 0;
  /* position: sticky;
  bottom: 0px;
  width: 100%; */

  h1 {
    font-family: "Content", Arial;
  }

  h3 {
    font-family: "Content", Arial;
    font-size: 24px;
    margin-bottom: 0px;
    font-weight: 200;
    letter-spacing: 1px;
    margin-bottom: 10px;
  }
  ul {
    margin: 0px;
    display: flex;
  }

  a {
    text-decoration: none;
    color: #fff;
    font-size: unset;
    font-family: "Content", Arial, Helvetica, sans-serif;
  }

  .social {
    text-align: center;
    display: block;
    padding: 10px 0 0 0;
  }

  .social img {
    width: 30px;
    height: auto;
    /* margin: 0 10px 0 0; */
    -webkit-transition: all 0.3s ease;
    -moz-transition: all 0.3s ease;
    -o-transition: all 0.3s ease;
    -ms-transition: all 0.3s ease;
    transition: all 0.3s ease;
  }

  .contact {
    margin-top: 0px;
    margin-bottom: 0px;
    font-family: Arial, Helvetica, sans-serif;
  }

  .social img:hover {
    opacity: 0.8;
    cursor: pointer;
  }

  .linkedin {
    margin-right: 5px;
  }

  .facebook {
    margin-left: 5px;
  }
  @media screen and (min-width: 1025px) {
    .footer-content {
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
    li {
      display: block;
      padding: 0px 10px;
      border-right: 1px solid;
      color: #e2e2e2;
      margin: 0px;
    }
    li:hover {
      color: #fff;
      text-decoration: underline;
    }
    li:nth-last-child(1) {
      border-right: none;
    }
  }

  @media screen and (max-width: 1024px) {
    position: sticky;
    bottom: 0px;
    width: 100%;
    ul {
      display: flex;
      justify-content: space-evenly;
    }
    a {
      text-decoration: none;
      color: #fff;
      font-weight: 600;
      font-family: "Content", Arial, Helvetica, sans-serif;
    }
    li {
      display: block;
    }
    .copy {
      display: none;
    }
  }
`

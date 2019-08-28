import styled from "styled-components"

export const FooterWrapper = styled.footer`
  background: transparent;
  color: #001c37;
  text-align: center;
  padding: 16px 0px;
  height: auto;
  display: flex;
  align-items: center;
  position: absolute;
  width: 100%;
  bottom: 0px;
  @media screen and (min-width: 994px) {
    .footer-content {
      display: block;
      justify-content: space-between;
      align-items: center;
      font-size: smaller;
    }
    ul {
      display: none;
    }

    .copy p {
      font-size: smaller;
      margin: auto;
    }
  }

  @media screen and (max-width: 993px) {
    position: sticky;
    bottom: 0px;
    width: 100%;
    padding: 0px;
    height: 56px !important;
    border-top-right-radius: 25px;
    border-top-left-radius: 25px;
    background: rgba(255, 255, 255, 255);

    ul {
      display: flex;
      justify-content: space-evenly;
      margin: 0;
    }
    a {
      text-decoration: none;
      color: #001c3f;
      font-weight: 400;
      font-family: "Content", Arial, Helvetica, sans-serif;
      line-height: 0.5;
    }
    li p {
      font-size: smaller;
    }
    li {
      display: flex;

      justify-content: center;
      align-items: center;
      margin: auto;
      font-size: small;
    }
    .copy {
      display: none;
    }
  }
`

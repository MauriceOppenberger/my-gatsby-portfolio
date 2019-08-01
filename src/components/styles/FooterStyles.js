import styled from "styled-components"

export const FooterWrapper = styled.footer`
  background: #fff;
  color: #001c37;
  text-align: center;
  /* padding: 10px 0; */
  /* position: sticky;
  bottom: 0px;
  width: 100%; */
  height: 75px;
  display: flex;
  align-items: center;
  position: absolute;
  width: 100%;
  bottom: 0;

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

    .copy {
      font-size: smaller;
    }
  }

  @media screen and (max-width: 993px) {
    position: sticky;
    bottom: 0px;
    width: 100%;
    padding: 0px;
    height: 56px !important;
    /* background-image: linear-gradient(to left, #001c37, #820521); */
    background: rgba(255, 255, 255, 0.9);
    ul {
      display: flex;
      justify-content: space-evenly;
      margin: 0;
    }
    a {
      text-decoration: none;
      color: #001c37;
      font-weight: 400;
      font-family: "Content", Arial, Helvetica, sans-serif;
    }
    li {
      display: flex;
      padding: 16px 0;
      justify-content: center;
      align-items: center;
      margin: auto;
      font-size: smaller;
    }
    .copy {
      display: none;
    }
  }
`

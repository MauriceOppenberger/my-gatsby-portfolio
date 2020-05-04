import styled from "styled-components"

export const HeaderWrapper = styled.header`
  background-color: #001c37;

  height: max-content;
  padding: 16px 0px;
  display: flex;
  align-items: center;
  position: fixed;
  z-index: 999;
  width: 100%;
  color: #001c37;
  h3 {
    color: #001c37;
  }
  .menu {
    display: flex;
    align-items: center;
  }
  .row {
    align-items: center;
  }

  .logoBox,
  .siteInfo,
  .navBar {
    width: max-content;
    display: flex;
    align-items: center;
  }

  .navBar {
    margin-left: auto;

    display: flex;
  }

  .container-fluid {
    max-width: 1800px;
  }
  .logo {
    height: auto;
    width: 3rem;

    margin-right: 1rem;
  }
  @media screen and (max-width: 992px) {
    height: 56px;
    background-color: #001c3f;
  }
  @media screen and (max-width: 390px) {
    padding: 0px;
    .navBar ul {
      margin: auto;
    }
  }
`

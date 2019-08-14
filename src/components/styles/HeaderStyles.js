import styled from "styled-components"

export const HeaderWrapper = styled.header`
  /* background-color: #001c37; */
  background-color: rgba(255, 255, 255, 0.8);
  margin-bottom: 2rem;
  height: 110px;

  /* border-bottom: 1px solid #e7e7e7; */
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
  }

  .navBar {
    margin-left: auto;
    /* padding-right: 15px; */
    display: flex;
  }

  .container-fluid {
    max-width: 1800px;
  }
  .logo {
    width: 85px;
    height: auto;
  }
  @media screen and (max-width: 992px) {
    height: 56px;
    background-color: #001c3f;
    /* height: 56px; */
    .siteInfo {
      display: none;
    }
    .logo {
      width: 40px;
    }
  }
  @media screen and (max-width: 390px) {
    padding: 0px;
    .navBar ul {
      margin: auto;
    }
  }
`

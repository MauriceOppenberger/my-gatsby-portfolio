import styled from "styled-components"

export const HeaderWrapper = styled.header`
  /* background-image: linear-gradient(to right, #001c37, #820521); */
  background-color: #001c37;
  margin-bottom: 1.45rem;
  min-height: 56px;
  height: 9vw;
  max-height: 110px;
  /* border-bottom: 1px solid #e7e7e7; */
  display: flex;
  align-items: center;
  position: fixed;
  z-index: 999;
  width: 100%;
  color: #fff;
  h3 {
    color: #fff;
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
    width: 90px;
    height: auto;
  }
  @media screen and (max-width: 992px) {
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

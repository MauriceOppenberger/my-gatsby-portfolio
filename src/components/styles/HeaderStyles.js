import styled from "styled-components"

export const HeaderWrapper = styled.header`
  background: #fff;
  margin-bottom: 1.45rem;
  height: 110px;
  border-bottom: 1px solid #e7e7e7;
  display: flex;
  align-items: center;
  position: fixed;
  z-index: 999;
  width: 100%;

  .menu {
    display: flex;
    align-items: center;
  }
  .row {
    align-items: center;
  }
  .container-fluid {
    max-width: 1800px;
  }
  .logo {
    width: 90px;
    height: auto;
  }
`

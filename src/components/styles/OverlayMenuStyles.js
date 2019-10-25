import styled from "styled-components"

export const Overlay = styled.div`
  width: 100%;
  height: 100%;
  position: fixed;
  opacity: ${props => (props.menuOpen ? "1" : "0")};
  transform: ${props =>
    props.menuOpen ? "translateX(0%)" : "translateX(+100%)"};
  z-index: 9999;

  left: 0px;
  padding: 20px;
  transition: all 0.3s ease;

  .inner {
    display: flex;
    flex-direction: column;
    align-items: center;

    background: rgba(0, 0, 0, 0.9);
    width: 100%;
    height: 100%;
    color: #fff;
    padding: 40px;

    .SiteLogo {
      max-width: 400px;
      width: 200px;
      margin: 40px 0 60px 0;
    }

    .overlayMenu {
      text-align: center;
      list-style-type: none;
      margin: 0;

      li {
        margin: 0 0 30px 0;
      }

      li.overlayActive {
        color: #d22e26;
      }

      a {
        font-family: "Content", Arial, Helvetica, sans-serif;
        font-size: 1.5rem;
        color: #fff;
        transition: all 0.3s ease;
        text-decoration: none;

        :hover {
          color: #d22e26;
        }
      }
    }
  }

  .closeButton {
    position: absolute;
    top: 50px;
    right: 50px;
    color: #fff;
    width: 30px;
    height: 30px;
    cursor: pointer;
    transition: all 1s ease;

    :hover {
      transform: rotate(180deg);
    }
  }
`

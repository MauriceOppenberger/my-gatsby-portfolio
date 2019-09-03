import styled from "styled-components"

export const NavWrapper = styled.nav`
  /* margin: 5px 0 10px 0; just to give some spacing */
  /* color: #212121; */
  color: #001c37;
  text-transform: uppercase;
  /* position: absolute; */
  /* right: 0px; */
  font-family: "Content", Arial, Helvetica, sans-serif;
  font-size: 0.7rem;
  font-weight: 700;
  letter-spacing: 1px;
  display: none;
  padding: 0 15px;
  /* background-color: rgba(255, 255, 255, 0.9); */

  .nav-active {
    color: #fff;
  }
  @media (min-width: 992px) {
    display: inline-block;
  }

  ul li {
    display: block;
    margin: 0 1vw 0 0;
    float: left;

    a {
      padding: 0 0 0 10px;
      transition: all 0.2s ease;
      color: #eee;
      text-decoration: none;
    }
    a:hover {
      color: #fff;
    }

    /* span {
      margin: 0 0 0 5px;
    } */
  }

  ul li:last-child {
    margin: 0;
  }

  ul li a:hover {
    /* color: #d22e26; */
    color: #fff;
  }
  @media screen and (max-width: 390px) {
    padding: 0px;
  }
`

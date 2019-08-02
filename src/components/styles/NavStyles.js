import styled from "styled-components"

export const NavWrapper = styled.nav`
  /* margin: 5px 0 10px 0; just to give some spacing */
  color: #212121;
  text-transform: uppercase;
  /* position: absolute; */
  /* right: 0px; */
  font-family: "Content", Arial, Helvetica, sans-serif;
  font-size: 0.8rem;
  font-weight: 700;
  letter-spacing: 1px;
  /* display: none; */
  padding: 0 15px;

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
      color: #e4e4e4;
      text-decoration: none;
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

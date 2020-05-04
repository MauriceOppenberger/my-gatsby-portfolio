import styled from "styled-components"

export const NavWrapper = styled.nav`
  color: #001c37;
  text-transform: uppercase;

  font-family: "Content", Arial, Helvetica, sans-serif;
  font-size: 0.7rem;
  font-weight: 700;
  letter-spacing: 1px;
  display: none;
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
      color: #eee;
      text-decoration: none;
    }
    a:hover {
      color: #fff;
    }
  }

  ul li:last-child {
    margin: 0;
  }

  ul li a:hover {
    color: #fff;
  }
  @media screen and (max-width: 390px) {
    padding: 0px;
  }
`

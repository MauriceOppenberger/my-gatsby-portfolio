import React from "react"
import PropsTypes from "prop-types"

import { HamburgerButton } from "./styles/HamburgerStyles"
import HamburgerHeart from "../images/heart_hamburger.svg"

const Hamburger = ({ handleOverlayMenu }) => (
  <HamburgerButton onClick={handleOverlayMenu} tabIndex="0">
    <img src={HamburgerHeart} alt="heart" />
  </HamburgerButton>
)
Hamburger.propTypes = {
  handleOverlayMenu: PropsTypes.func,
}

export default Hamburger

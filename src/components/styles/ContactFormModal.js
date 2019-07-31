import styled from "styled-components"

export const ModalWrapper = styled.div`
  top: 40%;
  left: 50%;
  transform: translate(-50%, -50%);
  position: absolute;
  width: 80%;
  max-width: 650px;
  background-color: #fff;
  border: 2px solid #000;
  box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2),
    0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);
  padding: 16px 32px 32px;
  outline: none;
`

export const ButtonWrapper = styled.button`
  background-color: #000;
  position: fixed;
  z-index: 2;
  right: 3vw;
  color: #fff;
  bottom: 3vw;
  border-radius: 100px;
  width: 80px;
  height: 80px;
`

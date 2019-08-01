import styled from "styled-components"

export const ModalWrapper = styled.div`
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  position: absolute;
  width: 35%;
  max-width: 650px;
  background-color: #fff;
  /* border: 2px solid #000; */
  box-shadow: 0px 14px 20px -9px rgba(0, 0, 0, 0.2),
    0px 32px 52px 4px rgba(0, 0, 0, 0.14),
    0px 12px 62px 11px rgba(0, 0, 0, 0.12);
  padding: 32px 32px;
  outline: none;

  @media screen and (max-width: 1024px) {
    width: 90%;
  }
`

export const ButtonWrapper = styled.button`
  background-color: #001c37;
  position: fixed;
  z-index: 2;
  right: 0;
  color: #fff;
  bottom: 56px;
  border-radius: 100px;
  border: none;
  width: auto;
  height: auto;
  margin: 0 3vw 0 0;
  padding: 16px 16px;

  :focus {
    outline: none;
  }
  .modal {
    width: 36px;
    height: 36px;

    display: flex;
    margin: auto;
  }
  .modal:hover {
    cursor: pointer;
  }
  @media screen and (max-width: 992px) {
    bottom: 56px;
    width: auto;
    height: auto;
    padding: 16px 16px;
    :focus {
      outline: none;
    }
    .modal {
      width: 32px;
      height: 32px;
    }
  }
  @media screen and (max-width: 667px) {
    bottom: 56px;
    width: auto;
    height: auto;
    padding: 16px 16px;
    margin: 0 16px 16px 0;

    :focus {
      outline: none;
    }
    .modal {
      width: 24px;
      height: 24px;
    }
  }
`

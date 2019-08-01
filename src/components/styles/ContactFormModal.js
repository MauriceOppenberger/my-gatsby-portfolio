import styled from "styled-components"

export const ModalWrapper = styled.div`
  top: 50%;
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
  background-color: transparent;
  position: fixed;
  z-index: 2;
  right: 0;
  color: #fff;
  bottom: 56px;
  border-radius: 100px;
  border: none;
  width: auto;
  height: auto;
  margin: 0 5vw 0 0;
  padding: 16px 16px;

  :focus {
    outline: none;
  }
  .modal {
    width: 44px;
    height: 44px;
    /* right: 70px;
    bottom: 0px; */
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

    :focus {
      outline: none;
    }
    .modal {
      width: 24px;
      height: 24px;
    }
  }

  /* background: #f7f7f7;
  height: 178px;
  width: 100%;
  margin: 25px;
  position: relative;
  overflow: hidden;
  border: 1px solid #ccc;
  border-left: 0px;

  :before {
    content: "";
    display: block;
    background: #fff;
    position: absolute;
    top: -150px;
    left: 0;
    width: 95vw;
    height: 275px;
    border-bottom-right-radius: 150px;
    border: 1px solid #ccc;
  } */
`

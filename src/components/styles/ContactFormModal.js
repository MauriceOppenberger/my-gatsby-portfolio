import styled from "styled-components"

export const ModalWrapper = styled.div`
  top: 0%;
  left: 50%;
  transform: translate(-50%, 5%);
  position: absolute;
  width: 100%;
  max-width: 650px;
  background-color: #fff;
  border: 2px solid #001c3f;
  border-radius: 10px;
  box-shadow: 0px 14px 20px -9px rgba(0, 0, 0, 0.2),
    0px 32px 52px 4px rgba(0, 0, 0, 0.14),
    0px 12px 62px 11px rgba(0, 0, 0, 0.12);
  padding: 32px 32px;
  outline: none;

  .greeting {
    font-style: italic;
    text-transform: capitalize;
  }

  @media screen and (max-width: 1024px) {
    width: 90%;
  }
  @media screen and (max-width: 992px) {
    transform: translate(-50%, 0%);
    width: 100%;
    padding: 12px 12px;
    h5 {
      margin: auto;
    }
  }
`

export const ButtonWrapper = styled.button`
  /* background-color: rgba(255, 255, 255, 0.5); */
  background-color: #fff;
  position: fixed;
  z-index: 2;
  right: 0;
  color: #fff;
  bottom: 72px;
  border-radius: 100px;
  border: none;
  width: auto;
  height: auto;
  margin: 0 3vw 0 0;
  padding: 16px 16px;
  transition: var(--mainTransition);

  :hover {
    box-shadow: var(--darkShadow);
  }
  :focus {
    outline: none;
  }
  .modal {
    width: 24px;
    height: 24px;

    display: flex;
    margin: auto;
  }
  .modal:hover {
    cursor: pointer;
  }
`

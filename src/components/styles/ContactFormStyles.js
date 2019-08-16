import styled from "styled-components"

export const ContactFormWrapper = styled.form`
  p {
    margin: 0.5rem 0;
  }

  label {
    font-weight: 600;
  }

  input {
    width: 100%;
    padding: 8px;
    border: 1px solid #001c3f;
    border-radius: 5px;
    box-shadow: var(--lightShadow);
  }
  textarea {
    width: 100%;
    padding: 8px;
    border: 1px solid #001c3f;
    height: 15vmax;
    border-radius: 5px;
    box-shadow: var(--lightShadow);
  }
  button {
    width: max-content;
    padding: 8px 25px;
    display: flex;
    margin: 1.45rem 0 0 auto;
    background-color: transparent;
    border: 1px solid #001c3f;
    border-radius: 5px;
    box-shadow: var(--lightShadow);
    transition: var(--mainTransition);
  }
  button:hover {
    background-color: #001c37;
    color: #fff;
    box-shadow: var(--darkShadow);
  }
  .hidden {
    display: none;
  }
  @media screen and (min-width: 992px) {
    p:nth-child(n + 3):nth-child(-n + 4) {
      width: 80%;
    }
  }
`

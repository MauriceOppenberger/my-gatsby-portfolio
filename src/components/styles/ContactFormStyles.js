import styled from "styled-components"

export const ContactFormWrapper = styled.form`
  max-width: 600px;
  margin-left: auto;
  p {
    margin: 0.5rem 0;
  }
  /* p:nth-child(n + 3):nth-child(-n + 4) {
    width: 80%;
  } */

  input {
    width: 100%;
    padding: 8px;
    border: 1px solid #001c3f;
    border-radius: 5px;
  }
  textarea {
    width: 100%;
    padding: 8px;
    border: 1px solid #001c3f;
    height: 130px;
    border-radius: 5px;
  }
  button {
    width: max-content;
    padding: 8px 25px;
    float: right;
    margin: 1.45rem auto;
    background-color: transparent;
    border: 1px solid #001c3f;
    border-radius: 5px;
  }
  button:hover {
    background-color: #001c37;
    color: #fff;
  }
  .hidden {
    display: none;
  }
`

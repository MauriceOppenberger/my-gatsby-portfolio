import styled from "styled-components"

export const ContactFormWrapper = styled.form`
  p {
    margin: 0px;
  }
  input {
    width: 100%;
    padding: 5px;
    border: 1px solid #820521;
  }
  textarea {
    width: 100%;
    padding: 5px;
    border: 1px solid #820521;
    height: 130px;
  }
  button {
    width: max-content;
    padding: 5px 25px;
    float: right;
    margin: 1.45rem auto;
    background-color: #da1b60;
  }
  button:hover {
    color: #fff;
  }
  .hidden {
    display: none;
  }
`

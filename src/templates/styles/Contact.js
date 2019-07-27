import styled from "styled-components"

export const ContactWrapper = styled.div`
  .center {
    width: 100%;
    margin: 5rem auto 0;
    display: grid;
    grid-template-columns: 1fr;
    grid-column-gap: 2rem;
    grid-row-gap: 2rem;
  }

  @media screen and (min-width: 992px) {
    .center {
      grid-template-columns: 1fr 1fr;
    }
    .links {
      width: 60vw;
    }
    .blurb {
      padding-right: 15vw;
      text-align: left !important;
      line-height: 2 !important;
    }
  }

  @media screen and (min-width: 1200px) {
    .center {
      width: 100%;
      /* max-width: 1170px; */
    }
  }

  .blurb {
    text-align: justify;
    margin: 2rem auto 5rem;

    line-height: 1.5;
    font-weight: 600;
  }
  .blurb a {
    text-transform: uppercase;
    text-decoration: underline;
    color: blue;
  }

  .right {
    display: block;
    justify-content: center;
    margin: auto;
    width: inherit;
    max-width: 80%;
  }
  .right input {
    width: 100%;
    padding: 5px;
    border: 1px solid #820521;
  }
  .right textarea {
    width: 100%;
    padding: 5px;
    border: 1px solid #820521;
    height: 130px;
  }
  .right input.wpcf7-form-control.wpcf7-submit {
    width: max-content;
    padding: 5px 25px;
    float: right;
    margin-bottom: 1.45rem;
    background-color: unset;
  }
  .right input.wpcf7-form-control.wpcf7-submit:hover {
    background-color: #da1b60;
    color: #fff;
  }

  .inner {
    max-width: 90%;
    margin: 100%;
  }
  .left {
    max-height: 700px;
    overflow: hidden;
    margin-top: auto;
  }
  .left figure.wp-block-image {
    display: flex;
    margin-bottom: 0px;
  }
  .left figure.wp-block-image img {
    margin-bottom: 0px;
  }
`

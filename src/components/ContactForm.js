import React, { useState } from "react"
import { navigate } from "gatsby-link"
import { ContactFormWrapper } from "./styles/ContactFormStyles"

function encode(data) {
  return Object.keys(data)
    .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
    .join("&")
}

export default function ContactForm(props) {
  const [state, setState] = useState({})

  const handleChange = e => {
    setState({ ...state, [e.target.name]: e.target.value })
  }
  const setName = e => {
    props.getName(e.target.value)
  }

  const handleSubmit = e => {
    e.preventDefault()
    const form = e.target
    fetch("/", {
      method: "POST",
      headers: { "Content-type": "application/x-www-form-urlencoded" },
      body: encode({
        "form-name": form.getAttribute("name"),
        ...state,
      }),
    })
      .then(() => navigate(form.getAttribute("action")))
      .catch(error => alert(error))
  }

  return (
    <>
      <ContactFormWrapper
        name="contact"
        method="POST"
        action="/success"
        netlify-honeypot="bot-field"
        data-netlify="true"
        onSubmit={handleSubmit}
      >
        <input type="hidden" name="form-name" value="contact" />
        <p className="hidden">
          <label>
            Don’t fill this out if you're human:{" "}
            <input name="bot-field" onChange={handleChange} />
          </label>
        </p>
        <p>
          <label>
            Name:{" "}
            <input
              type="text"
              name="name"
              onChange={handleChange}
              onKeyUp={setName}
              value={props.value}
            />
          </label>
        </p>
        <p>
          <label>
            Email: <input name="email" type="email" onChange={handleChange} />
          </label>
        </p>
        <p>
          <label>
            Message:{" "}
            <textarea name="message" onChange={handleChange}></textarea>
          </label>
        </p>
        <h5> i look forward hearing for you!</h5>
        <p>
          <button name="button" type="submit">
            Send
          </button>
        </p>
      </ContactFormWrapper>
    </>
  )
}

import React from "react"
import Layout from "../components/layout"
import { ContactWrapper } from "./styles/Contact"
import Img from "gatsby-image"

const contact = ({ pageContext }) => (
  <Layout>
    <ContactWrapper>
      <div dangerouslySetInnerHTML={{ __html: pageContext.content }} />
      <div className="center">
        <div className="left">
          <Img
            fluid={pageContext.featured_media.localFile.childImageSharp.fluid}
          />
        </div>
        <div className="right">
          <form
            name="contact"
            method="POST"
            netlify-honeypot="bot-field"
            data-netlify="true"
          >
            <p class="hidden">
              <label>
                Don’t fill this out if you're human:{" "}
                <input name="bot-field" name="form-name" value="contact" />
              </label>
            </p>
            <p>
              <label>
                Email: <input type="email" name="email" />
              </label>
            </p>
            <p>
              <label>
                Message: <textarea name="message"></textarea>
              </label>
            </p>
            <div data-netlify-recaptcha="true"></div>
            <p>
              <button type="submit">Send</button>
            </p>
          </form>
        </div>
      </div>
    </ContactWrapper>
  </Layout>
)

export default contact

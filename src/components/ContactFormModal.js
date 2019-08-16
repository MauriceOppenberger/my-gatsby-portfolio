import React, { useState } from "react"
import Modal from "@material-ui/core/Modal"
import ContactForm from "./ContactForm"
import { ButtonWrapper, ModalWrapper } from "./styles/ContactFormModal"
import { MdChat } from "react-icons/md"

export default function ContactModal() {
  const [open, setOpen] = useState(false)
  const [name, setName] = useState("...")

  const handleOpen = () => {
    setOpen(!open)
  }

  const handleClose = () => {
    setOpen(false)
  }

  const getName = value => {
    const originalString = value
    const splitString = originalString.split(" ")
    const firstName = splitString[0]
    setName(firstName)
  }

  return (
    <div>
      <ButtonWrapper type="button" onClick={handleOpen}>
        <MdChat color="#001c37" className="modal" />
      </ButtonWrapper>
      <Modal
        aria-labelledby="contact-modal-title"
        aria-describedby="contact-modal-form"
        open={open}
        onClose={handleClose}
        contentLabel="Contact Form"
      >
        <ModalWrapper>
          <h2 id="contact-modal-title">
            <span className="greeting">Hey {name},</span>{" "}
          </h2>

          <div id="contact-modal-form">
            <ContactForm getName={getName} />
          </div>
        </ModalWrapper>
      </Modal>
    </div>
  )
}

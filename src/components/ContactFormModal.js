import React, { useState } from "react"
import Modal from "@material-ui/core/Modal"
import ContactForm from "./ContactForm"
import { ButtonWrapper, ModalWrapper } from "./styles/ContactFormModal"
import { FaFeatherAlt } from "react-icons/fa"

export default function ContactModal() {
  const [open, setOpen] = useState(false)

  const handleOpen = () => {
    setOpen(!open)
  }

  const handleClose = () => {
    setOpen(false)
  }

  return (
    <div>
      <ButtonWrapper type="button" onClick={handleOpen}>
        <FaFeatherAlt color="#001c37" className="modal" />
      </ButtonWrapper>
      <Modal
        aria-labelledby="contact-modal-title"
        aria-describedby="contact-modal-form"
        open={open}
        onClose={handleClose}
        contentLabel="Contact Form"
      >
        <ModalWrapper>
          <h2 id="contact-modal-title">Get in Touch</h2>
          <div id="contact-modal-form">
            <ContactForm />
          </div>
        </ModalWrapper>
      </Modal>
    </div>
  )
}

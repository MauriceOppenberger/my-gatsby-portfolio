import React, { useState } from "react"
import Modal from "@material-ui/core/Modal"
import ContactForm from "./ContactForm"
import { ButtonWrapper, ModalWrapper } from "./styles/ContactFormModal"
import { MdChat } from "react-icons/md"

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
          <h1 id="contact-modal-title">Hi there, </h1>
          <h3> i would love to hear from you!</h3>
          <div id="contact-modal-form">
            <ContactForm />
          </div>
        </ModalWrapper>
      </Modal>
    </div>
  )
}

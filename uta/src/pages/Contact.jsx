import React, { useState, useRef } from "react"
import emailjs from "emailjs-com"

import classes from "../styles/Contact.module.scss"

const Contact = () => {
  const formRef = useRef()
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })

  const [formSubmitted, setFormSubmitted] = useState(false)

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData({
      ...formData,
      [name]: value,
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    if (
      formData.name &&
      formData.email &&
      formData.subject &&
      formData.message
    ) {
      emailjs
        .sendForm(
          "service_e2d897n",
          "template_xfsfzah",
          formRef.current,
          "P-sO39xat5x-1gd3i"
        )
        .then(
          (result) => {
            console.log(result.text)
            setFormSubmitted(true)
            setFormData({ name: "", email: "", subject: "", message: "" })
          },
          (error) => {
            console.error(error.text)
          }
        )
    } else {
      alert("Please fill in all fields.")
    }
  }

  const handleReset = () => {
    setFormSubmitted(false)
  }

  return (
    <div className={classes.contactBody}>
      <div
        className={`container col-lg-10 col-xl-8 col-md-12 col-11 col-sm-8 ${classes.contactContainer}`}
      >
        <div>
          <h1 className={`pt-5 text-center ${classes.contactHeading}`}>
            Contact Us
          </h1>
        </div>

        <div className={`text-center mt-3 ${classes.contactText}`}>
          <p>Fill in the form if you have any questions or inquiries.</p>
          <p>
            You can also contact us directly at{" "}
            <a
              className="text-dark"
              target="_blank"
              href="mailto: bastionuta@gmail.com"
            >
              bastionuta@gmail.com
            </a>
            .
          </p>
        </div>

        <div>
          <form
            ref={formRef}
            onSubmit={handleSubmit}
            className={classes.contactForm}
          >
            <div className={`mb-3 ${classes.formGroup}`}>
              <label htmlFor="name" className={`form-label ${classes.label}`}>
                Name
              </label>
              <input
                type="text"
                className={`form-control ${classes.input}`}
                id="name"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                required
              />
            </div>
            <div className={`mb-3 ${classes.formGroup}`}>
              <label htmlFor="email" className={`form-label ${classes.label}`}>
                Email
              </label>
              <input
                type="email"
                className={`form-control ${classes.input}`}
                id="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                required
              />
            </div>
            <div className={`mb-3 ${classes.formGroup}`}>
              <label
                htmlFor="subject"
                className={`form-label ${classes.label}`}
              >
                Subject
              </label>
              <input
                type="text"
                className={`form-control ${classes.input}`}
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleInputChange}
                required
              />
            </div>
            <div className={`mb-3 ${classes.formGroup}`}>
              <label
                htmlFor="message"
                className={`form-label ${classes.label}`}
              >
                Message
              </label>
              <textarea
                className={`form-control ${classes.input}`}
                id="message"
                name="message"
                rows="4"
                value={formData.message}
                onChange={handleInputChange}
                required
              ></textarea>
            </div>
            <button
              type="submit"
              className={`btn btn-primary text-white ${classes.button}`}
            >
              Send Message
            </button>
          </form>
          {formSubmitted && (
            <div className={classes.messageBox}>
              <div className={classes.centeredBox}>
                <div className={classes.messageContent}>
                  <p className="fw-bold">Message Sent.</p>
                  <p>We will get back to you as soon as possible!</p>
                  <div className="pt-3">
                    <button
                      className={`btn ${classes.secondaryButton}`}
                      onClick={handleReset}
                    >
                      Close
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default Contact

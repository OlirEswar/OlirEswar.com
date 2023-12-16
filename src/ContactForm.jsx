import { useState } from "react";
import "./ContactForm.css";

function ContactForm() {
  /* Change to use spread operator in the future */
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [emailAddress, setEmailAddress] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  return (
    <form>
      <label className="contact-form__title">Contact Me</label>
      <div className="contact-form__name">
        <div className="contact-form__first-name">
          <label>First Name</label>
          <input
            type="text"
            required
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
          />
        </div>
        <div className="contact-form__last-name">
          <label>Last Name</label>
          <input
            type="text"
            required
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
          />
        </div>
      </div>
      <div className="contact-form__email-info">
        <div className="contact-form__email-address">
          <label>Email Address</label>
          <input
            type="text"
            required
            value={emailAddress}
            onChange={(e) => setEmailAddress(e.target.value)}
          />
        </div>
        <div className="contact-form__email-subject">
          <label>Subject</label>
          <input
            type="text"
            required
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
          />
        </div>
      </div>
      <div className="contact-form__message">
        <label>Message</label>
        <textarea
          required
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        ></textarea>
      </div>
      <div className="contact-form__button">
        <button id="send-button">Send</button>
      </div>
    </form>
  );
}

export default ContactForm;

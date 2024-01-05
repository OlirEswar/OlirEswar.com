import { useState, useRef, useEffect } from "react";
import emailjs from "@emailjs/browser";
import "./ContactForm.css";

function ContactForm() {
  //public key
  useEffect(() => emailjs.init("W7M4Za3DV60DRw_Iq"), []);

  /* Change to use spread operator in the future */
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [emailAddress, setEmailAddress] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  const handleClick = async (e) => {
    e.preventDefault();
    const serviceId = "service_0una5ce";
    const templateId = "template_861pc97";
    try {
      if (
        firstName.length == 0 ||
        lastName.length == 0 ||
        emailAddress.length == 0 ||
        subject.length == 0 ||
        message.length == 0
      ) {
        throw new Error("Please fill out all fields!");
      }
      await emailjs.send(serviceId, templateId, {
        to_name: "Olir",
        from_name: firstName + " " + lastName,
        reply_to: emailAddress,
        subject: subject,
        message: message,
      });
      alert("Thank you! I've received your email");
      setFirstName("");
      setLastName("");
      setEmailAddress("");
      setSubject("");
      setMessage("");
    } catch (error) {
      console.log(error);
      alert(
        "Uh oh, looks like something went wrong. Please try again later.\n" +
          error
      );
    }
  };

  return (
    <form>
      <label className="contact-form__title">Email Me</label>
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
        <button id="send-button" onClick={handleClick}>
          Send
        </button>
      </div>
    </form>
  );
}

export default ContactForm;

import "./Contact.css";

function Contact() {
  return (
    <div className="contact-container">
      <div className="contact-container__info">
        <h1>Email</h1>
        <div className="contact-container__info__email">
          <h2>olireasu@gmail.com</h2>
          <h2>oliravan.eswaramoorthy.ug@dartmouth.edu</h2>
          <h2>oeswaramoorthy@vassar.edu</h2>
        </div>
        <h1>Phone</h1>
        <h2>(516) 287-8286</h2>
        <h1>Social Media</h1>
        <h2>Linkedin: Oliravan Eswaramoorthy</h2>
        <h2>Github: OlirEswar</h2>
      </div>
      <div className="contact-container__form"></div>
    </div>
  );
}

export default Contact;

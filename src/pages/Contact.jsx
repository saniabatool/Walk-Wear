import "./Contact.css";

function Contact() {
  return (
    <div className="contact-page">

      <h1 className="contact-title">
        Contact
      </h1>

      <form className="contact-form">

        <div className="row">
          <input
            type="text"
            placeholder="Name"
          />

          <input
            type="email"
            placeholder="Email *"
          />
        </div>

        <input
          type="text"
          placeholder="Phone number"
        />

        <textarea
          rows="6"
          placeholder="Comment"
        ></textarea>

        <button type="submit">
          Send
        </button>

      </form>

    </div>
  );
}

export default Contact;
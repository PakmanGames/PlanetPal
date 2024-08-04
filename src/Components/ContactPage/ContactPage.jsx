import { useRef, useState } from 'react'
import emailjs from '@emailjs/browser'
import './ContactPage.css'

const SERVICE_ID = import.meta.env.VITE_SERVICE_ID;
const TEMPLATE_ID = import.meta.env.VITE_TEMPLATE_ID;
const PUBLIC_KEY = import.meta.env.VITE_PUBLIC_KEY;

function ContactPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  const emailInfoReference = useRef({
    name: name,
    email: email,
    subject: subject,
    message: message,
  });

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .send(`${SERVICE_ID}`, `${TEMPLATE_ID}`, {
        name: name,
        email: email,
        subject: subject,
        message: message,
      }, {
        publicKey: `${PUBLIC_KEY}`,
      })
      .then(
        () => {
          console.log('SUCCESS!');
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );

      setName("");
      setEmail("");
      setSubject("");
      setMessage("");
  };

  const handleNameChange = (e) => {
    setName(e.target.value);
    emailInfoReference.current.name = String(name);
    console.log(name);
  }

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
    emailInfoReference.current.email = String(email);
  }

  const handleSubjectChange = (e) => {
    setSubject(e.target.value);
    emailInfoReference.current.subject = String(subject);
  }

  const handleMessageChange = (e) => {
    setMessage(e.target.value);
    emailInfoReference.current.message = String(message);
  }

  return(
    <div className="email-box">
        <div className="title"><h1>Questions or Concerns? Contact Us!</h1></div>
        <div className="email-subject">
            <input type="name" placeholder="Name" className="name" value={name} onChange={(e) => handleNameChange(e)}/>
            <input type="email" placeholder="Email" className="email" value={email} onChange={(e) => handleEmailChange(e)}/>
        </div>
        <input type="text" placeholder="Subject" className="subject" value={subject} onChange={(e) => handleSubjectChange(e)}/>
        <textarea type="text" placeholder="Message" className="message-box" value={message} onChange={(e) => handleMessageChange(e)}></textarea>
        <button className="send-mail" onClick={(e) => sendEmail(e)}>Send</button>
        <div className="warning"></div>
    </div>
  );
}

export default ContactPage

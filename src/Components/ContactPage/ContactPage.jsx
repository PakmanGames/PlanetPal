import './ContactPage.css'

function ContactPage() {
  return(
    <div className="email-box">
        <div className="title"><h1>Questions or Concerns? Contact Us!</h1></div>
        <div className="email-subject">
            <input type="name" placeholder="Name" className="name" />
            <input type="email" placeholder="Email" className="email" />
        </div>
        <input type="text" placeholder="Subject" className="subject" />
        <textarea type="text" placeholder="Message" className="message-box"></textarea>
        <button className="send-mail">Send</button>
        <div className="warning"></div>
    </div>
  );
}

export default ContactPage

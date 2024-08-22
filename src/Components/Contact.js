import React, { useRef , useState} from 'react';
import emailjs from '@emailjs/browser';
import "./Contact.css"
import { FaEnvelope } from 'react-icons/fa';
export const Contact = () => {
  const form = useRef();
  const [message, setMessage] = useState('');
  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm('service_o06i9of', 'template_043yoph', form.current, {
        publicKey: 'HaQYq3fmat6ts9EFh',
      })
      .then(
        () => {
          setMessage('Email sent successfully!');
          form.current.reset(); // Optional: Reset form fields
        },
        (error) => {
          setMessage(`Failed to send email: ${error.text}`);
        }
      );
  };
  return (
    <div className="contact-container">
      <form ref={form} onSubmit={sendEmail}>
        <label>Name</label>
        <input type="text" name="user_name" />
        <label>Email</label>
        <input type="email" name="user_email" />
        <label>Message</label>
        <textarea name="message" />
        <div style={{ fontSize: '40px' }}>
        <FaEnvelope title="Email" />
        </div>
        <input type="submit" value="Send" />
      </form>
      {message && (
        <div className={`message ${message.includes('successfully') ? 'success' : 'error'}`}>
          {message}
        </div>
      )}
    </div>
  );
};
export default Contact;
import React, { useRef } from 'react'
import "./contact.css"
import {MdOutlineEmail} from "react-icons/md"
import {RiMessengerLine} from "react-icons/ri"
import {BsWhatsapp} from "react-icons/bs"
import emailjs from "emailjs-com";

const Contact = () => {

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_s23xhpw', 'template_dggws7s', form.current, 'ykPsbzGsj3F7Jyyh0')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });

      e.target.reset()
  };



  return (
    <section id="contact">
    <h5>Get In Touch</h5>
    <h2>Contact Me</h2>

    <div className="container contact__container">

      <div className="contact__options">
        <article className="contact__option">
          <MdOutlineEmail className='contact__option-icon'/>
          <h4>Email</h4>
          <h5>YoussefDhaouu@gmail.com</h5>
          <a href="mailto:YoussefDhaouu@gmail.com" rel="noreferrer" target="_blank">Send a message</a>
        </article>

        <article className="contact__option">
          <RiMessengerLine className='contact__option-icon'/>
          <h4>Messenger</h4>
          <h5>youssefDhaou</h5>
          <a href="https://m.me/youssef.dhaou.10" rel="noreferrer" target="_blank">Send a message</a>
        </article>

        <article className="contact__option">
          <BsWhatsapp className='contact__option-icon'/>
          <h4>WhatsApp</h4>
          <h5>+21625497397</h5>
          <a href="https://api.whatsapp.com/send?phone=21625497397" rel="noreferrer" target="_blank">Send a message</a>
        </article>

      </div>

{/* END OF CONTACT OPTIONS */}

      <form ref={form} onSubmit={sendEmail}>
<input type="text" name="name" placeholder='Your FullName' required />
<input type="email" name="email" placeholder='Your Email' />
<textarea name="message" rows="7" placeholder='Your Message' required></textarea>
     <button type='submit' className='btn btn-primary'>Send Message</button>
      </form>
    </div>
    </section>
  )
}

export default Contact
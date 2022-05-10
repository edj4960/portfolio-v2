import { faPaperPlane } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';
import Element from 'react-scroll/modules/components/Element';
import { CONTACT_PAGE } from '../../Constants';

import './Contact.scss';

const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const sendForm = () => {
    console.log(name, email, message);
  }

  return (
    <Element name={CONTACT_PAGE.name} id='contact-page' className='page txt-light'>
      <div id="title_div">
        <h1 className='txt-light'>CONTACT</h1>
        <h2 className='txt-grey mb-5'>Let's build something amazing</h2>
        <p>evan.jones@outlook.com</p>
      </div>
      <div id="contact_form">
        <div className='form-section'>
          <p className='section-title'>NAME</p>
          <input
            type="text"
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className='form-section'>
          <p className='section-title'>EMAIL</p>
          <input
            type="text"
            onChange={(e) => setEmail(e.target.value) }
          />
        </div>
        <div className='form-section'>
          <p className='section-title'>MESSAGE</p>
          <textarea
            type="text"
            onChange={(e) => setMessage(e.target.value) }
          />
        </div>
        <button onClick={sendForm}>
          Send{" "}
          <FontAwesomeIcon icon={faPaperPlane} />
        </button>
      </div>
    </Element>
  )
}

export default Contact;
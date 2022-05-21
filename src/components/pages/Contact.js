import { faPaperPlane, faCircleNotch } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';
import Element from 'react-scroll/modules/components/Element';
import { CONTACT_PAGE } from '../../Constants';
import emailjs from '@emailjs/browser';
import { EMAIL_JS_TEMPLATE_ID } from '../../Constants';

import './Contact.scss';
import TextAnimation from '../../animations/TextAnimation';

const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [showErrors, setShowErrors] = useState(false);
  const [isSending, setIsSending] = useState(false);
  const [sendingComplete, setSendingComplete] = useState(false);

  const sendForm = async () => {
    const form = { name, email, message };

    if (!name || !email || !message) {
      setShowErrors(true);
      return;
    }

    setIsSending(true);
    const startTime = new Date();
    const result = await emailjs.send(`gmail`, EMAIL_JS_TEMPLATE_ID, form, process.env.REACT_APP_EMAIL_JS_PUBLIC_KEY);
    if (result?.status === 200) {
      const endTime = new Date();
      const timeDiff = (endTime.getTime() - startTime.getTime());
      const maxTimeout = 3000;
      const timeOut = timeDiff < maxTimeout ? maxTimeout - timeDiff : 0;
      console.log(timeDiff, timeOut);

      setTimeout(() => {
        setSendingComplete(true);
        setIsSending(false);
      }, timeOut);
    } else {
      setIsSending(false);

    }
  }

  return (
    <Element name={CONTACT_PAGE.name} id='contact-page' className='page txt-light'>
      <div id="title_div">
        <h1 className='txt-light'>CONTACT</h1>
        <h2 className='txt-grey mb-5'>Let's build something amazing</h2>
        <p>evan.jd@outlook.com</p>
      </div>
      <div id="contact_form">
        {
          !sendingComplete ?
            <>
              <div className='form-section'>
                <p className='section-title'>NAME</p>
                <input
                  type="text"
                  maxLength="35"
                  onChange={(e) => setName(e.target.value)}
                />
                {(!name && showErrors) && <p className='error'>Please enter your name</p>}
              </div>
              <div className='form-section'>
                <p className='section-title'>EMAIL</p>
                <input
                  type="text"
                  maxLength="35"
                  onChange={(e) => setEmail(e.target.value) }
                />
                {(!email && showErrors) && <p className='error'>Please enter your email</p>}
              </div>
              <div className='form-section'>
                <p className='section-title'>MESSAGE</p>
                <textarea
                  type="text"
                  maxLength="400"
                  onChange={(e) => setMessage(e.target.value) }
                />
                {(!message && showErrors) && <p className='error'>Please enter a message</p>}
              </div>
              <button
                onClick={sendForm}
                disabled={isSending}
                className="d-flex align-items-center justify-content-between"
                style={{width: isSending ? '190px' : '150px'}}
              >
                <span className='mr-3'>
                  <TextAnimation
                    textArray={['Send', 'Sending']}
                    index={!isSending ? 0 : 1}
                    updateDelay={250}
                    delayIncrement={.05}
                  />
                </span>
                {
                  isSending ?
                    <FontAwesomeIcon icon={faCircleNotch} className="rotate" />
                    :
                    <FontAwesomeIcon icon={faPaperPlane} />
                }
              </button>
            </>
          :
          <div>Sent Message</div>
        }
      </div>
    </Element>
  )
}

export default Contact;
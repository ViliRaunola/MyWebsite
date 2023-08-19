import React from 'react';
import './ContactSection.css';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import emailjs from '@emailjs/browser';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useForm } from 'react-hook-form';

toast.configure();

function ContactSection({ reference }) {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm();

  const sendEmail = (data, e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        // eslint-disable-next-line no-undef
        process.env.REACT_APP_MAIL_SERVICE,
        // eslint-disable-next-line no-undef
        process.env.REACT_APP_MAIL_TEMPLATE,
        e.target,
        // eslint-disable-next-line no-undef
        process.env.REACT_APP_MAIL_KEY
      )
      .then(
        () => {
          toast('Message has been sent!');
        },
        (error) => {
          console.log(error.text);
        }
      );

    e.target.reset();
  };

  return (
    <div ref={reference} className="contactsection">
      <h1 style={{ paddingTop: '0.3em' }}>Contact Me</h1>

      <div className="contact-container">
        <div className="info-item-container">
          <div className="contact-info-item">
            <GitHubIcon
              style={{
                margin: '0.2em',
                width: '20',
                height: '20'
              }}
            />
            <a
              className="underline_link"
              style={{ color: 'black' }}
              href="https://github.com/ViliRaunola"
              target="_blank"
              rel="noreferrer">
              <h5 style={{ margin: '0.2em' }}>GitHub</h5>
            </a>
          </div>
          <div className="contact-info-item">
            <LinkedInIcon
              style={{
                margin: '0.2em',
                width: '20',
                height: '20'
              }}
            />
            <a
              className="underline_link"
              style={{ color: 'black' }}
              href="https://www.linkedin.com/in/vili-raunola-614920260/"
              target="_blank"
              rel="noreferrer">
              <h5 style={{ margin: '0.2em' }}>LinkedIn</h5>
            </a>
          </div>
        </div>

        <div className="form-container">
          <form onSubmit={handleSubmit(sendEmail)}>
            <div className="form-group">
              <label htmlFor="name">Your name</label>
              <input
                className="form-input"
                type="text"
                id="name"
                name="name"
                // eslint-disable-next-line react/jsx-props-no-spreading
                {...register('name', { required: true })}
              />
              {errors.name && <p className="error-message">Name is needed!</p>}
            </div>

            <div className="form-group">
              <label htmlFor="email">Your email</label>
              <input
                className="form-input"
                type="text"
                id="email"
                name="email"
                // eslint-disable-next-line react/jsx-props-no-spreading
                {...register('email', {
                  pattern:
                    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                  required: true
                })}
              />
              {errors.email && (
                <p className="error-message">Email is needed!</p>
              )}
            </div>

            <div className="form-group">
              <label htmlFor="text">Your message</label>
              <textarea
                className="form-input-message"
                type="text"
                id="message"
                name="message"
                // eslint-disable-next-line react/jsx-props-no-spreading
                {...register('message', { required: true })}
              />
              {errors.message && (
                <p className="error-message">Message is needed!</p>
              )}
            </div>

            <button className="button-3" type="submit">
              Send
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default ContactSection;

import React from 'react'
import './ContactSection.css'
import {GoLocation, GoDeviceMobile, GoMail} from 'react-icons/go'


function ContactSection({reference}) {
    return (
      <div ref={reference} className='contactsection'>
          <h1>Contact Me</h1>

          <div className='contact-container'>
            <div className='info-item-container'>

              <div className='contact-info-item'>
                <GoLocation style={{margin: '0.2em', width: '20', height: '20'}}></GoLocation>
                <h5 style={{margin: '0.2em'}}>Lappeenranta</h5>
              </div>

              <div className='contact-info-item'>
                <GoDeviceMobile style={{margin: '0.2em', width: '20', height: '20'}}></GoDeviceMobile>
                <h5 style={{margin: '0.2em'}}>044 5963259</h5>
              </div>

              <div className='contact-info-item'>
                <GoMail style={{margin: '0.2em', width: '20', height: '20'}}></GoMail>
                <h5 style={{margin: '0.2em'}}>raunolavili@gmail.com</h5>
              </div>

            </div>

            <div className='form-container'>

              <div className='form-group'>
                <label htmlFor='name'>Your name</label>
                <input className='form-input' type='text' id='name' ></input>
                
              </div>
              
              <div className='form-group'>
                <label htmlFor='email'>Your email</label>
                <input className='form-input' type='text' id='email' ></input>
                
              </div>

              <div className='form-group'>
                <label htmlFor='text'>Your message</label>
                <textarea className='form-input-message' type='text' id='text' ></textarea>
                
              </div>

              <button type='submit'>Send</button>

            </div> 
          </div>
        
          
      </div>
    )
  }

export default ContactSection
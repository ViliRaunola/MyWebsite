import React from 'react'
import './ContactSection.css'
import {GoLocation, GoDeviceMobile, GoMail} from 'react-icons/go'
import emailjs from '@emailjs/browser';
import { useState, useEffect } from 'react';
import {toast} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import { useForm } from "react-hook-form";

toast.configure()

function ContactSection({reference}) {

  const { register, handleSubmit, watch, formState: { errors } } = useForm();

  // const initialValues = {name: "", email: "", message: ""};
  // const [formValues, setFormValues] = useState(initialValues);
  // const [formErrors, setFormErrors] = useState({});
  // const [isSubmit, setIsSubmit] = useState(false)

  // const handleChange = (e) => {
  //   const {name, value} = e.target;
  //   setFormValues({...formValues, [name]: value});
  // }

  // const validate = (values) => {
  //   const errors = {};
  //   const regex = /^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/;
  //   if(!values.name){
  //     errors.name = 'Name is required';
  //   }
  //   if(!values.email){
  //     errors.email = 'Email is required';
  //   }else if(!regex.test(values.email)){
  //     errors.email = 'This is not a valid email'
  //   }
  //   if(!values.message){
  //     errors.message = 'Message is required';
  //   }
  //   return errors;
  // }

  // useEffect(() => {
  //   if(Object.keys(formErrors).length === 0 && isSubmit){
      
  //   }
  // },[formErrors])


  const sendEmail = (data, e) => {
    e.preventDefault();
    emailjs.sendForm(process.env.REACT_APP_MAIL_SERVICE, process.env.REACT_APP_MAIL_TEMPLATE, e.target, process.env.REACT_APP_MAIL_KEY)
    .then((result) => {
        toast('Message has been sent!')
    }, (error) => {
        console.log(error.text);
    });
    
    e.target.reset()
  }


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
                <h5 style={{margin: '0.2em'}}>+358 44 5963259</h5>
              </div>

              <div className='contact-info-item'>
                <GoMail style={{margin: '0.2em', width: '20', height: '20'}}></GoMail>
                <h5 style={{margin: '0.2em'}}>raunolavili@gmail.com</h5>
              </div>

            </div>

            <div className='form-container'>
              <form onSubmit={ handleSubmit(sendEmail)}>
                <div className='form-group'>
                  <label htmlFor='name'>Your name</label>
                  <input className='form-input' type='text' id='name' name='name' {...register("name", { required: true })}></input>
                  {errors.name && <p className='error-message'>Name is needed!</p>}
                </div>
                
                <div className='form-group'>
                  <label htmlFor='email'>Your email</label>
                  <input className='form-input' type='text' id='email' name='email' {...register("email", {pattern: /^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/,required: true })}></input>
                  {errors.email && <p className='error-message'>Email is needed!</p>}
                </div>

                <div className='form-group'>
                  <label htmlFor='text'>Your message</label>
                  <textarea className='form-input-message' type='text' id='text' name='message' {...register("message", { required: true })}></textarea>
                  {errors.message && <p className='error-message'>Message is needed!</p>}
                </div>

                <button className='button-3' type='submit'>Send</button>
              </form>
            </div> 
          </div>
        
          
      </div>
    )
  }

export default ContactSection
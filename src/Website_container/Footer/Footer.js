import React, { useRef } from 'react';
import emailjs from 'emailjs-com';
import {FaFacebook, FaInstagram, FaLinkedin, FaTwitter} from 'react-icons/fa';

export default function ContactUs (){
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('standhid_007', 'template_q7i4z1s', form.current, 'user_y9T3HevlyKMAZOJVRm2Mm')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset()
  };

  return (
      <div>
        <div className='footer'>
             <div id="contact">CONTACT US</div>
                <form ref={form} onSubmit={sendEmail}>
                    <div className='mb-3'>
                         <label>NAME</label>
                        <input type="text" name="user_name"className='form-control' />
                    </div>
                    <div className='mb-3'>
                <label>EMAIL </label>
                <input type="email" name="user_email" placeholder="name@example.com" className='form-control'/>
            </div>
                <button className='btn btn-primary' type='submit'>Submit</button>
        </form>
        </div>
        <div className="row">
            <div className='col-md-12'>
             <a href="https://www.facebook.com/TeamAveonRacing/">
                  <FaFacebook color='white' size={40}/>
             </a>
            <a href="https://twitter.com/teamaveon">
                   <FaTwitter color='white' size={40}/> 
            </a>
            <a href="https://www.instagram.com/teamaveon/">
                <FaInstagram color='white' size={40}/>
            </a>
            <a href="https://www.linkedin.com/company/team-aveon/mycompany/">
                <FaLinkedin color='white' size={40}/>
            </a>
            </div>
            </div>
        </div>
  );
};

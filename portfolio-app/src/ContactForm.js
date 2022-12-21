import React from 'react';
import SectionHeading from './SectionHeading';
import { useForm, ValidationError } from '@formspree/react';

const ContactForm = () => {
  const [state, handleSubmit] = useForm("mgeqqoeg");
  if (state.succeeded) {
      return (
      <div className="section" id="contact-form">
         <div className="container cc-reference">
            <SectionHeading headingCss="h4 text-center mb-4 title" headingText="Contact Form"/>
            <div className="card text-center">
            <img src="https://media4.giphy.com/media/3sbiWejYVIGuX1thyq/giphy.gif?cid=790b761165efa4a559dce61d33809f0115e44d7e7006d3e9&amp;rid=giphy.gif&amp;ct=g" alt="Email Recibir GIF" style={{width:"500px", height:"500px"}}></img>    
                <SectionHeading headingCss="h4 text-center mb-4 title" headingText="Thanks for reaching out to me! I usually reply within a day or two!"/>
                </div>
            </div>
        </div>
      )
  }
  return (
    <div className="section" id="contact-form">
        <div className="container cc-reference">
            <SectionHeading headingCss="h4 text-center mb-4 title" headingText="Contact Form"/>
            <div className="card" data-aos="zoom-in">
                <form onSubmit={handleSubmit}>
                    <div className="mb-3">
                    <label className="form-label" htmlFor="email">
                        <h6>Email</h6>
                    </label>
                    <input className="form-control" type="email" id="email" name="email" required />
                    <ValidationError 
                        prefix="Email" 
                        field="email"
                        errors={state.errors}
                    />
                    </div>
                    <div className="mb-3">
                    <label className="form-label" htmlFor="message">
                        <h6>Message</h6>
                    </label>
                    <textarea className="form-control" id="message" name="message" rows="3" required />
                    <ValidationError 
                        prefix="Message" 
                        field="message"
                        errors={state.errors}
                    />
                    </div>
                    <div className="col-md-12 text-center">
                        <button className="btn btn-primary btn-lg mx-auto" type="submit" disabled={state.submitting}>Submit</button>
                    </div>
                </form>
            </div>
        </div>
    </div>
  );
}

export default ContactForm;
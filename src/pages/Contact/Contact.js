import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import fax from "../../assets/images/fax.png";
import stamp from "../../assets/images/rubberstamp.png";
import "./contact.css";
// import bootstrap
import "bootstrap/dist/css/bootstrap.min.css";
// import font awesome icon pack
// import "font-awesome/css/font-awesome.min.css";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_capu6om",
        "template_nwy61rd",
        form.current,
        "i18Go310_MJExmJzY"
      )
      .then(
        (result) => {
          console.log(result.text);
          e.target.reset();
          alert("Thank you for your message, we will get back to you shortly");
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div className="page-container">
      <div className="main-container contact-section animate__animated animate__fadeIn">
        <img src={fax} alt="fax paper" className="fax-paper " />
        <div className="contact-text">
          <div className=" contact">
            <div className="contact-info ">
              <div >
                <div >
                  {/* contact details */}
                  <h4 >Contact Us</h4>                  
                  <p className="card-text">
                    P.O. Box 4116, Dubai, United Arab Emirates
                    <i class="fa-solid fa-user"></i>
                  </p>
                </div>
                <ul >
                  <li className="list-group-item">
                    <a href="mailto:mahanram@gmail.com">
                      <i className="fa fa-envelope"> :test@gmail.com</i>
                    </a>
                  </li>
                  <li className="list-group-item">
                    <a href="tel:555-555-5555">
                      <i className="fa fa-phone"> : 555-555-5555</i>
                    </a>
                  </li>
                  <li className="list-group-item">Vestibulum at eros</li>
                </ul>
              </div>
            </div>
{/* contact form */}
            <div className="contact-form   ">
              <h4 className="text-center ">
                Or reach out by filling out this form
              </h4>

              <form ref={form} onSubmit={sendEmail}>
                <label>Name</label>
                <input type="text" className="form-control" name="from_name" />
                <label>Email</label>
                <input
                  type="email"
                  className="form-control"
                  name="from_email"
                />
                <label>Message</label>
                <textarea name="message" className="form-control" rows="6" />
                <input
                  type="submit"
                  className="mt-2 btn btn-success"
                  value="Send"
                />
              </form>
            </div>
          </div>
        </div>
        <img src={stamp} alt="logo stamp" className="page-logo-stamp" />
      </div>
    </div>
  );
};

export default Contact;

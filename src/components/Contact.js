import React, { useState } from 'react'
import axios from 'axios'
import '../styles/Contact.css'

export default function Contact() {
  const [status, setStatus] = useState({
    submitted: false,
    submitting: false,
    info: { error: false, msg: null }
  })
  const [inputs, setInputs] = useState({
    email: '',
    subject: '',
    message: ''
  })

  const handleServerResponse = (ok, msg) => {
    if (ok) {
      setStatus({
        submitted: true,
        submitting: false,
        info: { error: false, msg: msg }
      })
      setInputs({
        email: '',
        subject: '',
        message: ''
      })
    } else {
      setStatus({
        info: { error: true, msg: msg }
      })
    }
  }
  
  const handleOnChange = e => {
    e.persist()
    setInputs(prev => ({
      ...prev,
      [e.target.id]: e.target.value
    }))
    setStatus({
      submitted: false,
      submitting: false,
      info: { error: false, msg: null }
    })
  }

  const handleOnSubmit = e => {
    e.preventDefault()
    setStatus(prevStatus => ({ ...prevStatus, submitting: true }))
    axios({
      method: 'POST',
      url: 'https://formspree.io/xpzobwob',
      data: inputs
    })
      .then(response => {
        handleServerResponse(
          true,
          'Thank you, your message has been submitted.'
        )
      })
      .catch(error => {
        handleServerResponse(false, error.response.data.error)
      })
  }
  return (
    <div>
      <section id="contact" className="contact">
        <div className="section-heading text-center">
          <h2>contact me</h2>
        </div>
        <div className="container">
          <div className="contact-content">
            <div className="row">
              <div className="col-md-offset-1 col-md-5 col-sm-6">
                <div className="single-contact-box">
                  <div className="contact-form">
                    <form onSubmit={handleOnSubmit}>
                      <div className="row">
                        <div className="col-sm-6 col-xs-12">
                          <div className="form-group">
                            <input type="text" className="form-control" id="name" placeholder="Name*" name="name" onChange={handleOnChange} required value={inputs.name} />
                          </div>
                        </div>
                        <div className="col-sm-6 col-xs-12">
                          <div className="form-group">
                            <input type="email" className="form-control" id="email" placeholder="Email*" name="email" onChange={handleOnChange} value={inputs.email} />
                          </div>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-sm-12">
                          <div className="form-group">
                            <input type="text" className="form-control" id="subject" placeholder="Subject" name="subject" onChange={handleOnChange} value={inputs.subject} />
                          </div>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-sm-12">
                          <div className="form-group">
                            <textarea className="form-control" rows="8" id="comment" placeholder="Message" onChange={handleOnChange} value={inputs.message}></textarea>
                          </div>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-sm-12">
                          <div className="single-contact-btn">
                            <button className="contact-btn" type="submit" disabled={status.submitting}>
                              {!status.submitting
                                ? !status.submitted
                                  ? 'Submit'
                                  : 'Submitted'
                                : 'Submitting...'}
                            </button>
                          </div>
                        </div>
                      </div>
                    </form>
                    {status.info.error && (
                      <div className="error">Error: {status.info.msg}</div>
                    )}
                    {!status.info.error && status.info.msg && <p>{status.info.msg}</p>}
                  </div>
                </div>
              </div>
              <div className="col-md-offset-1 col-md-5 col-sm-6">
                <div className="single-contact-box">
                  <div className="contact-adress">
                    <div className="contact-add-head">
                      <h3>browny star</h3>
                      <p>uI/uX designer</p>
                    </div>
                    <div className="contact-add-info">
                      <div className="single-contact-add-info">
                        <h3>phone</h3>
                        <p>987-123-6547</p>
                      </div>
                      <div className="single-contact-add-info">
                        <h3>email</h3>
                        <p>browny@info.com</p>
                      </div>
                      <div className="single-contact-add-info">
                        <h3>website</h3>
                        <p>www.brownsine.com</p>
                      </div>
                    </div>
                  </div>
                  <div className="hm-foot-icon">
                    <ul>
                      <li>
                        <a href="#">
                          <i className="fa fa-facebook"></i>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fa fa-dribbble"></i>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fa fa-twitter"></i>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fa fa-linkedin"></i>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fa fa-instagram"></i>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
    // <main>
    //   <h1>React and Formspree</h1>
    //   <hr />
    //   <form onSubmit={handleOnSubmit}>
    //     <label htmlFor="name">Name</label>
    //     <input
    //       id="name"
    //       type="text"
    //       name="_name"
    //       onChange={handleOnChange}
    //       required
    //       value={inputs.name}
    //     />
    //     <label htmlFor="email">Email</label>
    //     <input
    //       id="email"
    //       type="email"
    //       name="_replyto"
    //       onChange={handleOnChange}
    //       required
    //       value={inputs.email}
    //     />
    //     <label htmlFor="message">Message</label>
    //     <textarea
    //       id="message"
    //       name="message"
    //       onChange={handleOnChange}
    //       required
    //       value={inputs.message}
    //     />
    //     <button type="submit" disabled={status.submitting}>
    //       {!status.submitting
    //         ? !status.submitted
    //           ? 'Submit'
    //           : 'Submitted'
    //         : 'Submitting...'}
    //     </button>
    //   </form>
    //   {status.info.error && (
    //     <div className="error">Error: {status.info.msg}</div>
    //   )}
    //   {!status.info.error && status.info.msg && <p>{status.info.msg}</p>}
    // </main>
  )
}

// function Contact() {
//   const [state, handleSubmit] = useForm("xpzobwob");
//   if (state.succeeded) {
//       return <p>Thanks for joining!</p>;
//   }
//   return (
//       <form onSubmit={handleSubmit}>
//       <label htmlFor="email">
//         Email Address
//       </label>
//       <input
//         id="email"
//         type="email"
//         name="email"
//       />
//       <ValidationError
//         prefix="Email"
//         field="email"
//         errors={state.errors}
//       />
//       <textarea
//         id="message"
//         name="message"
//       />
//       <ValidationError
//         prefix="Message"
//         field="message"
//         errors={state.errors}
//       />
//       <button type="submit" disabled={state.submitting}>
//         Submit
//       </button>
//     </form>
//   );
// }

// export default Contact;
import React from 'react'
import "../styles/contact.scss"


const Contact = () => {
    return (
        <>
        <section id="contact">
        <div>
          <div className="contact">
          <h1>Say Hi<span className='ele'>!!</span></h1>
          <div className="contact-info">
          <div className="social-links">
                <form action="mailto:pavanh2020@gmail.com" method="post" encType="text">
                  <input type="submit" value="Email: pavanh2020@gamil.com"/>
                </form>
                <div className="social">
                <a href='https://github.com/pavan-h' target="_blank"><span>Github</span></a>
                <a href='https://linkedin.com/in/pavan-h' target="_blank"><span>LinkedIn</span></a>
                <a href='https://codepen.io/pavan-h' target="_blank"><span>Codepen</span></a>
                </div>
          </div>
          </div>
          </div>
        </div>
      </section>
        </>
    )

}

export default Contact;
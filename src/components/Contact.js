import React from 'react'

const Contact = () => {
  return (
    <div className='contact' >
      <p className="heading"  data-aos="fade-up" data-aos-duration="2000">~Contact~</p>
        <div className='aboutme-sentence' data-aos="fade-up" data-aos-duration="2000">
        <p className="aboutme-text">Ready to Transform Your Vision into Reality? Contact Me Now!</p>
        </div>
        <div className='contact-fields'  data-aos="fade-up" data-aos-duration="2000">
          <form action="https://api.web3forms.com/submit" method="POST">
            <input type="hidden" name="access_key" value="52a160c7-e492-462d-a2d3-50dbf54fcdfb"/>
            <input type='text' placeholder='Your Name' name='name' required className='contact-input'/>
            <input type='email' placeholder='Your Email' name='email' required className='contact-input'/>
            <textarea type='textarea' placeholder='Drop a message' name='description'required className='contact-input'/>
            <button className='contactme-btn' type='submit'>Send Message!</button>
          </form>
      </div>
      <div className='aboutme-sentence' data-aos="fade-up" data-aos-duration="2000">
        <p className='aboutme-text'>Reach out to learn more or just say hello. I'll respond soon!</p>
      </div>
    </div>
  )
}
export default Contact;

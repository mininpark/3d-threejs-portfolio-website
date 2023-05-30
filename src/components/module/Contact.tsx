import { useRef, useState } from 'react'
import { SectionWrapper } from '../../hoc'
import SubText from '../element/Subtext'
import { contactText } from '../../constants'
import { EarthCanvas, StarsCanvas } from '../canvas'
import eamiljs from '@emailjs/browser'

const Contact = () => {
  const serviceKey = import.meta.env.VITE_SERVICE_KEY;
  const templateKey = import.meta.env.VITE_TEMPLATE_IP_KEY;
  const publicKey = import.meta.env.VITE_PUBLIC_KEY;

  const formRef = useRef(null);
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({
    name: '',
    email: '',
    message: '',
  })

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value })
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    eamiljs.send(
      serviceKey, //service key
      templateKey, // template key
      {
        from_name: form.email,
        to_name: 'Mina',
        from_email: form.email,
        to_email: 'contact@mina-portfolio.com',
        message: form.message,
      }, // templates params
      publicKey //public key
    )
      .then(() => {
        setLoading(false);
        alert('Thank you! I will get back to you as soon as possible.')

        setForm({
          name: '',
          email: '',
          message: '',
        })
      }, (error) => {
        setLoading(false)
        console.log(error);
        alert("Something went wrong")
      })
  }

  return (
    <div className="section-contact paddingX">

      <div className="section-contact__form">
        <SubText text={contactText} />
        <form onSubmit={handleSubmit} ref={formRef}>
          <label className="name">
            <span>Your Name</span>
            <input type="text" name="name" value={form.name} onChange={handleChange} placeholder="what's your name?"></input>
          </label>
          <label className="email">
            <span>Your Email</span>
            <input type="email" name="email" value={form.email} onChange={handleChange} placeholder="what's your email?"></input>
          </label>
          <label className="message">
            <span>Your Message</span>
            <textarea rows={7} name="message" value={form.message} onChange={handleChange} placeholder="what do you want to say"></textarea>
          </label>
          <button type="submit">{loading ? 'Sending...' : 'Send'}</button>
        </form>
      </div>
      <div className="section-contact__planet">
        <EarthCanvas />
      </div>
      <StarsCanvas />
    </div>
  )
}

export default SectionWrapper(Contact, "contact")
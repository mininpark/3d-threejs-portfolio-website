import { useRef, useState } from 'react'
import { SectionWrapper } from '../../hoc'
import SubText from '../element/Subtext'
import { contactText } from '../../constants'
import { NULL } from 'sass'
import { EarthCanvas, StarsCanvas } from '../canvas'


const Contact = () => {

  const formRef = useRef(null);
  const [loading, setLoading] = useState(null);
  const [form, setForm] = useState({
    name: '',
    email: '',
    message: '',
  })

  const handleSubmit = () => {
    console.log("hi")
  }

  const handleChange = () => {

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
import { useRef, useState } from 'react'
import { SectionWrapper } from '../../hoc'
import SubText from '../element/Subtext'
import { contactText } from '../../constants'
import { NULL } from 'sass'


const Contact = () => {

  const formRef = useRef(null);
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
      <SubText text={contactText} />
      <div className="section-contact__form">
        <form onSubmit={handleSubmit} ref={formRef}>
          <label>
            <span>Your Name</span>
            <input type="text" name="name" value={form.name} onChange={handleChange} placeholder="what's your name?"></input>
          </label>

        </form>

      </div>
    </div>
  )
}

export default SectionWrapper(Contact, "contact")
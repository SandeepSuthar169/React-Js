import React, {useState} from 'react'
import { useContactFornm } from './hooks/useContactForm'


function ContactForm() {

    const [form, setForm] = useState({
        name: "",
        emai: "",
        message: ""
    })

    const {
        loading, 
        submitContanct,
        successMessage,
        errorMessage
    } = useContactFornm()


    const handleChange = (e) => {
         setForm({...form, [e.target.name]: e.target.value})
    }

    const handleSumit = (e) => {
        e.preventDefault()
    }

  return (
    <div>
        ContactForm

        <form action="" onSubmit={handleSumit}>

            <input 
            type="text" 
            name='nane' 
            value={form.name} 
            onChange={handleChange}
            placeholder="Your Name"
            />

            <input 
            type="text" 
            name='mail' 
            value={form.mail} 
            onChange={handleChange}
            placeholder="Your Mail"
            />

            <textarea 
            name="message" 
            value={form.message}
            onChange={handleChange}
            placeholder='Your Message'
            />

            <button type='submint' disabled={loading}>
                {loading ? "sending...": "send"}
            </button>
        </form>
        {successMessage && <p>{successMessage}</p> }
        {errorMessage && <p>{errorMessage}</p> }
        </div>
  )
}

export default ContactForm
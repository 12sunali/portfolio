import React from 'react'
import './ContactMe.css'
import ContactInfoCard from './ContactInfoCard'
import ContactForm from './ContactForm'

const ContactMe = () => {
  return (
    <section className='contact-container'>
        <h5>Contact Me</h5>

        <div className='contact-content'>
            <div className = "contact-info-card" style = {{flex: 1}}>
                <ContactInfoCard
                iconUrl = "./assets/images/linkedinIcon.png"
                text= "LinkedIn"
                link ="https://www.linkedin.com/in/sunali-sharma-4bb396227"

                />
                
                <ContactInfoCard
                iconUrl = "./assets/images/githubIcon.png"
                text= "Github"
                link = "https://github.com/12sunali"
                />
            </div>
            
            <div style = {{flex: 1}}>
                <ContactForm/>
            </div>
            </div>
    </section>
  )
}

export default ContactMe
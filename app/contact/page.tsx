import Contact from '@/components/contact/Contact'
import Footer from '@/components/shared/Footer'
import Navbar from '@/components/shared/Navbar'
import React from 'react'

const ContactPage = () => {
    return (
        <div className=' bg-gray-900 text-white'>
            <Navbar />
            <Contact />
            <Footer/>
        </div>
    )
}

export default ContactPage

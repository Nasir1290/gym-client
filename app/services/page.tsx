import Services from '@/components/service/Service'
import Footer from '@/components/shared/Footer'
import Navbar from '@/components/shared/Navbar'
import React from 'react'

const ServicesPage = () => {
    return (
        <div className='container mx-auto'>
            <Navbar/>
            <Services />
            <Footer/>
        </div>
    )
}

export default ServicesPage

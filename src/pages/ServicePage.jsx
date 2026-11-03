import React from 'react'
import Footer from '../component/Footer'
import NavBar from '../component/Navbar'
import HeaderService from '../component/Servicepage/HeaderService'
import OurService from '../component/Servicepage/OurService'
import BackToTopButton from '../component/BackToTop'

const ServicePage = () => {
    return (
        <div>
            <NavBar />
            <HeaderService />
            <OurService />
            <Footer />
            <BackToTopButton />
        </div>
    )
}

export default ServicePage

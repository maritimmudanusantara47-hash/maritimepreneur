import React from 'react'
import Footer from '../component/Footer'
import AboutUs from '../component/Homepage/AboutUs'
import Becdex from '../component/Homepage/Becdex'
import Client from '../component/Homepage/Client'
import Header from '../component/Homepage/Header'
import TrainedBy from '../component/Homepage/TrainedBy'
import RegisterAt from '../component/Homepage/RegisterAt'
import ContactFormAlt from '../component/Homepage/ContactFormAlt'
import Service from '../component/Homepage/Service'
import NavBar from '../component/Navbar'
import Question from '../component/Homepage/Question'
import BackToTopButton from '../component/BackToTop'
import MemberOf from '../component/Homepage/MemberOf'

const Homepage = () => {
    return (
        <div>
            <NavBar />
            <Header />
            <Becdex />
            <AboutUs />
            <Service />
            <MemberOf />
            <Client />
            <RegisterAt />
            <TrainedBy />
            <Question />
            <ContactFormAlt />
            <Footer />
            <BackToTopButton />
        </div>
    )
}

export default Homepage

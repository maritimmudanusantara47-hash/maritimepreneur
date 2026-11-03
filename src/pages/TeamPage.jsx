import React from 'react'
import Footer from '../component/Footer'
import NavBar from '../component/Navbar'
import HeaderTeam from '../component/Teampage/HeaderTeam'
import OurTeam from '../component/Teampage/OurTeam'
import ProfileTeam from '../component/Teampage/ProfileTeam'
import BackToTopButton from '../component/BackToTop'

const TeamPage = () => {
    return (
        <div>
            <NavBar />
            <HeaderTeam />
            <OurTeam />
            <ProfileTeam />
            <Footer />
            <BackToTopButton />
        </div>
    )
}

export default TeamPage

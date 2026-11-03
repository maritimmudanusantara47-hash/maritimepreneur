import React from 'react'
import Footer from '../component/Footer'
import NavBar from '../component/Navbar'
import HeaderCatalogue from '../component/Cataloguepage/HeaderCatalogue'
import CardCatalogue from '../component/Cataloguepage/CardCatalogue'
import BackToTopButton from '../component/BackToTop'

const CataloguePage = () => {
  return (
      <div>
          <NavBar />
          <HeaderCatalogue />
          <CardCatalogue />
          <Footer />
          <BackToTopButton />
      </div>
  )
}

export default CataloguePage
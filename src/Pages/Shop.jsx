import React from 'react'
import Hero from '../Components/Hero/Hero'
import Popular from "../Components/Popular/Popular.jsx"
import Offers from '../Components/Offers/Offers'
import NewCollections from "../Components/NewCollections/NewCollections"
import Newsletter from '../Components/NewsLetter/Newsletter'
import Footer from '../Components/Footer/Footer'


const Shop = () => {
  return (
    <div>
      <Hero/>
      <Popular/>
      <Offers/>
      <NewCollections/>
      <Newsletter/>
      
    </div>
  )
}

export default Shop
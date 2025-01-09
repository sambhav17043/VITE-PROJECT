// eslint-disable-next-line no-unused-vars
import React from 'react'
import Hero from '../components/Hero'
import LatestCollection from '../components/LatestCollection'
import Bestseller from '../components/Bestseller'
import OurPolicy from '../components/OurPolicy'
import NewsletterBox from '../components/NewsletterBox'

const Home = () => {
  return (
    <div>
        <Hero></Hero>
        <LatestCollection></LatestCollection>
        <Bestseller></Bestseller>
        <OurPolicy></OurPolicy>
        <NewsletterBox></NewsletterBox>
    </div>
  )
}

export default Home
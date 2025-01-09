// eslint-disable-next-line no-unused-vars
import React from 'react'
import Title from '../components/Title'
import { assets } from '../assets/assets'
import NewsletterBox from '../components/NewsletterBox'

const About = () => {
  return (
    <div>
      <div className='text-2xl text-center pt-8 border-t'>
        <Title text1={'ABOUT'} text2={'US'}></Title>
      </div>
      
      <div className='my-10 flex flex-col md:flex-row gap-16'>
        <img className='w-full md:max-w-[500px]' src={assets.about_img} alt="" />
        <div className='flex flex-col justify-center gap-6 md:2-2/4 text-gray-600'>
          <p>Welcome to Soul Garden, your ultimate destination for high-quality, handpicked products designed to elevate your lifestyle. We are an e-commerce platform built on the foundation of trust, quality, and customer satisfaction. At Soul Garden, we believe in creating a seamless shopping experience where you can discover unique items that blend style, comfort, and functionality.</p>
          <p>Our journey began with a simple vision: to bring joy and convenience to every shopper. From carefully curated collections to an easy-to-navigate platform, we’ve crafted every detail to ensure you find exactly what you’re looking for. Whether it’s fashion, home decor, or everyday essentials, our products are sourced with love and care to meet your expectations.</p>
          <b className='text-gray-800'>Our Mission</b>
          <p>Our mission is to revolutionize online shopping by providing high-quality, thoughtfully curated products that enhance lifestyles, inspire confidence, and promote sustainable practices. We are committed to fostering trust, building meaningful connections, and delivering exceptional customer experiences, while supporting eco-friendly initiatives and empowering communities to thrive together.</p>
        </div>
      </div>

      <div className='text-xl py-4'>
        <Title text1={'WHY'} text2={'CHOOSE US'}></Title>
      </div>

      <div className='flex flex-col md:flex-row text-sm mb-20'>
        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b>Quality Assurance:</b>
          <p className='text-gray-600'>At **Soul Garden**, we are dedicated to delivering the highest standards of quality by thoroughly inspecting every product, sourcing responsibly, prioritizing customer satisfaction, and adhering to sustainable practices, ensuring you receive only the best.</p>
        </div>
        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b>Convenience:</b>
          <p className='text-gray-600'>At **Soul Garden**, we prioritize your convenience by offering a user-friendly platform, seamless navigation, secure payment options, and fast, reliable delivery, ensuring a hassle-free shopping experience every time.</p>
        </div>
        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b>Exceptional Customer Service</b>
          <p className='text-gray-600'>At **Soul Garden**, we are committed to providing exceptional customer service by offering prompt support, personalized assistance, and ensuring your needs are met with care and attention, making your shopping experience as smooth and enjoyable as possible.</p>
        </div>
      </div>

      <NewsletterBox></NewsletterBox>

    </div>

  )
}

export default About
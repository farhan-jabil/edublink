import React from 'react'
import Categories from '../components/landingPage/Categories'
import Certificate from '../components/landingPage/Certificate'
import Course from '../components/landingPage/Course'
import FAQ from '../components/landingPage/FAQ'
import Hero from '../components/landingPage/Hero'
import Blog from '../components/landingPage/Blog'
import Testimonials from '../components/landingPage/Testimonials'
import Countdown from '../components/landingPage/Countdown'

export default function LandingPage() {
  return (
    <>
      <div className='landingPage'>
        <Hero />
        <Categories />
        <Course />
        <FAQ />
        <Countdown/>
        <Testimonials />
        <Certificate />
        <Blog />
      </div>
    </>
  )
}

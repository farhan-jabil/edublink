import React, { useState } from 'react'
import { images } from '../../utils/demo_images'

export default function Hero() {

  return (
    <section className='hero relative'>

      <div className='containerr flex flex-col lg:flex-row items-center mt-16 lg:mt-32'>
        <div className='space-y-5 mr-5 mx-5 xl:mx-0 lg:w-[50%]'>
          <h1 className='text-[34px] text-center lg:text-left xl:text-[50px] font-bold'>Find Yout Best <br className='hidden lg:block'/> Courses to <span className='text-[#ee4a62]'>Develop</span> <br className='hidden lg:block'/> your skills</h1>
          <p className='text-center lg:text-left xl:pr-[90px] text-[20px] xl:text-[18px]'>Excepteur sint occaecat cupidatat non proident sunt in culpa qui officia deserunt mollit.</p>

          <form class="flex shadow-[0px_4px_50px_0px_rgba(0,0,0,0.1)] items-center bg-gray-50 w-[100%] lg:w-[92%]">
            <label for="simple-search" class="sr-only">Search</label>
            <div class="relative w-full">
              <input type="text" id="simple-search" class="outline-none text-gray-900 text-sm rounded-lg block w-full pl-[10px] lg:pl-[20px] h-[65px]" placeholder="What do you want to learn?" required />
            </div>
            <button type="submit" class="p-2.5 ml-2 text-sm font-medium text-black hover:text-[#1AB69D] rounded-lg duration-[.5s]">
              <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
              <span class="sr-only">Search</span>
            </button>
          </form>
          
        </div>

        <div className='xl:pl-20 lg:w-[50%] relative'>
          <div className='heroPoster mt-5 xl:mt-0 w-fit z-[-1]'>
            <img src={images.banner} className="" alt="" />
          </div>
          <div className='bg-white shadow-[0px_20px_40px_0px_rgba(0,0,0,0.3)] p-[15px] xl:p-[26px_30px_16px] w-fit rounded-[10px] absolute bottom-[0px] xl:bottom-[-60px] left-0'>
            <p className='font-semibold text-[20px]'>Instructor</p>
            <div className='flex'>
              <img src={images.author} alt="" />
              <p className='font-[500]'><span className='font-bold text-[#ee4a62]'>200+</span><br /> Instructors</p>
            </div>
          </div>
        </div>
      </div>

      <div className='with-mouse hidden xl:block absolute right-[700px] top-[-50px] transition duration-[2000ms]'>
        <img src={images.bannerShape1} className="" alt="" />
      </div>
      <div className='with-mouse hidden xl:block absolute right-16'>
        <img src={images.bannerShape2} alt="" />
      </div>
      <div className='opposite-mouse hidden xl:block absolute right-14 top-14'>
        <img src={images.bannerShape3} alt="" />
      </div>
      <div className='opposite-mouse hidden xl:block absolute left-[-120px] top-[100px]'>
        <img src={images.bannerShape4} alt="" />
      </div>

      <div className='brand bg-gray-100 mt-10 lg:mt-32 lg:px-32 xl:px-48 py-10'>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 lg:space-x-5">
          <img src={images.brand1} className="mx-auto min-h-full" alt="" />
          <img src={images.brand2} className="mx-auto min-h-full" alt="" />
          <img src={images.brand3} className="mx-auto min-h-full" alt="" />
          <img src={images.brand4} className="mx-auto min-h-full" alt="" />
          <img src={images.brand5} className="mx-auto min-h-full" alt="" />
          <img src={images.brand6} className="mx-auto min-h-full" alt="" />
        </div>
      </div>

    </section>

  )
}

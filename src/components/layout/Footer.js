import React from 'react'
import { images } from '../../utils/demo_images'

export default function Footer() {
  return (
    <>
      <section className='footer lg:px-[95px] py-[60px] lg:py-[100px]'>
        <div className='containerr flex flex-col lg:flex-row lg:space-x-[40px] space-y-[40px] lg:space-y-0'>

          <div className='lg:w-[35%] font-[400] text-[16px]'>
            <img src={images.logo} alt="" />
            <p className='my-[20px]'>Lorem ipsum dolor amet consecto adi pisicing elit sed eiusm tempor incidid unt labore dolore.</p>
            <div>
              <ul className='space-y-[10px]'>
                <li>
                  <span className='font-[600]'>Add:</span> 70-80 Upper St Norwich NR2
                </li>
                <li>
                  <span className='font-[600]'>Call:</span>+01 123 5641 231
                </li>
                <li>
                  <span className='font-[600]'>Email:</span>info@edublink.com
                </li>
              </ul>
            </div>
          </div>

          <div className='lg:w-[20%]'>
            <p className='font-[700] text-[23px]'>Online Platform</p>
            <ul className='mt-[30px] space-y-5'>
              <li className='cursor-pointer'>About</li>
              <li className='cursor-pointer'>Courses</li>
              <li className='cursor-pointer'>Instructor</li>
              <li className='cursor-pointer'>Events</li>
              <li className='cursor-pointer'>Instructor Profile</li>
              <li className='cursor-pointer'>Purchase Guide</li>
            </ul>
          </div>

          <div className='lg:w-[15%]'>
            <p className='font-[700] text-[23px]'>Links</p>
            <ul className='mt-[30px] space-y-5'>
              <li className='cursor-pointer'>Contact Us</li>
              <li className='cursor-pointer'>Gallery</li>
              <li className='cursor-pointer'>News & Article</li>
              <li className='cursor-pointer'>FAQ's</li>
              <li className='cursor-pointer'>Sign In/Registration</li>
              <li className='cursor-pointer'>Coming Soon</li>
            </ul>
          </div>

          <div className='lg:w-[35%]'>
            <p className='font-[700] text-[23px]'>Contacts</p>
            <p className='mt-[30px]'>Enter your email address to register to our newsletter subscription</p>
            <div className='flex flex-col lg:flex-row mt-5 h-14'>
              <input type="text" className='py-[10px] lg:py-[0px] px-[15px] rounded-[5px]' placeholder='Your Email' />
              <button className='bg-[#1ab69d] mt-5 lg:mt-0 lg:ml-[10px] rounded-[5px] text-white py-[10px] lg:py-0 px-[15px] lg:px-5'>Subscribe <i className="fa-sharp fa-solid fa-arrow-right"></i></button>
            </div>

            <div className='flex text-[22px] space-x-[20px] mt-[80px] lg:mt-[35px]'>
              <a href="#" class="fa-brands fa-facebook"></a>
              <a href="#" class="fa-brands fa-linkedin"></a>
              <a href="#" class="fa-brands fa-instagram"></a>
              <a href="#" class="fa-brands fa-twitter"></a>
              <a href="#" class="fa-brands fa-youtube"></a>
            </div>
          </div>
        </div>
      </section>
      <div className='text-center font-[400] bg-[#ebeff0] py-[32px]'>
        <p>Copyright 2023 <span className='text-[#1ab69d]'>EduBlink</span> Designed By <span className='text-[#1ab69d]'>DevsBlink</span>. All Rights Reserved</p>
      </div>
    </>


  )
}

import React from 'react'
import { images } from '../../utils/demo_images'

export default function Certificate() {
  return (
    <section className='bg-[#1ab69d] relative'>
      {/* <img src={images.certificate_girl} className="absolute" alt=""/> */}


      <div className='containerr flex flex-col lg:flex-row'>
        <div className='hidden lg:block lg:w-[50%] relative'>
          <img src={images.certificateShape1} className="absolute top-36 left-[-50px] " alt="" />
          <img src={images.certificate_girl} className="lg:absolute bottom-0 left-16 mx-auto z-[2]" alt="" />
          <img src={images.certificate_half_circle} className="opposite-mouse absolute top-64 right-5 xl:right-28 z-[1]" alt="" />
          <img src={images.certificate_small_circle} className=" opposite-mouse absolute top-28 left-[-5px] z-[1]" alt="" />
          <img src={images.certificate_big_circle_1} className="with-mouse absolute top-64 left-64 xl:left-80 z-[1]" alt="" />
          
        </div>

        <div className='pt-[40px] md:pt-[80px] lg:py-[120px] lg:w-[50%] text-center lg:text-left ml-0 lg:ml-32 xl:ml-auto'>
          <p className='text-white font-[700] text-[36px] mb-[28px]'>Get Your Quality <br /> Skills Certificate Through <br /> EduBlink</p>
          <button className='certificate-button'>Get Started Now <i class="fa-sharp fa-solid fa-arrow-right"></i></button>
        </div>
      </div>
      {/* <img src={images.certificate_big_circle_2} className="hidden lg:block absolute right-[-70px] top-36 " alt="" /> */}
    </section>
  )
}

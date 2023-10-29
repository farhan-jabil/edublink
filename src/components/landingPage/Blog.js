import React from 'react'
import { data } from '../../utils/demo_data'
import { images } from '../../utils/demo_images'

export default function Blog() {
  return (
    <section className='containerr my-[120px]'>

      <div className='text-center'>
        <p className=''>LATEST ARTICLES</p>
        <p className='text-[36px] font-[700] mx-auto mb-1'>Get News with EduBlink</p>
        <i className="fa-solid fa-slash text-[#1ab69b] rotate-[322deg] text-[36px] font-semibold"></i>
      </div>

      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 lg:gap-x-5 gap-y-10 lg:gap-y-0 mt-10'>
        {data.blog_item.map((x, y) => (
          <div className='blog md:max-w-[270px] mx-auto' key={y}>

            <div className='blog-head md:max-w-[270px] relative'>
              <div className='blog-picture overflow-hidden  rounded-t-[10px]'>
                <img src={x.pitcure} className="w-full" alt="" />
              </div>
              <p className='absolute top-5 left-5 rounded-[3px] bg-[#1ab69b] text-white px-2 z-[1]'>{x.date}</p>
              <div>
                <i className="absolute bg-[#1ab69b] rounded-[50%] text-white bottom-[-35px] right-10 p-[25px] fa-solid fa-arrow-right z-[1]"></i>
              </div>
            </div>

            <div className="block p-[30px] bg-white border border-gray-200 shadow-md">
              <p className='text-[#808080] hover:text-[#1ab69b] cursor-pointer duration-[.5s]'>{x.type}</p>
              <p className='text-[20px] font-[500] hover:text-[#1ab69b] cursor-pointer duration-[.5s]'>{x.heading}</p>
              <p className='text-[#808080] font-[400] mt-5'>{x.short}</p>
            </div>

          </div>
        ))}
      </div>

    </section>
  )
}

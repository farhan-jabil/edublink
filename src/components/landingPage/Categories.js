import React from 'react'
import { data } from '../../utils/demo_data'

export default function Categories() {

  return (
    <section className='containerr category-container mt-[115px] lg:mb-[120px]'>
      <h1 className='text-[36px] font-semibold text-center'>Top Categories <br />
        <i className="fa-solid fa-slash text-[#1ab69b] rotate-[322deg]"></i>
      </h1>

      <p className='text-center mt-4 font-[400] text-[#808080] leading-[1]'>
        Consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore
      </p>
      <div className='mt-[44px]'>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-10 gap-x-5'>
          {/* {data.categories_item.map((x, y) => (
            <div className='categories flex' key={y}>
              <i className={`categoryIcon fa-sharp fa-solid fa-business-time flex justify-center items-center bg-[${x.icon_main_color}] hover:bg-[${x.icon_color}] text-[${x.icon_color}] hover:text-[white] rounded-[50%] text-[30px] h-[80px] w-[80px]`} style={{ transitionDuration: ".5s" }}></i>
              <div className='ml-5 self-center'>
                <p
                  className={`font-[400] text-[17px] hover:text-[${x.icon_color}] duration-[.5s] cursor-pointer`}>{x.category_name}</p>
                <p className='text-[#808080]'>{x.course_number}</p>
              </div>
            </div>
          ))} */}
            <div className='categories flex'>
              <i className={`categoryIcon fa-sharp fa-solid fa-business-time flex justify-center items-center bg-[#1ab69d1a] hover:bg-[#1ab69d] text-[#1ab69d] hover:text-[white] rounded-[50%] text-[30px] h-[80px] w-[80px]`} style={{ transitionDuration: ".5s" }}></i>
              <div className='ml-5 self-center'>
                <p
                  className={`font-[400] text-[17px] hover:text-[#1ab69d] duration-[.5s] cursor-pointer`}>Business Management</p>
                <p className='text-[#808080]'>38 courses</p>
              </div>
            </div>
            <div className='categories flex'>
              <i className={`categoryIcon fa-sharp fa-solid fa-business-time flex justify-center items-center bg-[#ee4a621a] hover:bg-[#ee4a62] text-[#ee4a62] hover:text-[white] rounded-[50%] text-[30px] h-[80px] w-[80px]`} style={{ transitionDuration: ".5s" }}></i>
              <div className='ml-5 self-center'>
                <p
                  className={`font-[400] text-[17px] hover:text-[#ee4a62] duration-[.5s] cursor-pointer`}>Arts & Design</p>
                <p className='text-[#808080]'>12 courses</p>
              </div>
            </div>
            <div className='categories flex'>
              <i className={`categoryIcon fa-sharp fa-solid fa-business-time flex justify-center items-center bg-[#0ecd731a] hover:bg-[#0ecd73] text-[#0ecd73] hover:text-[white] rounded-[50%] text-[30px] h-[80px] w-[80px]`} style={{ transitionDuration: ".5s" }}></i>
              <div className='ml-5 self-center'>
                <p
                  className={`font-[400] text-[17px] hover:text-[#0ecd73] duration-[.5s] cursor-pointer`}>Personal Development</p>
                <p className='text-[#808080]'>27 courses</p>
              </div>
            </div>
            <div className='categories flex'>
              <i className={`categoryIcon fa-sharp fa-solid fa-business-time flex justify-center items-center bg-[#f8b81f1a] hover:bg-[#f8b81f] text-[#f8b81f] hover:text-[white] rounded-[50%] text-[30px] h-[80px] w-[80px]`} style={{ transitionDuration: ".5s" }}></i>
              <div className='ml-5 self-center'>
                <p
                  className={`font-[400] text-[17px] hover:text-[#f8b81f] duration-[.5s] cursor-pointer`}>Health & Fitness</p>
                <p className='text-[#808080]'>19 courses</p>
              </div>
            </div>
            <div className='categories flex'>
              <i className={`categoryIcon fa-sharp fa-solid fa-business-time flex justify-center items-center bg-[#8e56ff1a] hover:bg-[#8e56ff] text-[#8e56ff] hover:text-[white] rounded-[50%] text-[30px] h-[80px] w-[80px]`} style={{ transitionDuration: ".5s" }}></i>
              <div className='ml-5 self-center'>
                <p
                  className={`font-[400] text-[17px] hover:text-[#8e56ff] duration-[.5s] cursor-pointer`}>Data Science</p>
                <p className='text-[#808080]'>23 courses</p>
              </div>
            </div>
            <div className='categories flex'>
              <i className={`categoryIcon fa-sharp fa-solid fa-business-time flex justify-center items-center bg-[#f925961a] hover:bg-[#f92596] text-[#f92596] hover:text-[white] rounded-[50%] text-[30px] h-[80px] w-[80px]`} style={{ transitionDuration: ".5s" }}></i>
              <div className='ml-5 self-center'>
                <p
                  className={`font-[400] text-[17px] hover:text-[#f92596] duration-[.5s] cursor-pointer`}>Marketing</p>
                <p className='text-[#808080]'>30 courses</p>
              </div>
            </div>
            <div className='categories flex'>
              <i className={`categoryIcon fa-sharp fa-solid fa-business-time flex justify-center items-center bg-[#5866eb1a] hover:bg-[#5866eb] text-[#5866eb] hover:text-[white] rounded-[50%] text-[30px] h-[80px] w-[80px]`} style={{ transitionDuration: ".5s" }}></i>
              <div className='ml-5 self-center'>
                <p
                  className={`font-[400] text-[17px] hover:text-[#5866eb] duration-[.5s] cursor-pointer`}>Business & Finance</p>
                <p className='text-[#808080]'>26 courses</p>
              </div>
            </div>
            <div className='categories flex'>
              <i className={`categoryIcon fa-sharp fa-solid fa-business-time flex justify-center items-center bg-[#f8941f1a] hover:bg-[#f8941f] text-[#f8941f] hover:text-[white] rounded-[50%] text-[30px] h-[80px] w-[80px]`} style={{ transitionDuration: ".5s" }}></i>
              <div className='ml-5 self-center'>
                <p
                  className={`font-[400] text-[17px] hover:text-[#f8941f] duration-[.5s] cursor-pointer`}>Computer Science</p>
                <p className='text-[#808080]'>9 courses</p>
              </div>
            </div>
            <div className='categories flex'>
              <i className={`categoryIcon fa-sharp fa-solid fa-business-time flex justify-center items-center bg-[#39c0fa1a] hover:bg-[#39c0fa] text-[#39c0fa] hover:text-[white] rounded-[50%] text-[30px] h-[80px] w-[80px]`} style={{ transitionDuration: ".5s" }}></i>
              <div className='ml-5 self-center'>
                <p
                  className={`font-[400] text-[17px] hover:text-[#39c0fa] duration-[.5s] cursor-pointer`}>Video & Photography</p>
                <p className='text-[#808080]'>24 courses</p>
              </div>
            </div>
        </div>
      </div>
    </section>
  )
}

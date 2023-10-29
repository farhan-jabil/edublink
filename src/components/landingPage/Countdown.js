import React from 'react'

export default function Countdown() {
  return (
    <section className='containerr mt-10 lg:mt-32 mb-10 lg:mb-[120px] '>

    <div className='flex flex-col lg:flex-row space-y-10 lg:space-y-0 text-center'>

        <div className='mx-auto lg:mx-4 h-[76px] w-[280px] flex items-center justify-center lg:border-r-[2px]'>
          <p className='text-[16px] font-[500] '><span className='text-[#1ab69d] text-[42px] font-[700]'>29.3k</span><br/>
          STUDENT ENROLLED</p>
        </div>

        <div className='mx-auto lg:mx-4 h-[76px] w-[270px] flex items-center justify-center lg:border-r-[2px]'>
          <p className='text-[16px] font-[500]'><span className='text-[#ee4a62] text-[42px] font-[700]'>32.4K</span><br/>
          Class Completed</p>
        </div>

        <div className='mx-auto lg:mx-4 h-[76px] w-[270px] flex items-center justify-center lg:border-r-[2px]'>
          <p className='text-[16px] font-[500]'><span className='text-[#8e56ff] text-[42px] font-[700]'>100%</span><br/>
          SATISFACTION RATE</p>
        </div>

        <div className='mx-auto lg:mx-4 h-[76px] w-[270px] flex items-center justify-center '>
          <p className='text-[16px] font-[500]'><span className='text-[#f8941f] text-[42px] font-[700]'>354+</span><br/>
          TOP INSTRUCTORS</p>
        </div>
        
      </div>

    </section>
  )
}

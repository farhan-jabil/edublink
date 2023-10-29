import React from 'react'
import { data } from '../../utils/demo_data'
import { images } from '../../utils/demo_images'

export default function Course() {
  return (
    <>
      <section className='mt-5 bg-[#f0f4f5] pt-[115px] pb-[112px] '>
        <div className='containerr relative z-[1]'>

          <div className='relative flex flex-col lg:flex-row lg:text-left mb-[44px]'>
            <div className='text-center lg:text-left '>
              <p className='mb-[14px] font-[500] inline-block leading-[1px] text-[#808080]'>POPULAR COURSES</p>
              <p className='font-[700] mb-1 text-[36px]'>Pick A Course To Get Started</p>
              <i className="fa-solid fa-slash text-[36px] font-semibold text-[#1ab69b] rotate-[322deg]"></i>
            </div>
            <div className='self-center'>
              <button className='mx-auto bg-[#31b978] hover:bg-[#1ab69d] duration-[.5s] ease-linear text-white rounded-[5px] px-[30px] text-[15px] font-[500] h-[60px] lg:absolute right-[0px] bottom-7 mt-5 lg:mt-0'>
                Browse more courses <i className="fa-solid fa-arrow-right"></i>
              </button>
            </div>
          </div>

          <div className='grid grid-cols-1 lg:grid-cols-2 gap-y-[30px] gap-x-[30px]'>

            {data.course_items.map((x, y) => (
              <div className='course-cards rounded-[0.5rem]' key={y}>
                <a href="#" class="flex flex-col lg:flex-row p-[30px] min-h-[250px] max-w-[500px] mx-auto lg:max-w-max bg-white border border-gray-200 rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700">

                  <div className='relative self-center lg:mr-[30px]'>
                    <img src={x.picture} className="rounded-[50%] min-h-[200px] min-w-[200px] mx-auto" alt="" />
                    <div className='bg-[#f8b81f] w-fit text-white py-[4px] px-[8px] rounded-[3px] font-[500] absolute top-[10px]'>
                      <p><i className="fa-regular fa-clock"></i> {x.weeks} Weeks</p>
                    </div>
                  </div>

                  <div className='course-details text-center lg:text-left mt-5 lg:mt-0'>

                    <p className='course-details-1 text-[#ee4a62] mb-[10px] font-[700] text-[18px]'>$ {x.price.toFixed(2)}</p>

                    <p className='course-details-2  text-[16px] mb-[8px]'>{x.description}</p>

                    <div className='course-details-3 flex flex-col xl:flex-row mb-[14px]'>
                      <div className='text-[#f8b81f] space-x-[3px]'>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                      </div>
                      <p className='xl:ml-3'>(5.0 / 7 Rating)</p>
                    </div>

                    <div className='course-details-4 mt-10 justify-center lg:justify-start flex text-[#a7a7a7] text-[14px]'>
                      <p className='border-r-2 lg:border-r-0 xl:border-r-2 border-solid border-[#e5e5e5] pr-4'><i className="fa-solid fa-lines-leaning pr-1"></i> {x.lessons} Lessons</p>
                      <p><i className="fa-solid fa-user pl-4 pr-1"></i> {x.students} Students </p>
                    </div>

                  </div>

                </a>
              </div>
            ))}

          </div>

          <img src={images.bannerShape3} className="with-mouse hidden lg:block absolute top-24 left-[-200px]" alt="" />

          <img src={images.bannerShape3} className="with-mouse hidden lg:block absolute bottom-[-70px] right-0 z-[-1]" alt="" />

          <img src={images.course_back} className="hidden lg:block absolute bottom-[-50px] right-0" alt="" />

        </div>



      </section>
    </>
  )
}

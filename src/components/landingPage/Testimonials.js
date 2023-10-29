import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { data } from '../../utils/demo_data';
import { images } from '../../utils/demo_images';


export default function Testimonials() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    arrows: false,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 760,
        settings: {
          dots: true,
          infinite: true,
          speed: 500,
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 1150,
        settings: {
          dots: true,
          infinite: true,
          speed: 500,
          slidesToShow: 2,
          slidesToScroll: 1,
        }
      }
    ]
  };

  return (
    <section className=''>
      <div className="testimonial-body py-[80px] lg:pt-[120px] lg:pb-[80px] xl:pb-[180px] relative z-[1]">
      <div className='containerr'>
        <div className='text-center'>
          <p className=''>TESTIMONIALS</p>
          <p className='text-[36px] font-[700] lg:w-[30%] mx-auto mb-1'>What Our Students Have to Say</p>
          <i className="fa-solid fa-slash text-[#1ab69b] rotate-[322deg] text-[36px] font-semibold"></i>
        </div>

        <div className='mt-[50px] '>
          <Slider {...settings}>
            {data.student_info.map((x, y) => (
              <div className='px-6 cursor-pointer' key={y}>
                <div className=''>
                  <img src={x.picture} className="rounded-[50%] z-10 mx-auto mb-[-60px]" alt="" />
                </div>
                <div className="block p-[30px] bg-white border border-gray-200 rounded-lg shadow-md ">
                  <p className='mt-[60px]'>{x.feedback}</p>
                  <div className='text-[#f8b81f] space-x-[3px] flex justify-center mt-[30px]'>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                  </div>
                  <p className='text-center font-[600] text-[20px] mb-2'>{x.name}</p>
                  <p className='text-center font-[600] text-[16px] text-[#808080]'>{x.designation}</p>
                </div>
              </div>
            ))}

          </Slider>
        </div>
      </div>
      <img src={images.dark_map2} className="absolute hidden xl:block top-44 lg:top-32 lg:left-96 z-[-1]" alt=""/> 
      </div>
      

    </section>
  )
}



import React from 'react'
import { images } from '../../utils/demo_images';
import $ from 'jquery';

export default function FAQ() {
  $("input:checkbox").on('click', function () {
    var $box = $(this);
    if ($box.is(":checked")) {

      var group = "input:checkbox[name='" + $box.attr("name") + "']";
      $(group).prop("checked", false);
      $box.prop("checked", true);
    } else {
      $box.prop("checked", false);
    }
  })
  return (
    <>
      <section className='containerr relative lg:my-[120px]'>
        <div className='flex flex-col lg:flex-row'>

          <div>
            <img src={images.faq} className="mt-10 lg:mt-0 hidden lg:block" alt="" />
          </div>

          <div className='lg:max-w-[50%] lg:ml-10'>

            <div className='mb-11 text-center lg:text-left'>
              <p className='font-[500] inline-block mb-[14px] text-[16px] text-[#808080] tracking-[1px] mt-10 lg:mt-0'>FAQ'S</p>
              <p className='text-[36px] font-[700] mb-1 lg:pr-24'>Over 10 Years in <span className='text-[#ee4a62]'>Distant Skills</span> Development</p>
              <i className="fa-solid fa-slash text-[36px] font-semibold text-[#1ab69b] rotate-[322deg]"></i>
            </div>

            <div className='accordion faq z-[1]'>

              <ul id='accordion'>

                <li className='accordion-list w-full mb-[30px]'>

                  <input type="checkbox" name='accordion' id='first' className='hidden radio' />
                  <label htmlFor="first" className='py-[20px] px-[40px] flex items-center justify-between text-[18px] font-[500] cursor-pointer rounded-t-[10px] '>How can I contact a school directly? <i className="fa-sharp fa-solid fa-angle-down text-[#808080]"></i></label>
                  <div className='content bg-white'>
                    <p className='p-[30px] text-[15px] leading-[1.73] font-[400] text-[#808080]'>Lorem ipsum dolor sit amet consectur adipiscing elit sed eius mod ex tempor incididunt labore dolore magna aliquaenim ad minim eniam.</p>
                  </div>
                </li>

                <li className='accordion-list w-full mb-[30px]'>

                  <input type="checkbox" name='accordion' id='second' className=' hidden radio' />
                  <label htmlFor="second" className='py-[20px] px-[40px] flex items-center justify-between text-[18px] font-[500] cursor-pointer rounded-t-[10px]'>How do I find a school where I want to study? <i className="fa-sharp fa-solid fa-angle-down text-[#808080]"></i></label>
                  <div className='content bg-white'>
                    <p className='p-[30px] text-[15px] leading-[1.73] font-[400] text-[#808080]'>Lorem ipsum dolor sit amet consectur adipiscing elit sed eius mod ex tempor incididunt labore dolore magna aliquaenim ad minim eniam.</p>
                  </div>
                </li>

                <li className='accordion-list w-full mb-[30px]'>

                  <input type="checkbox" name='accordion' id='third' className=' hidden radio' />
                  <label htmlFor="third" className='py-[20px] px-[40px] flex items-center justify-between text-[18px] font-[500] cursor-pointer rounded-t-[10px]'>Where should I study abroad?<i className="fa-sharp fa-solid fa-angle-down text-[#808080]"></i></label>
                  <div className='content bg-white'>
                    <p className='p-[30px] text-[15px] leading-[1.73] font-[400] text-[#808080]'>Lorem ipsum dolor sit amet consectur adipiscing elit sed eius mod ex tempor incididunt labore dolore magna aliquaenim ad minim eniam.</p>
                  </div>
                </li>

              </ul>

            </div>
          </div>
        </div>

        <img src={images.faqShape1} className="opposite-mouse hidden lg:block absolute top-[200px] z-[-1]" alt="" />
        <img src={images.faqShape2} className="with-mouse hidden lg:block absolute bottom-28 left-96 z-[-1]" alt="" />
        <img src={images.dark_map} className="hidden lg:block absolute left-[-300px] bottom-[0px] " alt="" />
        <img src={images.faqShape1} className="opposite-mouse hidden lg:block absolute opacity-[.4] bottom-[0px] right-0 h-[250px] z-[-1]" alt="" />

      </section>

    </>


  )
}

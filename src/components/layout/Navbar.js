import React from "react";
import { data } from "../../utils/demo_data";
import { images } from "../../utils/demo_images";
import $ from "jquery";

export default function Navbar() {
  $("input:checkbox").on("click", function () {
    var $box = $(this);
    if ($box.is(":checked")) {
      var group = "input:checkbox[name='" + $box.attr("name") + "']";
      $(group).prop("checked", false);
      $box.prop("checked", true);
    } else {
      $box.prop("checked", false);
    }
  });

  return (
    <section
      id="navbar"
      className="relative shadow-[0_6px_15px_0_rgb(0,0,0,0.1)]"
    >
      <nav className="hidden lg:flex leading-[94px] font-[600] text-[16px]">
        <div className="px-5 xl:px-10 py-5 xl:py-5 border-r-[1px] cursor-pointer">
          <img src={images.logo} className="" alt="" />
        </div>

        <div className="border-r-[1px] cursor-pointer">
          <div className="nav-category category">
            <p className="px-5 xl:px-10 hover:text-[#1AB69D] duration-[.5s]">
              <i className="uil uil-apps mr-2.5 "></i>Category
            </p>
            <div className="nav-category-list duration-[.5s] absolute visible z-[1] leading-[35px] bg-white pl-10 pr-36 pt-[20px] pb-[25px] shadow-[0_6px_15px_0_rgb(0,0,0,0.3)]">
              <ul className="font-[15px]">
                {data.nav_categories_item.map((x, y) => (
                  <li key={y} className="hover:text-[#1AB69D] duration-[.5s]">
                    {x.item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="flex cursor-pointer">
          {data.navbar_items.map((x, y) => (
            <div className="nav-category" key={y}>
              <p className="pl-[26px] pr-[18px] hover:text-[#1AB69D] duration-[.5s]">
                {x.item}{" "}
                <i className="fa-sharp fa-solid fa-angle-down ml-[8px]"></i>
              </p>

              <div
                className={`nav-category-list absolute invisible z-[1] leading-[35px] py-[20px] text-[15px] text-[#181818] shadow-[0_6px_15px_0_rgb(0,0,0,0.3)] bg-white`}
              >
                <div className="flex">
                  <div className="border-r-[1px]">
                    {x.content?.content1?.map((i, j) => (
                      <p className="px-10 hover:text-[#1AB69D] duration-[.5s]">{i.item}</p>
                    ))}
                  </div>
                  <div className="border-r-[1px]">
                    {x.content?.content2?.map((y, z) => (
                      <p className="px-10 hover:text-[#1AB69D] duration-[.5s]">{y.item}</p>
                    ))}
                  </div>
                  <div className="">
                    {x.content?.content3?.map((c, d) => (
                      <div className="">
                        <p className="px-20 hover:text-[#1AB69D] duration-[.5s]">{c.item}</p>
                        <img className="px-10 " src={c.picture} alt="" />
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="absolute right-5 flex h-full items-center">
          <label for="all-search">
            <i className="fa-sharp fa-solid fa-magnifying-glass  hover:text-[#1AB69D] duration-[.5s] mx-[20px] text-[20px] cursor-pointer"></i>
          </label>
          <input type="checkbox" className="hidden" id="all-search" />
          <i className="fi fi-rs-shopping-cart mx-[20px] hover:text-[#1AB69D] duration-[.5s] text-[20px] cursor-pointer"></i>
          <button className="bg-[#31b978] hover:bg-[#1ab69d] duration-[.5s] ease-linear flex items-center text-white rounded-[5px] px-[30px] text-[15px] font-[500] h-[50px] right-[0px] xl:mx-[30px]">
            Try for free <i className="fa-solid fa-arrow-right ml-[6px]"></i>
          </button>
        </div>

        <div></div>
      </nav>

      <nav className="nav_up flex lg:hidden leading-[94px] font-[600] text-[16px]">

        <div className="px-10 py-5">
          <img src={images.logo} className="" alt="" />
        </div>

        <input type="checkbox" id="check" />
        <label for="check" className="checkbtn">
          <i className="fa-sharp fa-solid fa-bars"></i>
        </label>

        <div className="nav_ul">
          <ul className="nav_ul_real accordion leading-[35px]">
            <li className="pl-[20px] pr-[50px]">
              <div className="flex pt-[20px] mb-[20px] ">
                <img src={images.logo} className="" alt="" />
                <input type="checkbox" id="check" />
                <label for="check" className="w-full self-center text-end text-[20px]">
                  <i class="fa-regular fa-circle-xmark"></i>
                </label>
              </div>

            </li>
            {data.navbar_items.map((x, y) => (
              <li
                className="accordion-list pl-[30px] pr-[50px] mt-5 space-y-[20px]"
                style={{ boxShadow: "0px 0px 0px 0px" }}
              >
                <div>
                  <label htmlFor={`${x.id}`} className="">
                    {x.item} <i className="fa-sharp fa-solid fa-plus float-right"></i>
                  </label>
                  <input
                    type="checkbox"
                    name="accordion"
                    id={`${x.id}`}
                    className="hidden radio"
                  />
                  <div className="content my-4 space-y-5">
                    {x.content?.content1?.map((a, b) => (
                      <p className="border-b-[2px]">{a.item}</p>
                    ))}
                    {x.content?.content2?.map((a, b) => (
                      <p className="border-b-[2px]">{a.item}</p>
                    ))}
                    {x.content?.content3?.map((a, b) => (
                      <p className="border-b-[2px]">{a.item}</p>
                    ))}
                  </div>
                </div>
              </li>
            ))}
          </ul>
          <div className="nav_ul_site">
          </div>
        </div>


      </nav>

    </section>
  );
}

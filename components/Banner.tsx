import React from "react";
import Slider from "react-slick";
import Image from "next/image";
import BannerText from "./BannerText";
import { BsArrowLeft } from "react-icons/bs";
import { BsArrowRight } from "react-icons/bs";
import ButtonPrimary from "./ButtonPrimary";
import "slick-carousel/slick/slick.css";


import {
  bannerImg,
  sliderImgFour,
  sliderImgOne,
  sliderImgThree,
  sliderImgTwo,
} from "../images";


function SampleNextArrow(props: any) {
  const { onClick } = props;
  return (
    <div className="absolute bottom-12 left-6 w-12 h-8 border-[1px] shadow-md border-black text-black bg-white text-xl flex items-center justify-center rounded-md hover:bg-yellow hover:border-transparent hover:text-white cursor-pointer duration-300 z-10" onClick={onClick}>
      <BsArrowLeft />
    </div>
  )
};

function SamplePrevArrow(props: any) {
  const { onClick } = props;
  return (
    <div className="absolute bottom-12 right-6 w-12 h-8 border-[1px] shadow-md border-black text-black bg-white text-xl flex items-center justify-center rounded-md hover:bg-yellow hover:border-transparent hover:text-white cursor-pointer duration-300 z-10" onClick={onClick}>
      <BsArrowRight />
    </div>
  )
};

const Banner = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };
  return (
    <div>
      <div className="w-full bg-white px-4 py-6 font-titleFont flex gap-4 border-b-[1px] hidden lg:flex">
        <div className="w-2/3 rounded-lg h-[410px] shadow-bannerShadow relative">
          <Slider {...settings}>
            <div className="w-full h-[410px] relative">
              <Image className="w-full h-full object-cover rounded-lg" src={sliderImgOne} alt="sliderImgOne" priority />

              <BannerText className="absolute w-60 h-full top-6 left-4 flex flex-col gap-3 text-white" title="Spring fashion in bloom" description="New trends & styles to turn heads anytime, on any budget." btnText="Shop now" />
            </div>


            <div className="w-full h-[410px] relative">
              <Image className="w-full h-full object-cover rounded-lg" src={sliderImgTwo} alt="sliderImgTwo" priority />

              <BannerText className="absolute w-60 h-full top-6 left-4 flex flex-col gap-3 text-white" title="Spring fashion in bloom" description="New trends & styles to turn heads anytime, on any budget." btnText="Shop now" />
            </div>


            <div className="w-full h-[410px] relative">
              <Image className="w-full h-full object-cover rounded-lg" src={sliderImgThree} alt="sliderImgThree" priority />

              <BannerText className="absolute w-60 h-full top-6 left-4 flex flex-col gap-3 text-black" title="Spring fashion in bloom" description="New trends & styles to turn heads anytime, on any budget." btnText="Shop now" />
            </div>
          </Slider>
        </div>


        <div className="w-1/3 border-[1px] border-gray-200 rounded-lg shadow-bannerShadow p-4 flex flex-col justify-between">
          <div className="flex items-center justify-between">
            <h2 className="text-xl font-semibold text-black">Flash Pick of the day</h2>
            <p className="text-base text-zinc-600 underline underline-offset-2">View all</p>
          </div>
          <Image className="h-60 object-cover" src={bannerImg} alt="flashsale" />
          <ButtonPrimary btnText="Options" />
          <p className="text-lg text-black font-semibold">From $199.90</p>
          <p className="text-base text-gray-500 -mt-1">Homepro TV Stand Cabinet for Living Room...</p>
        </div>
      </div>




      {/* Display MD */}
      <div className="w-full bg-white px-4 py-6 font-titleFont flex gap-4 border-b-[1px] lg:hidden md_banner">
        <div className="w-full rounded-lg h-[410px] shadow-bannerShadow relative">
        <Slider {...settings}>
            <div className="w-full h-[410px] relative">
              <Image className="w-full h-full object-cover rounded-lg" src={sliderImgOne} alt="sliderImgOne" priority />

              <BannerText className="absolute w-60 h-full top-6 left-4 flex flex-col gap-3 text-white" title="Spring fashion in bloom" description="New trends & styles to turn heads anytime, on any budget." btnText="Shop now" />
            </div>


            <div className="w-full h-[410px] relative">
              <Image className="w-full h-full object-cover rounded-lg" src={sliderImgTwo} alt="sliderImgTwo" priority />

              <BannerText className="absolute w-60 h-full top-6 left-4 flex flex-col gap-3 text-white" title="Spring fashion in bloom" description="New trends & styles to turn heads anytime, on any budget." btnText="Shop now" />
            </div>


            <div className="w-full h-[410px] relative">
              <Image className="w-full h-full object-cover rounded-lg" src={sliderImgThree} alt="sliderImgThree" priority />

              <BannerText className="absolute w-60 h-full top-6 left-4 flex flex-col gap-3 text-black" title="Spring fashion in bloom" description="New trends & styles to turn heads anytime, on any budget." btnText="Shop now" />
            </div>
          </Slider>
        </div>
      </div>

    </div>

  )
}

export default Banner

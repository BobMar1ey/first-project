import React from "react";
import "./Hero.css";
import HeroImg from '../../image/Hero/hero.png'

export default function Hero() {
  return (
    <section className="hero h-full grow">
      <div className="flex   flex-wrap justify-center tems-center">
        <div className="max-w-[719px] w-full flex justify-end pl-[20px] pb-[117px] pr-[10px] md:pr-[100px] md:pt-[75px] bg-[#ece7e4] ">
          <div className="hero__box max-w-[510px] text-start " >
            <h2  data-aos-delay="300" data-aos="fade-right" className=" font-normal text-[20px] text-[#645C55] capitalize leading-[20px] pt-[60px] mb-[16px]">
       
              Wishbone+Partners
            </h2>
            <h1  data-aos-delay="600" data-aos="fade-left" className=" text-[64px] leading-[71px]  max-w-[415px] mb-[30px] ">
              The home of beautiful architecture.
            </h1>
            <p  data-aos-delay="900" data-aos="fade-right" className="hero_text text-[17px] leading-[24px] mb-[70px]">
              We are an architecture firm with a focus on beautiful but
              functional design. At its heart, we believe design is about
              usability and accessibility — these are the guiding principles for
              our work. Read more about our previous projects, our process and
              our team below.
            </p>
            <a  data-aos-delay="1200" data-aos="fade-left" className="hero__button  transition-all duration-500 pl-[15px]" href="#">Read more</a>
          </div>
        </div>
        <div className="hero_img bg-[#000] min-h-[25rem] lg:min-h-[720px] bg-[HeroImg] bg-cover bg-center bg-no-repeat"></div>
      </div>
    </section>
  );
}


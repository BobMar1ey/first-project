import React from "react";
import one from "../../image/How/1.png";
import two from "../../image/How/2.png";
import third from "../../image/How/3.png";

import logoOne from "../../image/How/LogoOne.png";
import logoTwo from "../../image/How/LogoTwo.png";
import logoThree from "../../image/How/Logothree.png";
import logoFour from "../../image/How/LogoFour.png";

import "./How.css";
export default function How() {
  return (
    <section className="How">
      <div className="pt-[95px] ">
        <div className="mb-[47px]">
          <h3 className="text-14px leading-[20px] tracking-[2px] uppercase mb-[13px]">
            Our process
          </h3>
          <h2 className="text-[39px] leading-[42px]">How we do what we do.</h2>
        </div>
        <div className=" flex justify-center md:justify-between flex-wrap pl-[20px] pr-[20px] md:pl-[185px] md:pr-[165px]">
          <div className="pb-[100px] max-w-[294px] flex flex-col justify-center items-center">
            <img className="w-[117px] mb-[15px]" src={one} alt="" />
            <h4 className="text-[18px] mb-[10px]">Sketching</h4>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla ut
              tristique libero. Nulla luctus sapien ac arcu tempor, vitae tempor
              leo iaculis.
            </p>
          </div>
          <div className="pb-[100px] max-w-[294px] flex flex-col justify-start items-center">
            <img className=" w-[117px] mb-[15px]" src={two} alt="" />
            <h4 className="text-[18px] mb-[10px]">Finalizing</h4>
            <p>
              Adipiscing elit. Nulla ut tristique libero. Nulla vitae tempor leo
              iaculis luctus sapien ac arcu tempor, vitae.
            </p>
          </div>
          <div className="pb-[100px] max-w-[294px] flex flex-col justify-center items-center">
            <img className="w-[117px] mb-[15px]" src={third} alt="" />
            <h4 className="text-[18px] mb-[10px]"> Building</h4>
            <p>
              Nulla ut tristique libero. Lorem ipsum ut tristique libero. Nulla
              luctus sapien ac arcu tempor, vitae lorem ipsum dolor leo iaculis.
            </p>
          </div>
        </div>
      </div>
      <div className="how__bg flex items-center justify-end max-h-[600px] h-screen pr-[65px]">
        <div className="max-w-[285px] text-start">
          <h2 className="text-[#403E3B] uppercase">The marble staircase</h2>
          <p className="leading-[24px] text-[18px]  text-[#645C55]">
            Lorem ipsum dolor sit amet, dolor sit amet dolor sit amet.
          </p>
        </div>
      </div>
      <div className="bg-[#403E3B] flex justify-between pt-[65px] pb-[60px] pl-[130px] pr-[130px] max-h-[410px] h-screen">
        <div className="text-start max-w-[461px] pt-[70px] pr-[10px]">
          <h3 className="uppercase text-[#ECE7E4] mb-[] leading-[12px]">
            prior clients
          </h3>
          <h2 className="text-[#FFFFFF] text-[32px] leading-[32px] mb-[8px]">
            Happy customers.
          </h2>
          <p className=" leading-[24px] text-[#ECE7E4]">
            Morbi neque ex, condimentum dapibus congue et, vulputate ut ligula.
            Vestibulum sit amet urna turpis. Mauris euismod elit et nisi
            ultrices, ut faucibus orci tincidunt.
          </p>
        </div>
        <div className="flex flex-wrap justify-center items-center w-full">
          <div className="flex max-h-[250px] h-full  max-w-[400px] w-full flex-wrap justify-between gap-[20px]">
            <a className="flex items-center justify-center" href="">
              <img className="w-[128px]" src={logoOne} alt="" />
            </a>
            <a className="flex items-center justify-center" href="">
              <img className="w-[128px]" src={logoTwo} alt="" />
            </a>
            <a className="flex items-center justify-center" href="">
              <img className="w-[128px]" src={logoThree} alt="" />
            </a>
            <a className="flex items-center justify-center" href="">
              <img className="w-[128px]" src={logoFour} alt="" />
            </a>
          </div>
        </div>
      </div>
      <div className="  how__bg-two flex items-center justify-start max-h-[600px] h-screen pl-[65px]">
        <div className="max-w-[285px] text-start">
          <h2 className="text-[#403E3B] uppercase">The marble staircase</h2>
          <p className="leading-[24px] text-[18px]  text-[#645C55]">
            Lorem ipsum dolor sit amet, dolor sit amet dolor sit amet.
          </p>
        </div>
      </div>
    </section>
  );
}

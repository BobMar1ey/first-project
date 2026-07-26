import React from "react";
import avatar from '../../image/Firm/avatar.png'
import './Firm.css'
export default function Firm() {
  return (
    <section>
      <div className="flex justify-center items-center max-h-[782px] h-screen">
        <div className="flex max-w-[768px] w-full justify-center md:justify-between pb-[155px] md:flex-row flex-col md:items-start items-center
        ">
          <h2 className="pl-[] text-[32px] leading-[48px] mb-[20px] pl-[10px]">Our firm</h2>
          <div className="text-[#403E3B] max-w-[500px] flex flex-col gap-[10px] text-start leading-[22px] pr-[20px] md:pl-[0px] pl-[20px] text-[16px]">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse varius enim in eros elementum tristique. Duis cursus,
              mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam
              libero vitae erat. Aenean faucibus nibh et justo cursus id rutrum
              lorem imperdiet. Nunc ut sem vitae risus tristique posuere.
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse varius enim in eros elementum tristique. Duis cursus,
              mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam
              libero vitae erat. Aenean faucibus nibh et justo cursus id rutrum
              lorem imperdiet. Nunc ut sem vitae risus tristique posuere.
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse varius enim in eros elementum tristique. Duis cursus,
              mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam
              libero vitae erat. Aenean faucibus nibh et justo cursus id rutrum
              lorem imperdiet. Nunc ut sem vitae risus tristique posuere.
            </p>
            <div className="flex items-center gap-[30px]">
              <img className="w-[84px] h-[84px]" src={avatar} alt="" />
              <div>
                <h2 className="leading-[26px]">Stephen Collier</h2>
                <h3 className="leading-[14px] text-[#645C55]">Senior Partner</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className=" firm__bg flex items-center justify-end max-h-[600px] h-screen  pr-[65px]">
         <div className="max-w-[285px] text-start">
            <h2 className="text-[#403E3B]">Reeding House</h2>
            <p className="text-[#645C55]">Lorem ipsum dolor sit amet, dolor sit amet dolor sit amet.</p>
         </div>
      </div>
    </section>
  );
}

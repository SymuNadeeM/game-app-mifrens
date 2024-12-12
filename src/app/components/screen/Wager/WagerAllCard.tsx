"use client";

import { wagerCardData } from "@/app/data/wagerCardData";
import Image from "next/image";
import "swiper/css";
import { Swiper, SwiperSlide } from "swiper/react";
import dollarBig from "../../../../assets/wager/dollar-icon-big.png";

const WagerAllCardSlider = () => {
  return (
    <div className="mt-3 lg:mt-5">
      <Swiper
        spaceBetween={17}
        slidesPerView={3.9}
        loop={true}
        style={{ paddingLeft: "24px" }}
      >
        {wagerCardData.map((card, index) => (
          <SwiperSlide key={index}>
            <div className="h-[215px] rounded-[8.38px] bg-[#0D1331]/[50%] border-[1.43px] border-white/[15%] hover:border-[#C9D15E] duration-200 wager-card cursor-pointer">
              <div className="m-2 h-[139px] border-[.5px] border-white/[15%] bg-[#293557]/[20%] wager-card-head-bg rounded">
                <div className="px-2 pt-[11px] flex items-center justify-between">
                  <p className="text-xs font-medium text-[#C5C9D1]">Prize</p>
                  <div className="flex items-center gap-[2px]">
                    <div className="w-3 h-3">
                      <Image src={card.icon} alt="dollarIcon" />
                    </div>
                    <p className="text-xs font-medium text-white">
                      {card.prize}
                    </p>
                  </div>
                </div>
                <div className="mt-2 flex items-center justify-center">
                  <div className="w-[84px] h-[84px]">
                    <Image src={card.sack} alt="dollarSack" />
                  </div>
                </div>
              </div>

              <div className="h-[51px] entry-part p-1 mx-1 mb-1.5 flex flex-col items-center justify-center">
                <h4 className="text-[10px] font-medium text-[#C9D15E] tracking-[-1%] uppercase text-center">
                  ENTRY
                </h4>
                <div className="flex items-center gap-1">
                  <div className="w-[17.57px] h-[17.57px]">
                    <Image src={dollarBig} alt="dollarBig" />
                  </div>
                  <p className="text-[19.55px] font-medium text-white">
                    {card.entry}
                  </p>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default WagerAllCardSlider;

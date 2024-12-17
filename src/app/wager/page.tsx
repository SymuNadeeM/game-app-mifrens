"use client";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import closeICon from "../../assets/wager/close-button.png";

import { wagerCardData } from "@/app/data/wagerCardData";
import { useState } from "react";
import "swiper/css";
import { Swiper, SwiperSlide } from "swiper/react";
import dollarBig from "../../assets/wager/dollar-icon-big.png";
const WagerPage = () => {
  const [selectedEntry, setSelectedEntry] = useState<string | null>(null);
  const router = useRouter();

  const handleCardClick = (entry: string) => {
    setSelectedEntry(entry);
    localStorage.setItem("selectedEntry", entry);
  };
  return (
    <div className="flex flex-col items-center justify-center min-h-screen w-screen lg:w-full overflow-x-hidden">
      <div className="w-screen lg:w-[812px] h-screen lg:h-[375px] bg-[url('/wager-bg.svg')] bg-[#081626] text-white overflow-hidden relative">
        <div className="flex items-center justify-end pt-3 lg:pt-[24.5px] pr-[24.5px]">
          <button
            onClick={() => router.back()}
            className="w-[30.39px] h-[30.39px]"
          >
            <Image src={closeICon} alt="closeICon" className="" />
          </button>
        </div>
        {/* SLIDER START */}
        <div className="mt-3 lg:mt-5">
          <Swiper
            spaceBetween={17}
            slidesPerView={3.9}
            loop={true}
            style={{ paddingLeft: "24px" }}
          >
            {wagerCardData.map((card, index) => (
              <SwiperSlide key={index}>
                <div
                  onClick={() => handleCardClick(card.entry)}
                  className={`h-[215px] rounded-[8.38px] bg-[#0D1331]/[50%] border-[1.43px]  duration-200 wager-card cursor-pointer ${
                    selectedEntry === card.entry
                      ? "border-[#C9D15E]"
                      : "border-white/[15%] hover:border-[#C9D15E]"
                  }`}
                >
                  <div className="m-2 h-[139px] border-[.5px] border-white/[15%] bg-[#293557]/[20%] wager-card-head-bg rounded">
                    <div className="px-2 pt-[11px] flex items-center justify-between">
                      <p className="text-xs font-medium text-[#C5C9D1]">
                        Prize
                      </p>
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
        <div className="flex items-center justify-end">
          <div className="mt-5 lg:mt-7 mr-8 lg:mr-6">
            <Link
              href={"./searching-opponent"}
              className="w-[142px] h-8 next-button rounded flex items-center justify-center font-semibold text-darkBlue relative z-20"
            >
              Battle
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WagerPage;

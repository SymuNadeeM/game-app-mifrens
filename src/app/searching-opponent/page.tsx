"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import cardBgBlur from "../../assets/searching-opp/card-bg-blur.svg";
import SearchingLoad from "../components/screen/SearchingOpp/SearchingLoad";

import sectionIcon from "../../assets/home/section-home.svg";
import character from "../../assets/searching-opp/character.png";
import coinF from "../../assets/searching-opp/F_Coin.png";
import starIcon from "../../assets/searching-opp/star-icon.png";
const SearchingOpponentPage = () => {
  const [selectedEntry, setSelectedEntry] = useState<string | null>(null);

  useEffect(() => {
    if (typeof window !== "undefined") {
      // Check if running in the browser
      const entry = localStorage.getItem("selectedEntry");
      setSelectedEntry(entry);
    }
  }, []);
  return (
    <div className="flex flex-col items-center justify-center min-h-screen w-screen lg:w-full overflow-x-hidden">
      <div className="w-screen lg:w-[812px] h-screen lg:h-[375px] bg-[url('/searching-opponent-bg.svg')] bg-[#081626] text-white overflow-hidden relative flex items-center justify-center">
        <div className="absolute left-[65px] top-0 bottom-0">
          <div className="w-[240px] h-[375px] relative">
            {/* Start */}
            <div className="pt-8 lg:pt-[60px] px-8 pb-10">
              <div className="w-[174px] h-[181px] rounded border-[.5px] border-white/[12%] bg-[#293557]/[20%] backdrop-blur overflow-hidden relative z-20 flex items-center justify-center">
                <div className="w-[149px]">
                  <Image src={character} alt="character" />
                </div>
                <div className="absolute bottom-0">
                  <div className="w-[173px] h-[46px] bg-[#1E2A4C] backdrop-blur rounded-bl rounded-br relative">
                    <div className="bg-[#051F45] absolute w-[46px] h-[23px] bottom-[11.5px] left-[-11.5px] -rotate-90">
                      <div className="w-[46px] h-[23px] flex items-center justify-center gap-1">
                        <Image
                          src={sectionIcon}
                          alt="sectionIcon"
                          className="rotate-90 w-3 h-3"
                        />
                        <h5 className="text-[10px] text-white/[50%] tracking-[-1%]">
                          TON
                        </h5>
                      </div>
                    </div>
                    <div className="pl-[33px] py-[5px]">
                      <h4 className="text-sm font-medium text-white leading-[21px] tracking-[-1%]">
                        SIR M’FREN
                      </h4>
                      <div className="flex items-center gap-[3px]">
                        <h5 className="text-[10px] text-white/[50%] tracking-[-1%]">
                          LVL
                        </h5>
                        <h5 className="text-[10px] font-semibold text-[#E7E9EC] tracking-[-1%]">
                          1
                        </h5>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="mt-[17px] space-y-1">
                <div className="px-2 py-1 flex items-center gap-2 bg-[#24345F]/[28%] rounded backdrop-blur relative z-20">
                  <div className="w-[15px] h-[15px]">
                    <Image src={starIcon} alt="starIcon" />
                  </div>
                  <div>
                    <h4 className="text-sm leading-[21px] tracking-[-1%] text-white">
                      Johnny
                    </h4>
                    <div className="flex items-center gap-[3px]">
                      <p className="text-[10px] leading-[15px] tracking-[-1%] text-white/[50%] uppercase">
                        RANK
                      </p>
                      <p className="text-[10px] leading-[15px] tracking-[-1%] text-[#C9D15E] uppercase">
                        1
                      </p>
                    </div>
                  </div>
                </div>
                <div className="px-2 py-1 flex items-center justify-center gap-1 bg-[#18233F] rounded relative z-20">
                  <div className="w-[14px] h-[14px]">
                    <Image src={coinF} alt="coinF" />
                  </div>
                  <p className="text-sm leading-[21px] tracking-[-1%] text-white/[80%]">
                    {selectedEntry || "Loading..."}
                  </p>
                </div>
              </div>
            </div>
            <div className="absolute inset-0 z-10">
              <Image src={cardBgBlur} alt="cardBgBlur" className="h-[375px]" />
            </div>
          </div>
        </div>
        <div>
          <h2 className="text-[48px] font-semibold text-center text-white">
            VS
          </h2>
        </div>
        <div className="absolute top-[124px] lg:top-[146px] left-[561px]">
          <div className="w-[148px] flex flex-col items-center gap-[21px]">
            <SearchingLoad />
            <p className="text-xs text-white/[70%]">Searching for Opponent</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchingOpponentPage;

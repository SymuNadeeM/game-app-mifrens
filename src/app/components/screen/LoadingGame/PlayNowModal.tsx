"use client";

import Image from "next/image";
import { useState } from "react";
import crownMain from "../../../../assets/crown-big.png";
import crownFrame from "../../../../assets/crown-frame.svg";
import frameDots from "../../../../assets/dots-frame.svg";
import bgForest from "../../../../assets/modal-bg-forest.svg";
import shadowCrown from "../../../../assets/shadow-crown.svg";

const PlayNowModal = () => {
  const [currentStep, setCurrentStep] = useState<"story" | "note">("story");

  const handleNext = () => {
    if (currentStep === "story") {
      setCurrentStep("note");
    } else if (currentStep === "note") {
      window.location.href = "./ton";
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
      <div className="w-screen lg:w-[812px] h-screen lg:h-[375px] bg-[#081626] relative">
        {/* Show Story Part */}
        {currentStep === "story" && (
          <div className="relative z-20 pt-8 lg:pt-[52px] pl-[87px] flex gap-5 ">
            <div className="w-[204px] h-[271px] border-[.5px] border-white/[20%] rounded p-1 bg-[#29355733]/[20%] frame-shape relative animate-zoomInBottom">
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[194px] h-[258.16px] pointer-events-none">
                <div className="relative">
                  <Image
                    src={crownFrame}
                    alt="crownFrame"
                    className="w-full h-full"
                  />
                  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[168.21px] h-[245.18px] z-40 pointer-events-none ">
                    <Image
                      width={168.21}
                      height={245.18}
                      src={crownMain}
                      alt="crownMain"
                      className="w-full h-full relative"
                    />
                  </div>
                </div>
              </div>
            </div>

            <div>
              {/* story part */}
              <div className="w-[396px] h-[29px] px-2 story-shapes flex items-center justify-center relative">
                <h4 className="text-xs font-medium tracking-[6%] text-center text-white">
                  STORY
                </h4>
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                  <Image
                    src={frameDots}
                    alt="frameDots"
                    className="w-full h-full"
                  />
                </div>
              </div>
              <div
                id="story-text-part"
                className={`mt-5 flex items-center justify-end relative ${
                  currentStep === "story" ? "animate-zoomInRight" : ""
                }`}
              >
                <h4 className="w-[354px] text-xs leading-6 tracking-[1%] text-white/[70%]">
                  In the vast and dynamic expanse of the Cryptoverse, powerful
                  blockchains—
                  <span className="font-bold text-white">
                    Ethereum, Solana, Binance Smart Chain (BSC), TON,
                  </span>{" "}
                  and <span className="font-bold">more</span>—are gearing up for
                  an epic confrontation. An ancient prophecy has foretold the
                  emergence of the legendary Bull Crown, an artifact that
                  bestows unparalleled power, prestige, and untold riches upon
                  the blockchain that claims it.
                </h4>
              </div>
            </div>
          </div>
        )}
        {currentStep === "story" && (
          <div className="absolute top-0 left-0 w-[500px] h-full pointer-events-none z-10">
            <Image
              src={shadowCrown}
              alt="shadowCrown"
              className="w-full h-full"
            />
          </div>
        )}
        {/* Show Note Part */}
        {currentStep === "note" && (
          <div
            id="note-part"
            className={`relative z-20 pt-[78px] ${
              currentStep === "note" ? "animate-zoomInBottom" : ""
            }`}
          >
            <div>
              <div className="w-full flex items-center justify-center">
                <div className="w-[464px] h-[29px] px-2 story-shapes flex items-center justify-center relative">
                  <h4 className="text-xs font-medium tracking-[6%] text-center text-white uppercase">
                    Note
                  </h4>
                  <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                    <Image
                      src={frameDots}
                      alt="frameDots"
                      className="w-full h-full"
                    />
                  </div>
                </div>
              </div>
              <div className="mt-5 max-w-[639px] mx-auto text-center">
                <h4 className="text-white/[70%] font-normal tracking-[1%] leading-8 text-center">
                  Join the battle for the Bull Crown and claim your riches!
                </h4>
                <h4 className="text-white/[70%] font-normal tracking-[1%] leading-8 text-center">
                  Choose your blockchain, dominate the competition, and earn
                  rewards ? {""}
                </h4>
                <h4 className="text-[#b8bdc2] font-semibold tracking-[1%] leading-8 text-center">
                  Once you select a character you can’t change it.
                </h4>
              </div>
            </div>
          </div>
        )}

        {/* Next Button */}
        <div className="absolute bottom-[5%] lg:bottom-6 right-8 lg:right-7">
          <button
            onClick={handleNext}
            className="w-[147px] h-8 next-button rounded flex items-center justify-center font-semibold text-darkBlue relative z-20"
          >
            Next
          </button>
        </div>

        {/* Background Image */}
        <div className="absolute top-0 left-0 right-0 z-10">
          <Image
            src={bgForest}
            alt="bgForest"
          />
        </div>
      </div>
    </div>
  );
};

export default PlayNowModal;

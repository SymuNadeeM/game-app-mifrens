import Image from "next/image";
import { useState } from "react";
import sectionIcon from "../../../../assets/home/section-home.svg";
import spDemo from "../../../../assets/shop/sp-demo.png";

const SpecialTabs = () => {
  const [isSubscribed, setIsSubscribed] = useState(false);

  // Handle Subscribe button click
  const handleSubscribeClick = () => {
    setIsSubscribed(true);
  };

  return (
    <div className="w-[590px] lg:w-[656px] h-[250px] lg:h-[288px] rounded border-[.5px] border-white/[10%] bg-[#293557]/[20%] backdrop-blur pt-[15px] pl-3 pr-[14px]">
      <div className="w-full h-[136px] rounded border-[.5px] border-white/[3%] bg-[#293557]/[20%] backdrop-blur flex items-center gap-1">
        {/* demo pic changed */}
        <div className="ml-2 w-[111.64px] h-[136px]">
          <Image src={spDemo} alt="spDemo" />
        </div>
        <div className="px-2 flex items-center gap-3 lg:gap-[23px] rounded">
          <div className="space-y-[2px]">
            <h4 className="text-sm font-medium text-white">Daily Claim Bot</h4>
            <p className="max-w-[333px] text-[10px] leading-[15.5px] tracking-[-1%] text-[#979EAC]">
              Automate your daily rewards for just 1 TON/month. Never miss
              out—stay rewarded effortlessly
            </p>
            <div className="flex items-center gap-1">
              <Image
                src={sectionIcon}
                alt="section icon"
                className="rotate-90 w-3 h-3"
              />
              <p className="text-sm font-medium tracking-[-1%] text-white">1</p>
              <p className="text-[8px] font-medium tracking-[-1%] text-[#C5C9D1]">
                /month
              </p>
            </div>
            {isSubscribed && (
              <p className="text-[10px] font-medium text-[#D92348]">
                Expires: 10/12/2024
              </p>
            )}
          </div>
          <button
            onClick={handleSubscribeClick}
            className={`w-[102px] h-8 flex items-center justify-center rounded  text-xs font-semibold text-[#0C1A35] ${
              isSubscribed
                ? " subscribe-active text-[#979EAC]"
                : "text-[#0C1A35] subscribe-button border-t"
            } `}
          >
            Subscribe
          </button>
        </div>
      </div>
    </div>
  );
};

export default SpecialTabs;

"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import coin from "../../../../assets/character-select/f-coin.svg";
import menuBar from "../../../../assets/character-select/menubar.svg";
import navClinton from "../../../../assets/home/nav-avatar.png";
import notification from "../../../../assets/home/notification.svg";
import rankStar from "../../../../assets/home/rank-star.svg";
import NavModal from "./NavModal";

const HomeNav = () => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  return (
    <nav className="w-full px-[2.5rem] lg:px-8 pt-[10.86px] pb-1 h-[51.86px] flex items-start justify-between">
      <Link
        href={"#"}
        className="flex items-center w-[105px] h-[37px] z-20"
      >
        <div className="z-20 relative">
          <div className="w-[37px] h-[37px]">
            <Image
              width={37}
              height={37}
              src={navClinton}
              alt="navClinton"
              className="w-full h-full"
            />
          </div>
          <div className="absolute bottom-[-8px] left-[-12px] pointer-events-none">
            <Image
              src={rankStar}
              alt="rankStar"
            />
          </div>
        </div>
        <div className="w-[76px] h-[37px] pr-1.5 pl-4 border border-white/[12%] ml-[-8px] bg-[#0A1C33] rounded-br rounded-tr coin-nav flex items-center">
          <div>
            <h4 className="text-xs text-white">Clinton</h4>
            <div className="flex items-center gap-[3px]">
              <h5 className="text-[10px] leading-[-1%] text-white/[50%]">
                Rank
              </h5>
              <h5 className="text-[10px] font-semibold text-[#C9D15E]">0</h5>
            </div>
          </div>
        </div>
      </Link>
      <div className="flex items-center gap-[9px]">
        <div className="w-[97px] h-[22px] pl-1 py-1 pr-2 bg-gradient-to-b from-[#1E54994D] to-[#0A1C334D] coin-nav border border-[#59677c] rounded flex items-center gap-1">
          <Image
            src={coin}
            alt="coin"
          />
          <h5 className="text-xs">23,432</h5>
        </div>
        <button className="w-[22px] h-[22px] bg-gradient-to-b from-[#1E54994D] to-[#0A1C334D] coin-nav border border-[#59677c] rounded flex items-center justify-center">
          <Image
            src={notification}
            alt="notification"
          />
        </button>
        <button
          onClick={() => setIsMenuOpen(true)}
          className="w-[22px] h-[22px] bg-gradient-to-b from-[#1E54994D] to-[#0A1C334D] coin-nav border border-[#59677c] rounded flex items-center justify-center"
        >
          <Image
            src={menuBar}
            alt="menuBar"
          />
        </button>
      </div>
      {isMenuOpen && <NavModal onClose={() => setIsMenuOpen(false)} />}
    </nav>
  );
};

export default HomeNav;

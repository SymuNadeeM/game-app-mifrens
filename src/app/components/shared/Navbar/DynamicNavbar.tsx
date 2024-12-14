"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState } from "react";
import coin from "../../../../assets/character-select/f-coin.svg";
import menuBar from "../../../../assets/character-select/menubar.svg";
import backIcon from "../../../../assets/upgrade-character/back-icon.svg";
import NavModal from "./NavModal";

interface DynamicNavbarProps {
  pageName: string;
  backLink: string;
  coinCount: string;
}

const DynamicNavbar = ({
  pageName,

  coinCount,
}: DynamicNavbarProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const router = useRouter();
  return (
    <nav className="w-full px-8 lg:px-6 h-10 bg-[#0C1724]/[30%] flex items-center justify-between border-bottom-10-white">
      <div className="h-6 flex items-center gap-2">
        <button
          onClick={() => router.back()}
          className="w-5 h-5 rounded flex items-center justify-center bg-[#C4D030] shadow-for-button"
        >
          <Image src={backIcon} alt="backIcon" />
        </button>
        <div className="nav-select-char h-6 px-2 flex items-center justify-center">
          <h4 className="text-[13px] font-semibold tracking-[-1%] text-white uppercase">
            {pageName}
          </h4>
        </div>
      </div>
      <div className="flex items-center gap-[9px]">
        <div className="w-[97px] h-[22px] pl-1 py-1 pr-2 bg-gradient-to-b from-[#1E54994D] to-[#0A1C334D] coin-nav border border-[#59677c] rounded flex items-center gap-1">
          <Image src={coin} alt="coin" />
          <p className="text-xs">{coinCount}</p>
        </div>
        <button
          onClick={() => setIsMenuOpen(true)}
          className="w-[22px] h-[22px] bg-gradient-to-b from-[#1E54994D] to-[#0A1C334D] coin-nav border border-[#59677c] rounded flex items-center justify-center"
        >
          <Image src={menuBar} alt="menuBar" />
        </button>
      </div>
      {isMenuOpen && <NavModal onClose={() => setIsMenuOpen(false)} />}
    </nav>
  );
};

export default DynamicNavbar;

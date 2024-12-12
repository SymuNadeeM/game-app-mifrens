"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import coin from "../../../../assets/character-select/f-coin.svg";
import menuBar from "../../../../assets/character-select/menubar.svg";
import backIcon from "../../../../assets/upgrade-character/back-icon.svg";
import NavModal from "./NavModal";

interface CommonNavProps {
  navTitle: string;
  backLink: string;
}

const CommonNav: React.FC<CommonNavProps> = ({ navTitle, backLink }) => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

  return (
    <nav className="w-full px-8 lg:px-6 h-10 bg-[#0C1724]/[30%] flex items-center justify-between border-bottom-10-white">
      <div className="h-6 flex items-center gap-2">
        <Link
          href={backLink}
          className="w-5 h-5 rounded flex items-center justify-center bg-[#C4D030] shadow-for-button"
        >
          <Image src={backIcon} alt="Back" />
        </Link>
        <div className="nav-select-char h-6 px-2 flex items-center justify-center">
          <h4 className="text-[13px] font-semibold tracking-[-1%] text-white uppercase">
            {navTitle}
          </h4>
        </div>
      </div>
      <div className="flex items-center gap-[9px]">
        <div className="w-[97px] h-[22px] pl-1 py-1 pr-2 bg-gradient-to-b from-[#1E54994D] to-[#0A1C334D] coin-nav border border-[#59677c] rounded flex items-center gap-1">
          <Image src={coin} alt="Coin" />
          <h5 className="text-xs">23,432</h5>
        </div>
        <button
          onClick={() => setIsMenuOpen(true)}
          className="w-[22px] h-[22px] bg-gradient-to-b from-[#1E54994D] to-[#0A1C334D] coin-nav border border-[#59677c] rounded flex items-center justify-center"
        >
          <Image src={menuBar} alt="Menu" />
        </button>
      </div>
      {isMenuOpen && <NavModal onClose={() => setIsMenuOpen(false)} />}
    </nav>
  );
};

export default CommonNav;

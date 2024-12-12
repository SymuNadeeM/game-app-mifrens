import Image from "next/image";
import { useState } from "react";
import coin from "../../../../assets/character-select/f-coin.svg";
import menuBar from "../../../../assets/character-select/menubar.svg";
import NavModal from "./NavModal";

const CharacterSelectNav = () => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  return (
    <nav className="w-full px-8 lg:px-6 h-10 bg-[#0C17244D]/[30%] flex items-center justify-between border-bottom-10-white">
      <div className="max-w-[142px] h-6 nav-select-char flex items-center justify-center">
        <h4 className="text-[13px] font-semibold tracking-[-1%] text-white uppercase">
          Character select
        </h4>
      </div>
      <div className="flex items-center gap-[9px]">
        <div className="w-[97px] h-[22px] pl-1 py-1 pr-2 bg-gradient-to-b from-[#1E54994D] to-[#0A1C334D] coin-nav border border-[#59677c] rounded flex items-center gap-1">
          <Image src={coin} alt="coin" />
          <h5 className="text-xs">0</h5>
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

export default CharacterSelectNav;

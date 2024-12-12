import Image from "next/image";
import { useState } from "react";
import downIcon from "../../../../assets/leaderboard/arrow_drop_down.svg";

type DropdownProps = {
  items: string[];
  onSelect: (item: string) => void;
};

const Dropdown: React.FC<DropdownProps> = ({ items, onSelect }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState(items[0]);

  const handleSelect = (item: string) => {
    setSelectedItem(item);
    onSelect(item);
    setIsOpen(false);
  };

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="h-[26px] px-2 bg-[#293557]/[50%]  border-[.5px] backdrop-blur border-white/[20%] rounded-[2px] text-[10px] font-medium tracking-[-1%] text-white focus:outline-none focus:border-[#C9D15E] focus:border-opacity-40  flex items-center uppercase justify-center gap-1"
      >
        {selectedItem}
        <Image src={downIcon} alt="downIcon" />
      </button>
      {isOpen && (
        <ul className="absolute  left-[-53px] w-[124px] p-[2px] mt-1 z-50 bg-[#1A2133] border-[.5px] border-white/[5%] rounded menu-for-button space-y-[2px]">
          {items.map((item, index) => (
            <li
              key={index}
              onClick={() => handleSelect(item)}
              className="h-[31px] p-2 bg-[#293557]/[20%] backdrop-blur rounded-sm uppercase cursor-pointer text-[10px] font-medium tracking-[-1%] text-white hover:bg-[#293557]/[30%]"
            >
              {item}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Dropdown;

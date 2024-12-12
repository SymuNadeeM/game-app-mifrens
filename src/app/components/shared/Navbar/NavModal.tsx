import Image from "next/image";
import React, { useState } from "react";
import close from "../../../../assets/character-select/close.svg";
import musicIcon from "../../../../assets/music-icon.svg";
import soundIcon from "../../../../assets/sound-icon.svg";
import storyIcon from "../../../../assets/story-icon.svg";

interface ModalProps {
  onClose: () => void;
}

interface toggleItem {
  id: string;
  label: string;
  state: boolean;
  icon: string;
}

// Define toggle items dynamically with icons
const toggleItems: toggleItem[] = [
  { id: "sound", label: "Sound", state: true, icon: soundIcon },
  { id: "music", label: "Music", state: true, icon: musicIcon },
  { id: "story", label: "STORY", state: true, icon: storyIcon },
];

const NavModal: React.FC<ModalProps> = ({ onClose }) => {
  // Manage state for each toggle using an array of objects
  const [toggles, setToggles] = useState<toggleItem[]>(
    toggleItems.map((item) => ({
      label: "",
      icon: "",
      id: item.id,
      state: item.state,
    }))
  );

  const handleToggle = (id: string) => {
    setToggles((prevToggles) =>
      prevToggles.map((toggle) =>
        toggle.id === id ? { ...toggle, state: !toggle.state } : toggle
      )
    );
  };

  return (
    <div className="fixed inset-0 bg-[#050A1CD4] flex items-center justify-center z-50">
      <div className="bg-[#121C38]/[50%] border-[0.5px] border-white/[12%] confirm-modal relative">
        <div className="w-full h-9 rounded-tl-lg rounded-tr-lg flex items-center justify-center confirm-header bg-[#0E1E3E] border-t-[.8px] border-b-[.8px] border-white/[21%]">
          <h3 className="text-lg font-semibold text-[#C5C9D1]">MENU</h3>
        </div>
        <div className="pl-8 pt-7 pr-5 pb-20">
          <div className="w-[342px] space-y-[25px]">
            {toggles.map((toggle) => {
              const item = toggleItems.find((item) => item.id === toggle.id);
              return (
                <div
                  key={toggle.id}
                  className="flex items-center justify-between"
                >
                  <div className="flex items-center gap-9">
                    {item && <Image src={item.icon} alt={item.label} />}

                    <h5 className="text-xs uppercase font-medium text-[#C5C9D1]">
                      {item?.label}
                    </h5>
                  </div>
                  {/* Toggle Switch */}
                  <div
                    onClick={() => handleToggle(toggle.id)}
                    className={`relative flex items-center w-[52px] h-[26px] rounded-full cursor-pointer ${
                      toggle.state
                        ? "bg-gradient-to-b from-[#ABB628] via-[#C4D030] to-[#C4D030]"
                        : "bg-gray-300"
                    }`}
                  >
                    <div
                      className={`absolute top-1/2 transform -translate-y-1/2 ${
                        toggle.state ? "right-1" : "left-1"
                      } w-[24px] h-[19px] bg-[#0E1E3E] rounded-[23px] transition-all duration-300`}
                    ></div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Close Button */}
        <button
          className="absolute top-[-11.77px] right-[-11.77px] w-[30.39px] h-[30.39px] rounded-full flex items-center justify-center close-modal cursor-pointer"
          onClick={onClose}
        >
          <Image src={close} alt="close" />
        </button>
      </div>
    </div>
  );
};

export default NavModal;

"use client";

import Image, { StaticImageData } from "next/image";
import { useState } from "react"; // Import the type from the centralized file

// Assets
import light from "../../../../assets/character-select/light.svg";
import slabShadow from "../../../../assets/character-select/slab-shadow.svg";
import slab from "../../../../assets/character-select/slab.svg";
import frameDots from "../../../../assets/dots-frame.svg";
import CharacterButton from "../../shared/Button/CharacterButton";
import ConfirmationModal from "./ConfirmationModal";
import InfoDetailsCard from "./InfoDetails/InfoDetailsCard";

// types.ts
export interface Weapon {
  name: string;
  image: StaticImageData; // StaticImport if using Next.js images
}

export interface Character {
  id: string;
  name: string;
  info: string;
  image: StaticImageData;
  smImage: StaticImageData;
  traits: string[];
  weapon: Weapon;
  [key: string]: unknown;
}

// Types
interface CharacterSelectionTemplateProps {
  characters: Character[];
  initialSelectedCharacter?: string;
  nextRoute?: string;
}

const CharacterSelectionTemplate: React.FC<CharacterSelectionTemplateProps> = ({
  characters,
  initialSelectedCharacter,
  nextRoute = "./home",
}) => {
  const [selectedCharacter, setSelectedCharacter] = useState<
    string | undefined
  >(initialSelectedCharacter || characters[0]?.id);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  const selectedCharacterData: Character | undefined = characters?.find(
    (char) => char.id === selectedCharacter
  );

  const handleConfirm = () => {
    // Navigate to the next route
    window.location.href = nextRoute;
  };

  return (
    <div className="w-full h-full">
      {/* Character Display */}
      <div className="w-[348px] h-[302px] relative pt-2.5 lg:pt-0">
        {/* Character Name */}
        <div className="flex items-center justify-center">
          <div className="w-[188px] h-[29px] px-2 story-shapes flex items-center justify-center relative z-30">
            <h4 className="text-xs font-medium tracking-[6%] text-center text-white">
              {selectedCharacterData?.name}
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
        {/* Character Image */}
        <div className="absolute bottom-0 top-[18px] left-1/2 transform -translate-x-1/2 z-30">
          <div className="w-[134px] h-[279px]">
            <Image
              width={134}
              height={279}
              src={selectedCharacterData?.image || ""}
              alt={"image"}
              className="w-full h-full"
            />
          </div>
        </div>
        {/* Slab and Shadow */}
        <div className="absolute bottom-3 left-1/2 transform -translate-x-1/2 z-10">
          <div className="relative">
            <Image src={slab} alt="slab" />
            <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2">
              <Image
                width={108}
                height={10}
                src={slabShadow}
                alt="slabShadow"
                className="w-[108px] h-full"
              />
            </div>
          </div>
        </div>
        {/* Light Effect */}
        <div className="absolute bottom-0 left-0 right-0 top-0 z-20">
          <Image src={light} alt="light" />
        </div>
      </div>

      {/* Character Buttons */}
      <div className="absolute top-[77px] left-[113px] w-[150px] h-[180px] rounded-[2.65px] button-main-div z-0">
        <div className="relative">
          <div className="absolute top-[.66px] left-[.66px] right-[.66px] bottom-[.66px] w-[148.68px] h-[178.68px] rounded-[2.65px] bg-[#162034]  px-3 py-2.5  blur-select-char-main-button !z-30">
            <div className="grid grid-cols-2 gap-y-1.5 gap-x-[10.8px]">
              {characters.map((character) => (
                <CharacterButton
                  key={character.id}
                  character={character}
                  selectedCharacter={selectedCharacter}
                  onClick={setSelectedCharacter}
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Info Details border-51-0-51-white */}
      <div>
        <div className="absolute top-[75px] right-8 lg:right-6 z-30">
          <div className="w-[38px] h-6 rounded-tl rounded-tr info-main ml-2">
            <div className="relative w-[38px] h-[26px]">
              <div
                id="2nd-absolute"
                className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[37px] h-[25px] px-2 pt-1 pb-[2px] info-div coin-nav rounded-tl rounded-tr"
              >
                <h4 className="text-xs font-medium tracking-[-1%] text-[#C4D030]">
                  Info
                </h4>
              </div>
            </div>
          </div>
          <div className="w-[210px] lg:w-[228px] h-[170px] lg:h-[191px] rounded info-details-main  relative">
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[210px] lg:w-[226.5px] h-[170px] lg:h-[189.5px] p-3 rounded coin-nav bg-[#182136]">
              {characters
                .filter((char) => char.id === selectedCharacter)
                .map((character) => (
                  <InfoDetailsCard key={character.id} character={character} />
                ))}
            </div>
          </div>
        </div>

        {/* Next Button */}
        <div className="absolute bottom-[5%] lg:bottom-6 right-8 lg:right-7">
          <button
            onClick={() => setIsModalOpen(true)}
            className="w-[116px] h-8 next-button-character rounded flex items-center justify-center font-semibold text-darkBlue relative z-20 cursor-pointer"
          >
            Next
          </button>
        </div>
      </div>

      {isModalOpen && (
        <ConfirmationModal
          isOpen={isModalOpen}
          characterName={selectedCharacterData?.name || "this character"}
          onConfirm={handleConfirm}
          onClose={() => setIsModalOpen(false)}
        />
      )}
    </div>
  );
};

export default CharacterSelectionTemplate;

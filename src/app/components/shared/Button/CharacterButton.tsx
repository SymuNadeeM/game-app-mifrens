import Image, { StaticImageData } from "next/image";
import bottomLeftColor from "../../../../assets/character-select/bottom-left-color-tri.svg";
import bottomLeft from "../../../../assets/character-select/bottom-left-tri.svg";
import bottomRightColor from "../../../../assets/character-select/bottom-right-color-tri.svg";
import bottomRight from "../../../../assets/character-select/bottom-right-tri.svg";
import bgGlow from "../../../../assets/character-select/sm-characters-glow.svg";
import topLeftColor from "../../../../assets/character-select/top-left-color-tri.svg";
import topLeft from "../../../../assets/character-select/top-left-tri.svg";
import topRightColor from "../../../../assets/character-select/top-right-color-tri.svg";
import topRight from "../../../../assets/character-select/top-right-tri.svg";

// Define the structure of the character object
interface Character {
  id: string;
  smImage: StaticImageData;
}

// Define props for the CharacterButton component
interface CharacterButtonProps {
  character: Character;
  selectedCharacter: string | undefined;
  onClick: (id: string) => void;
}

const CharacterButton = ({
  character,
  selectedCharacter,
  onClick,
}: CharacterButtonProps) => {
  const isSelected = selectedCharacter === character.id;

  return (
    <div
      onClick={() => !isSelected && onClick(character.id)}
      className={`w-[57.11px] h-[54px] bg-[#0D1331]/[50%] rounded-[4.91px] flex items-center justify-center relative cursor-pointer ${
        isSelected
          ? "border-[1.35px] active-sm-character border-[#C9D15E]"
          : "border-[.68px] border-white/[12%]"
      } ${!isSelected ? "opacity-50 pointer-events-none" : ""}`}
    >
      <div
        className={`w-[53.56px] h-[50px] border-[.27px] rounded-[2.7px] border-opacity-20 relative z-30 ${
          isSelected ? "border-[#C3CB57]" : "border-[#D9D9D9]"
        }`}
      >
        {isSelected ? (
          <div>
            <div className="absolute top-[1.2px] left-[1.2px]">
              <Image src={topLeftColor} alt="topLeftColor" />
            </div>
            <div className="absolute top-[1.2px] right-[1.2px]">
              <Image src={topRightColor} alt="topRightColor" />
            </div>
            <div className="absolute bottom-[1.2px] left-[1.2px] z-30">
              <Image src={bottomLeftColor} alt="bottomLeftColor" />
            </div>
            <div className="absolute bottom-[1.2px] right-[1.2px] z-30">
              <Image src={bottomRightColor} alt="bottomRightColor" />
            </div>
          </div>
        ) : (
          <div>
            <div className="absolute top-[1.2px] left-[1.2px]">
              <Image src={topLeft} alt="topLeft" />
            </div>
            <div className="absolute top-[1.2px] right-[1.2px]">
              <Image src={topRight} alt="topRight" />
            </div>
            <div className="absolute bottom-[1.2px] left-[1.2px] z-30">
              <Image src={bottomLeft} alt="bottomLeft" />
            </div>
            <div className="absolute bottom-[1.2px] right-[1.2px] z-30">
              <Image src={bottomRight} alt="bottomRight" />
            </div>
          </div>
        )}
      </div>
      <div className="absolute bottom-0 z-20">
        <Image src={character.smImage || ""} alt="character" />
      </div>
      {isSelected ? (
        <div className="absolute bottom-0 z-10">
          <Image src={bgGlow} alt="bgGlow" />
        </div>
      ) : null}
    </div>
  );
};

export default CharacterButton;

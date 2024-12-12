import Image, { StaticImageData } from "next/image";

// Define the Weapon type
interface Weapon {
  name: string;
  image: StaticImageData; // or StaticImport if you're using Next.js images
}

// Define the Character type, including the weapon property
interface Character {
  id: string;
  name: string;
  image: StaticImageData;
  info: string; // assuming info is a string based on your JSX usage
  traits: string[]; // assuming traits is an array of strings
  weapon: Weapon; // weapon property, correctly typed
}

// Props type for the InfoDetailsCard component
interface InfoDetailsCardProps {
  character: Character;
}

const InfoDetailsCard = ({ character }: InfoDetailsCardProps) => {
  return (
    <div className="space-y-2.5">
      {/* Info */}
      <h4 className="text-[10px] lg:text-xs text-[#E7E9EC]">{character.info}</h4>

      {/* Traits */}
      <div className="space-y-[2px]">
        <h5 className="text-[8px] text-white/[50%]  tracking-[-1%] uppercase">
          TRAITS
        </h5>
        <div className="grid grid-cols-2 gap-1 lg:gap-2.5">
          {character.traits.map((trait, index) => (
            <div
              className="flex items-center gap-1"
              key={index}
            >
              <div className="w-[6px] h-[6px] rounded-full bg-[#E1892B]"></div>
              <h4 className="text-xs text-[#E7E9EC]">{trait}</h4>
            </div>
          ))}
        </div>
      </div>

      {/* Weapon */}
      <div className="p-1 lg:p-2 rounded-md coin-nav gun-div flex flex-col lg:gap-1 items-center justify-center">
        <h5 className="text-[8px] text-[#C5C9D1] tracking-[-1%] uppercase">
          WEAPON
        </h5>
        <div className="h-[40px]">
          <Image
            height={40}
            src={character.weapon.image}
            alt="weapon"
            className="w-full h-full"
          />
        </div>
        <h5 className="text-[8px] bg-text-gradient bg-clip-text text-transparent font-semibold tracking-[5%] uppercase">
          {character.weapon.name}
        </h5>
      </div>
    </div>
  );
};

export default InfoDetailsCard;

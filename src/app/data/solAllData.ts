import solBig1 from "../../assets/character-select/sol/sol-big-1.png";
import solGun1 from "../../assets/character-select/sol/sol-gun-1.svg";
import solSm1 from "../../assets/character-select/sol/sol-sm-1.png";

import solBig2 from "../../assets/character-select/sol/sol-big-2.png";
import solGun2 from "../../assets/character-select/sol/sol-gun-2.svg";
import solSm2 from "../../assets/character-select/sol/sol-sm-2.png";

import solBig3 from "../../assets/character-select/sol/sol-big-3.png";
import solGun3 from "../../assets/character-select/sol/sol-gun-3.png";
import solSm3 from "../../assets/character-select/sol/sol-sm-3.png";

export const solCharacters = [
  {
    id: "characterOne",
    name: "WIF",
    image: solBig1,
    smImage: solSm1,
    info: "Stabs opponent furiously",
    traits: ["Cunning", "Strategic"],
    weapon: {
      name: "TWO PEN KNIVES",
      image: solGun1,
    },
  },
  {
    id: "characterTwo",
    name: "PONKE",
    image: solBig2,
    smImage: solSm2,
    info: "Sound blasts or fires a chaotic beam gun",
    traits: ["Chaotic", "unpredictable"],
    weapon: {
      name: "BEAM GUN",
      image: solGun2,
    },
  },
  {
    id: "characterThree",
    name: "BONK",
    image: solBig3,
    smImage: solSm3,
    info: "Rapid hits within bonk stick",
    traits: ["Energetic", "hyperactive"],
    weapon: {
      name: "BONK STICK",
      image: solGun3,
    },
  },
];

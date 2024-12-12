import ethBig1 from "../../assets/character-select/eth/eth-big-1.png";
import ethGun1 from "../../assets/character-select/eth/eth-gun-1.png";
import ethSm1 from "../../assets/character-select/eth/eth-sm-1.png";

import ethBig2 from "../../assets/character-select/eth/eth-big-2.png";
import ethGun2 from "../../assets/character-select/eth/eth-gun-2.svg";
import ethSm2 from "../../assets/character-select/eth/eth-sm-2.png";

import ethBig3 from "../../assets/character-select/eth/eth-big-3.png";
import ethGun3 from "../../assets/character-select/eth/eth-gun-3.svg";
import ethSm3 from "../../assets/character-select/eth/eth-sm-3.png";

import ethBig4 from "../../assets/character-select/eth/eth-big-4.png";
import ethGun4 from "../../assets/character-select/eth/eth-gun-4.svg";
import ethSm4 from "../../assets/character-select/eth/eth-sm-4.png";

export const ethCharacters = [
  {
    id: "characterOne",
    name: "PEPE",
    image: ethBig1,
    smImage: ethSm1,
    info: "Stuns opponents with a laser shot",
    traits: ["Agile", "Unpredictable"],
    weapon: {
      name: "STUN GUN",
      image: ethGun1,
    },
  },
  {
    id: "characterTwo",
    name: "SHIB",
    image: ethBig2,
    smImage: ethSm2,
    info: "Delivers a flurry of powerful punches",
    traits: ["Loyal", "Steadfast"],
    weapon: {
      name: "DIAMOND CLAWS",
      image: ethGun2,
    },
  },
  {
    id: "characterThree",
    name: "FLOKI",
    image: ethBig3,
    smImage: ethSm3,
    info: "Energy-powered slices",
    traits: ["Mischievous", "playful"],
    weapon: {
      name: "VIKING AXE",
      image: ethGun3,
    },
  },
  {
    id: "characterFour",
    name: "LADYS",
    image: ethBig4,
    smImage: ethSm4,
    info: "(Ability details to be defined)",
    traits: ["Sassy", "Confident"],
    weapon: {
      name: "VIRAL SWORD",
      image: ethGun4,
    },
  },
];

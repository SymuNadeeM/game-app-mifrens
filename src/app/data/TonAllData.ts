import characterOne from "../../assets/character-select/characters-one.png";
import characterSmOne from "../../assets/character-select/characters-sm-one.png";
import characterSmTwo from "../../assets/character-select/characters-sm-two.png";
import characterTwo from "../../assets/character-select/characters-two.png";
import gunOne from "../../assets/character-select/gun-one.svg";
import gunTwo from "../../assets/character-select/gun-two.svg";

export const tonCharacters = [
  {
    id: "characterOne",
    name: "SIR M’FREN",
    image: characterOne,
    smImage: characterSmOne,
    info: "Shoots enemies with his gun",
    traits: ["Charismatic", "Visionary"],
    weapon: {
      name: "ENFORCER GUN",
      image: gunOne,
    },
  },
  {
    id: "characterTwo",
    name: "NOT",
    image: characterTwo,
    smImage: characterSmTwo,
    info: "Creates a deadly explosion",
    traits: ["Mysterious", "Elusive"],
    weapon: {
      name: "NOT BOMB",
      image: gunTwo,
    },
  },
];

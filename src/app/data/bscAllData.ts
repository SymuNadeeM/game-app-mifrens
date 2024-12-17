import bscBig1 from "../../assets/character-select/bsc/bsc-big-1.png";
import bscSm1 from "../../assets/character-select/bsc/bsc-sm-1.png";
import bscGun1 from "../../assets/character-select/bsc/doge-4k.png";

export const bscCharacters = [
  {
    id: "characterOne",
    name: "DOGE",
    image: bscBig1,
    smImage: bscSm1,
    info: "Energy-powered punches, snaps fingers to halve opponent HP",
    traits: ["Loyal", "Friendly"],
    weapon: {
      name: "INFINITY GAUNTLET",
      image: bscGun1,
    },
  },
];

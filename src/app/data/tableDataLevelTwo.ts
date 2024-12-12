import health from "../../assets/upgrade-character/health-icon.svg";
import Kick from "../../assets/upgrade-character/kick.svg";
import Punch from "../../assets/upgrade-character/punch.svg";
import rightOne from "../../assets/upgrade-character/right-1.svg";
import rightTwo from "../../assets/upgrade-character/right-2.svg";
import rightThree from "../../assets/upgrade-character/right-3.svg";
import shield from "../../assets/upgrade-character/shield.svg";
import Skill from "../../assets/upgrade-character/skill.svg";

export const tableDataLevelTwo = [
  {
    icon: health,
    title: "Health",
    currentValue: 350,
    images: [rightOne, rightTwo, rightThree],
    newValue: 400,
  },
  {
    icon: shield,
    title: "Shield",
    currentValue: 5,
    images: [rightOne, rightTwo, rightThree],
    newValue: 6,
  },
  {
    icon: Kick,
    title: "Kick",
    currentValue: 10,
    images: [rightOne, rightTwo, rightThree],
    newValue: 11,
  },
  {
    icon: Punch,
    title: "Punch",
    currentValue: 6,
    images: [rightOne, rightTwo, rightThree],
    newValue: 7,
  },
  {
    icon: Skill,
    title: "Skill",
    currentValue: 3,
    images: [rightOne, rightTwo, rightThree],
    newValue: 4,
  },
];

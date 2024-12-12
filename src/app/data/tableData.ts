import health from "../../assets/upgrade-character/health-icon.svg";
import Kick from "../../assets/upgrade-character/kick.svg";
import Punch from "../../assets/upgrade-character/punch.svg";
import rightOne from "../../assets/upgrade-character/right-1.svg";
import rightTwo from "../../assets/upgrade-character/right-2.svg";
import rightThree from "../../assets/upgrade-character/right-3.svg";
import shield from "../../assets/upgrade-character/shield.svg";
import Skill from "../../assets/upgrade-character/skill.svg";

export const tableData = [
  {
    icon: health,
    title: "Health",
    currentValue: 300,
    images: [rightOne, rightTwo, rightThree],
    newValue: 350,
  },
  {
    icon: shield,
    title: "Shield",
    currentValue: 4,
    images: [rightOne, rightTwo, rightThree],
    newValue: 5,
  },
  {
    icon: Kick,
    title: "Kick",
    currentValue: 9,
    images: [rightOne, rightTwo, rightThree],
    newValue: 10,
  },
  {
    icon: Punch,
    title: "Punch",
    currentValue: 5,
    images: [rightOne, rightTwo, rightThree],
    newValue: 6,
  },
  {
    icon: Skill,
    title: "Skill",
    currentValue: 1,
    images: [rightOne, rightTwo, rightThree],
    newValue: 3,
  },
];

import bscIcon from "../../assets/character-select/bsc.svg";
import ethIcon from "../../assets/character-select/eth.svg";
import solIcon from "../../assets/character-select/sol.svg";
import tonIcon from "../../assets/character-select/ton.svg";

export const leaderboardTabs = [
  { path: "/leaderboard", label: "Summery" },
  { path: "/leaderboard/global", label: "Global" },
  { path: "/leaderboard/point-table/ton", label: "Ton", icon: tonIcon },
  { path: "/leaderboard/point-table/sol", label: "Sol", icon: solIcon },
  { path: "/leaderboard/point-table/eth", label: "Eth", icon: ethIcon },
  { path: "/leaderboard/point-table/bsc", label: "Bsc", icon: bscIcon },
];

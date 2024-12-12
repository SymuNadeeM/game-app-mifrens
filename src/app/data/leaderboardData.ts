// Import required assets
import bscIcon from "../../assets/character-select/bsc.svg";
import ethIcon from "../../assets/character-select/eth.svg";
import solIcon from "../../assets/character-select/sol.svg";
import tonIcon from "../../assets/character-select/ton.svg";
import charRef from "../../assets/community/charRef.png";

// Define TypeScript interfaces
interface Group {
  id: number;
  name: string;
  icon: string;
}

interface CandidateInfo {
  id: number;
  name: string;
  level: number;
  charRef: string;
  group_icon: string;
  win_score: number;
  lose_score: number;
  score_ratio: string;
  coin: string;
}

interface GroupData {
  id: number;
  name: string;
  candidate_info: CandidateInfo[];
}

// Generate random data function
export const generateRandomData = (): GroupData[] => {
  // Define group data
  const groups: Group[] = [
    { id: 1, name: "ETH", icon: ethIcon },
    { id: 2, name: "TON", icon: tonIcon },
    { id: 3, name: "SOL", icon: solIcon },
    { id: 4, name: "BSC", icon: bscIcon },
  ];

  // Define names grouped by group name
  const namesByGroup: Record<string, string[]> = {
    ETH: [
      "Alice",
      "Bob",
      "Charlie",
      "Daisy",
      "Ethan",
      "Fiona",
      "George",
      "Hannah",
    ],
    TON: [
      "Abigail",
      "Benjamin",
      "Catherine",
      "Daniel",
      "Eleanor",
      "Felix",
      "Grace",
      "Harry",
    ],
    SOL: [
      "Adam",
      "Bella",
      "Caleb",
      "Diana",
      "Elijah",
      "Faith",
      "Gavin",
      "Hazel",
    ],
    BSC: ["Amelia", "Blake", "Clara", "Dean", "Eva", "Finn", "Gloria", "Henry"],
  };

  // Generate data for each group
  const data: GroupData[] = groups.map((group) => ({
    id: group.id,
    name: group.name,
    candidate_info: Array.from({ length: 25 }, (_, i) => ({
      id: i + 1,
      name: namesByGroup[group.name][
        Math.floor(Math.random() * namesByGroup[group.name].length)
      ],
      level: Math.ceil(Math.random() * 10),
      charRef: charRef.src,
      group_icon: group.icon,
      win_score: Math.floor(Math.random() * 50) + 1,
      lose_score: Math.floor(Math.random() * 50) + 1,
      score_ratio: `${(Math.random() * (2 - 1) + 1).toFixed(1)}%`,
      coin: `${(Math.random() * (30 - 1) + 1).toFixed(1)}M`,
    })),
  }));

  return data;
};

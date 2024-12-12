"use client";

import { generateRandomData } from "@/app/data/leaderboardData";
import Image from "next/image";
import { useEffect, useState } from "react";
import rank1 from "../../../../assets/leaderboard/1st.svg";
import rank2 from "../../../../assets/leaderboard/2nd.svg";
import rank3 from "../../../../assets/leaderboard/3rd.svg";
import coin from "../../../../assets/leaderboard/f-coin.svg";

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

const EthTable: React.FC = () => {
  const [ethCandidates, setEthCandidates] = useState<CandidateInfo[]>([]);

  const getBscCandidates = (): CandidateInfo[] => {
    const randomData = generateRandomData(); // Assuming this generates group data
    // Filter groups that belong to "ETH"
    const bscGroup = randomData.filter((group) => group.name === "ETH");
    // Combine all candidate_info arrays from the filtered group
    const combined = bscGroup.flatMap((group) => group.candidate_info);
    return shuffleArray(combined); // Shuffle the array before returning
  };

  // Fisher-Yates Shuffle algorithm to randomize the array
  const shuffleArray = <T,>(array: T[]): T[] => {
    const shuffled = [...array];
    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
  };

  useEffect(() => {
    const candidates = getBscCandidates();
    setEthCandidates(candidates);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="my-2 h-[262px]  overflow-y-scroll custom-scrollbar">
      <div className="py-2.5 px-2 rounded space-y-1.5 pb-10 summary-table-bg backdrop-blur border-[.5px] border-white/[20%]">
        {ethCandidates.map((item, index) => {
          const isLastItem = index === ethCandidates.length - 1;
          return (
            <div
              key={index}
              className={`py-1.5 px-2 flex rounded items-center justify-between gap-2.5 w-full backdrop-blur border-[0.5px] h-11 ${
                isLastItem
                  ? "bg-[#222d42] border-[#C9D15E]/[40%] sticky bottom-0"
                  : "bg-[#293557]/[20%] border-white/[5%]"
              }`}
            >
              <div className="w-[24px] text-[10px] text-[#E7E9EC] font-medium text-center">
                {(index === 0 && (
                  <Image width={20} height={24} src={rank1} alt="1st" />
                )) ||
                  (index === 1 && (
                    <Image width={20} height={24} src={rank2} alt="2nd" />
                  )) ||
                  (index === 2 && (
                    <Image width={20} height={24} src={rank3} alt="3rd" />
                  ))}
                {index >= 3 && index + 1}
              </div>{" "}
              <div className="w-[30px] text-center">
                <Image
                  src={item.charRef}
                  alt="charRef"
                  width={30}
                  height={30}
                />
              </div>
              <div className="w-[133.12px] ">
                <p className="text-[12px] text-white">{item.name}</p>
                <p className="text-[10px] text-[#677185]">LVL {item.level}</p>
              </div>
              <div className="w-[24px] text-center mx-auto">
                <Image
                  src={item.group_icon}
                  alt="group icon"
                  width={15}
                  height={15}
                  className="inline-block"
                />
              </div>
              <div className="w-[117.12px] text-center">
                <p className="text-[8px] text-[#C9D15E] font-semibold">Win</p>
                <p className="text-sm text-white">{item.win_score}</p>
              </div>{" "}
              <div className="w-[117.12px] text-center">
                <p className="text-[8px] text-[#D92348] font-semibold">Loss</p>
                <p className="text-sm text-white">{item.lose_score}</p>
              </div>{" "}
              <div className="w-[117.12px] text-center">
                <p className="text-[8px] text-[#C5C9D1] font-semibold uppercase">
                  W/L RATIO
                </p>
                <p className="text-sm text-white">{item.score_ratio}</p>
              </div>
              <div className="w-[117.12px] text-sm text-white uppercase inline-flex items-center gap-1">
                <Image src={coin} alt="coin" width={14} height={14} />
                <span>{item.coin}</span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default EthTable;

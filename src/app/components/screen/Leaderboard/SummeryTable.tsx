import { SummeryData } from "@/app/data/summeryData";
import Image from "next/image";
import coin from "../../../../assets/leaderboard/f-coin.svg";

const SummeryTable = () => {
  return (
    <div className="my-2 space-y-2">
      {/* header */}
      <div className="py-1 px-4 flex items-center justify-between gap-2.5 w-full bg-[#293557]/[20%]  backdrop-blur rounded">
        <div className="w-[24px] text-[10px] text-[#677185]">S/N</div>
        <div className="w-[125.5px] text-[10px] text-[#677185]">Chain</div>
        <div className="w-[133.12px] uppercase text-center text-[#C9D15E] font-semibold text-[8px]">
          Total Wins
        </div>
        <div className="w-[133.12px] uppercase text-center text-[#C9D15E] font-semibold text-[8px]">
          Tournaments Won
        </div>
        <div className="w-[133.12px] uppercase text-center text-[#D92348] font-semibold text-[8px]">
          Total Loss
        </div>
        <div className="w-[133.12px] text-[10px] text-[#677185]">Points</div>
      </div>

      {/* table */}

      <div className="py-2.5 px-2 rounded space-y-1.5 pb-10 summary-table-bg backdrop-blur border-[.5px] border-white/[20%]">
        {SummeryData.map((item, index) => (
          <div
            key={index}
            className="py-1.5 px-2 flex rounded items-center justify-between gap-2.5 w-full bg-[#293557]/[20%] backdrop-blur border-[0.5px] border-white/[5%]"
          >
            <div className="w-[24px] text-[10px] text-[#E7E9EC]">
              {item.coinValue}
            </div>
            <div className="w-[125.5px] text-sm uppercase text-white inline-flex items-center gap-1">
              <Image src={item.icon} alt="coin" width={18.75} height={18.75} />
              <span>{item.name}</span>
            </div>
            <div className="w-[133.12px] text-center text-white text-sm">
              {item.amount}
            </div>
            <div className="w-[133.12px] text-center text-white text-sm">
              {item.value1}
            </div>
            <div className="w-[133.12px] text-center text-white text-sm">
              {item.value2}
            </div>
            <div className="w-[133.12px] text-sm text-white uppercase inline-flex items-center gap-1">
              <Image src={coin} alt="coin" width={14} height={14} />
              <span>{item.value3}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SummeryTable;

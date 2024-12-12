import Image from "next/image";
import cardPic1 from "../../../../assets/battle-now/battle-card-1.png";
import cardPic2 from "../../../../assets/battle-now/battle-card-2.png";
import cardPic3 from "../../../../assets/battle-now/battle-card-3.png";

const BattleAllCard = () => {
  return (
    <div className="pt-8 lg:pt-[50px] px-8 lg:px-6">
      <div className="grid grid-cols-3 gap-4">
        <div className="p-1.5 h-[192px] rounded-lg space-y-1 battle-single-card-1 group cursor-pointer">
          <div className="w-full h-[127px]">
            <Image
              src={cardPic1}
              alt="cardPic1"
              className="w-full h-full rounded-tr rounded-tl"
            />
          </div>
          <div className="px-2 pt-0.5 pb-2.5">
            <h4 className="text-sm font-semibold text-white group-hover:text-[#C9D15E] tracking-[-1%] duration-200">
              Quick Brawl
            </h4>
            <p className="text-[10px] text-[#C5C9D1] tracking-[-1%]">
              Match with Random opponent
            </p>
          </div>
        </div>
        <div className="p-1.5 h-[192px] rounded-lg space-y-1 battle-single-card-2 group cursor-pointer">
          <div className="w-full h-[127px]">
            <Image
              src={cardPic2}
              alt="cardPic"
              className="w-full h-full rounded-tr rounded-tl"
            />
          </div>
          <div className="px-2 pt-0.5 pb-2.5">
            <h4 className="text-sm font-semibold text-white group-hover:text-[#C9D15E] tracking-[-1%] duration-200">
              Cross-Chain Brawl
            </h4>
            <p className="text-[10px] text-[#C5C9D1] tracking-[-1%]">
              Opponent from opposite blockchain
            </p>
          </div>
        </div>
        <div className="p-1.5 h-[192px] rounded-lg space-y-1 battle-single-card-3 group cursor-pointer">
          <div className="w-full h-[127px]">
            <Image
              src={cardPic3}
              alt="cardPic3"
              className="w-full h-full rounded-tr rounded-tl"
            />
          </div>
          <div className="px-2 pt-0.5 pb-2.5">
            <h4 className="text-sm font-semibold text-white group-hover:text-[#C9D15E] tracking-[-1%] duration-200">
              Ranked Match
            </h4>
            <p className="text-[10px] text-[#C5C9D1] tracking-[-1%]">
              Battle only players of the same rank
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BattleAllCard;

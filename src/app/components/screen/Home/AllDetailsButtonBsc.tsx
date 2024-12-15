import Image from "next/image";
import Link from "next/link";
import nife from "../../../../assets/home/battleknife.svg";
import Community from "../../../../assets/home/community.svg";
import bShadow from "../../../../assets/home/frame-battle.png";
import TournamentFarm from "../../../../assets/home/frame-for.png";
import Leaderboard from "../../../../assets/home/leader-board.svg";
import shop from "../../../../assets/home/shop.svg";
import Tournaments from "../../../../assets/home/tournaments.svg";

const AllDetailsButtonBsc = () => {
  return (
    <div className="w-[334px] h-[206px] space-y-2.5">
      {/* battle button */}
      <Link
        href={"./battle-modes-bsc"}
        className="w-[334px] h-[70px] bg-[url('/battle-now.svg')] pl-[14px] py-[14px] border border-white/[30%] flex items-center gap-2.5 rounded z-30 relative"
      >
        <div className="w-[42px] h-[60px] flex justify-center items-center relative">
          <div className="w-[44px] h-[60px] absolute top-0 left-0 right-0 bottom-0 z-10">
            <Image
              src={bShadow}
              alt="bShadow"
              className="w-[44px] h-[60px] object-cover"
            />
          </div>
          <div
            id="trop"
            className="absolute top-1/2 left-0 right-0 -translate-y-1/2 z-20"
          >
            <Image src={nife} alt="nife" className="w-[40px] h-[40px]" />
          </div>
        </div>

        <div>
          <h4 className="text-sm text-start font-semibold text-[#C9D15E]">
            Battle Now
          </h4>
          <h5 className="text-[10px] text-[#C5C9D1] tracking-[-1%]">
            Access quick PvP matches
          </h5>
        </div>
      </Link>
      {/* tournaments button */}
      <div className="w-[334px] h-[70px] match-detail rounded relative z-30">
        <Link
          href={"#"}
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[333px] overflow-hidden h-[69px] bg-[#102237] match-detail-inner rounded z-30 pl-[14px] py-[14px] flex items-center gap-2.5"
        >
          <div
            id="main-border"
            className="w-[42px] h-[60px] flex justify-center items-center relative"
          >
            <div className="w-[42px] h-[60px] absolute top-0 left-0 right-0 bottom-0">
              <Image
                src={TournamentFarm}
                alt="TournamentFarm"
                className="w-[42px] h-[60px] object-cover"
              />
            </div>
            <div
              id="trop"
              className="absolute top-1/2 left-0 right-0 -translate-y-1/2 z-20"
            >
              <Image
                src={Tournaments}
                alt="Tournaments"
                className="w-[40px] h-[40px]"
              />
            </div>
          </div>

          <div>
            <h4 className="text-sm text-start font-semibold text-[#C9D15E]">
              Tournaments
            </h4>
            <h5 className="text-[10px] text-[#C5C9D1] tracking-[-1%]">
              Enter the tournament lobby
            </h5>
          </div>
        </Link>
      </div>
      <div className="flex items-center gap-2.5">
        {/* shop button */}
        <Link
          href={"./shop"}
          className="w-[104.67px] h-[46px] match-detail rounded relative z-30"
        >
          <button className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[103.67px] h-[45px] overflow-hidden bg-[#102237] match-detail-inner rounded z-30 flex flex-col gap-1 items-center justify-center">
            <Image src={shop} alt="shop" />
            <h5 className="text-[10px] text-white text-center tracking-[-1%]">
              Shop
            </h5>
          </button>
        </Link>
        {/* leaderboard button */}
        <Link
          href="/leaderboard"
          className="w-[104.67px] h-[46px] match-detail rounded relative z-30 block"
        >
          <button className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[103.67px] h-[45px] overflow-hidden bg-[#102237] match-detail-inner rounded z-30 flex flex-col gap-1 items-center justify-center">
            <Image src={Leaderboard} alt="Leaderboard" />
            <h5 className="text-[10px] text-white text-center tracking-[-1%]">
              Leaderboard
            </h5>
          </button>
        </Link>
        {/* Community button */}
        <Link
          href={"./community"}
          className="w-[104.67px] h-[46px] match-detail rounded relative z-30"
        >
          <button className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[103.67px] h-[45px] overflow-hidden bg-[#102237] match-detail-inner rounded z-30 flex flex-col gap-[2px] items-center justify-center">
            <Image src={Community} alt="Community" />
            <h5 className="text-[10px] text-white text-center tracking-[-1%]">
              Community
            </h5>
          </button>
        </Link>
      </div>
    </div>
  );
};

export default AllDetailsButtonBsc;

import Link from "next/link";
import BattleAllCard from "../components/screen/BattleModes/BattleAllCard";
import CommonNav from "../components/shared/Navbar/CommonNav";

const BattlePage = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen w-screen lg:w-full overflow-x-hidden">
      <div className="w-screen lg:w-[812px] h-screen lg:h-[375px] bg-[url('/battle-now-page-bg.svg')] bg-[#081626] text-white overflow-hidden relative">
        <CommonNav navTitle="BATTLE MODES" backLink="/home" />
        <BattleAllCard />
        <div className="flex items-center justify-end">
          <div className="mt-5 lg:mt-7 mr-8 lg:mr-6">
            <Link
              href={"./wager"}
              className="w-[147px] h-8 next-button rounded flex items-center justify-center font-semibold text-darkBlue relative z-20"
            >
              Next
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BattlePage;

import TabSection from "@/app/components/screen/Leaderboard/TabSection";
import TonTable from "@/app/components/screen/Leaderboard/TonTable";
import DynamicNavbar from "@/app/components/shared/Navbar/DynamicNavbar";

const PointTableTonPage = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen w-screen lg:w-full overflow-x-hidden">
      <div className="w-screen lg:w-[812px] h-screen lg:h-[375px] bg-[url('/leader.svg')]  bg-[#081626] backdrop-blur text-white overflow-hidden">
        <div>
          <DynamicNavbar
            pageName="Leaderboard"
            backLink="/home"
            coinCount="23,432"
          />
          <div className="px-8 lg:px-6 overflow-hidden">
            <TabSection />
            <TonTable />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PointTableTonPage;

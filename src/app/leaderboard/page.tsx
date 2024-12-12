import SummeryTable from "../components/screen/Leaderboard/SummeryTable";
import TabSection from "../components/screen/Leaderboard/TabSection";
import DynamicNavbar from "../components/shared/Navbar/DynamicNavbar";

const LeaderboardPage = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen w-screen lg:w-full overflow-x-hidden">
      <div className="w-screen lg:w-[812px] h-screen lg:h-[375px] bg-[url('/leader.svg')]  bg-[#081626] backdrop-blur text-white overflow-hidden">
        <DynamicNavbar
          pageName="Leaderboard"
          backLink="/home"
          coinCount="23,432"
        />
        <div className="px-8 lg:px-6">
          <TabSection />
          <SummeryTable />
        </div>
      </div>
    </div>
  );
};

export default LeaderboardPage;

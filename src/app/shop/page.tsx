"use client";
import { useState } from "react";
import NFTSTabs from "../components/screen/Shop/NFTSTabs";
import SpecialTabs from "../components/screen/Shop/SpecialTabs";
import CommonNav from "../components/shared/Navbar/CommonNav";
interface TabProps {
  label: string;
  component: JSX.Element;
}
const ShopPage = () => {
  const [activeTab, setActiveTab] = useState<string>("NFTS");
  const tabs: TabProps[] = [
    { label: "NFTS", component: <NFTSTabs /> },
    { label: "SPECIAL", component: <SpecialTabs /> },
  ];
  return (
    <div className="flex flex-col items-center justify-center min-h-screen w-screen lg:w-full overflow-x-hidden">
      <div className="w-screen lg:w-[812px] h-screen lg:h-[375px] bg-[#081626] text-white overflow-hidden">
        <CommonNav navTitle="Shop" backLink="/home" />
        <div className="pt-[27px] px-8 lg:px-6 flex gap-[15px]">
          {/* Tab Buttons */}
          <div className="w-[93px] space-y-2">
            {tabs.map((tab) => (
              <div
                key={tab.label}
                onClick={() => setActiveTab(tab.label)}
                className={`w-[93px] h-[29px] rounded-sm relative ${
                  activeTab === tab.label
                    ? "tab-active-main"
                    : "tab-normal-main"
                }`}
              >
                <div
                  className={`w-[92px] h-[28px] rounded-sm absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex items-center pl-2 gap-1 font-medium text-xs uppercase cursor-pointer z-20 ${
                    activeTab === tab.label
                      ? "active-bg-tab text-[#C9D15E]"
                      : "bg-[#202c46] text-white"
                  }`}
                >
                  {tab.label}
                </div>
              </div>
            ))}
          </div>

          {/* Tab Content */}
          <div>
            {tabs.map(
              (tab) =>
                activeTab === tab.label && (
                  <div key={tab.label}>{tab.component}</div>
                )
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShopPage;

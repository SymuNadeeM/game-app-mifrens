"use client";
import { useState } from "react";
import ReferralsTabs from "../components/screen/Community/ReferralsTabs";
import SocialTaskTabs from "../components/screen/Community/SocialTaskTabs";
import CommonNav from "../components/shared/Navbar/CommonNav";
interface TabProps {
  label: string;
  component: JSX.Element;
}
const CommunityPage = () => {
  const [activeTab, setActiveTab] = useState<string>("REFERRALS");
  const tabs: TabProps[] = [
    { label: "REFERRALS", component: <ReferralsTabs /> },
    { label: "SOCIAL TASKS", component: <SocialTaskTabs /> },
  ];
  return (
    <div className="flex flex-col items-center justify-center min-h-screen w-screen lg:w-full overflow-x-hidden">
      <div className="w-screen lg:w-[812px] h-screen lg:h-[375px] bg-[url('/community-bg.svg')] bg-[#081626] text-white overflow-hidden">
        <CommonNav navTitle="COMMUNITY" backLink="/home" />
        <div className="w-full px-8 lg:px-6">
          {/* Tab Buttons */}
          <div className="mt-1 lg:mt-2 w-full h-8 px-2 py-1 rounded bg-[#182435] backdrop-blur flex gap-2.5">
            {tabs.map((tab) => (
              <div
                key={tab.label}
                onClick={() => setActiveTab(tab.label)}
                className={`w-[100px] h-[24px] rounded-sm relative ${
                  activeTab === tab.label
                    ? "tab-active-main text-[#C9D15E]"
                    : "tab-normal-main text-white"
                }`}
              >
                <div
                  className={`w-[99px] h-[23px] rounded-sm absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex items-center pl-2 gap-1 font-medium text-xs uppercase cursor-pointer z-20 ${
                    activeTab === tab.label ? "active-bg-tab" : "bg-[#202c46]"
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

export default CommunityPage;

"use client";
import { leaderboardTabs } from "@/app/data/leaderboard";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Dropdown from "./Dropdown";

const TabSection = () => {
  const pathname = usePathname();
  const handleSelection = (item: string) => {
    console.log("Selected Item:", item);
  };
  // Utility function to determine if a link is active
  const isActive = (path: string) => pathname === path;

  // Check if the current page is Summery or Global
  const isPointButtonVisible = ![
    "/leaderboard",
    "/leaderboard/global",
  ].includes(pathname);

  return (
    <section className="p-2 mt-2 flex items-center justify-between">
      <div className="flex items-center gap-2">
        {leaderboardTabs.map((link) => (
          <Link
            key={link.path}
            href={link.path}
            className={`w-[71px] h-[29px] rounded-sm relative ${
              isActive(link.path)
                ? "tab-active-main text-[#C9D15E]"
                : "tab-normal-main text-white"
            }`}
          >
            <div
              className={`w-[70px] h-[28px] rounded-sm absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex items-center justify-center gap-1 font-medium text-xs uppercase cursor-pointer z-30 ${
                isActive(link.path) ? "active-bg-tab" : "bg-[#0f1523]"
              }`}
            >
              {link?.icon && (
                <Image src={link.icon} alt={`${link.label} Icon`} />
              )}
              {link.label}
            </div>
          </Link>
        ))}
      </div>
      {isPointButtonVisible && (
        <Dropdown
          items={["Points", "Wins", "Losses", "WIN/L RATIO"]}
          onSelect={handleSelection}
        />
      )}
    </section>
  );
};

export default TabSection;

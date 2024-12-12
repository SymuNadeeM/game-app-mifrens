"use client";

import { characterNavData } from "@/app/data/characterNavData";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import CharacterSelectNav from "../components/shared/Navbar/CharacterSelectNav";

export default function CharacterLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pathname = usePathname();

  // Utility function to determine if a link is active
  const isActive = (path: string) => pathname === path;

  return (
    <html lang="en">
      <body className="flex flex-col items-center justify-center min-h-screen w-screen lg:w-full overflow-x-hidden">
        <div className="w-screen lg:w-[812px] h-auto lg:h-[375px] bg-[url('/bg-character-select.png')] bg-cover bg-[#081626] text-white relative">
          <CharacterSelectNav />
          <div className="w-full h-full lg:h-[335px] flex gap-2 ">
            <div className="absolute left-9 lg:left-6 top-[77px] flex flex-col gap-2">
              {characterNavData.map((link) => (
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
                    className={`w-[70px] h-[28px] rounded-sm absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex items-center justify-center gap-1 font-medium text-sm uppercase cursor-pointer z-30 ${
                      isActive(link.path) ? "active-bg-tab" : "bg-[#0f1523]"
                    }`}
                  >
                    <Image
                      src={link.icon}
                      alt={`${link.label} Icon`}
                    />{" "}
                    {link.label}
                  </div>
                </Link>
              ))}
            </div>
            <div className="w-full flex items-center justify-center">
              <main>{children}</main>
            </div>
          </div>
        </div>
      </body>
    </html>
  );
}

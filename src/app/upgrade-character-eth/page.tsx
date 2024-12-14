"use client";
import Image from "next/image";
import { useState } from "react";
import rightIcon from "../../assets/upgrade-character/arrow-right.svg";
import coinDis from "../../assets/upgrade-character/coin-dis.svg";
import pepeCharacter from "../../assets/upgrade-character/eth/eth-character.png";
import ethUpIcon from "../../assets/upgrade-character/eth/eth-up-icon.svg";
import Coin from "../../assets/upgrade-character/f-coin.svg";
import upDateChaLight from "../../assets/upgrade-character/light-up-cha.svg";
import DataTable from "../components/screen/UpgradeCharacter/DataTable";
import DataTableLevelTwo from "../components/screen/UpgradeCharacter/DataTableLevelTwo";
import RightArrowLoader from "../components/screen/UpgradeCharacter/RightArrowLoader";
import SuccessLoader from "../components/screen/UpgradeCharacter/SuccessLoader";
import UpgradeLoading from "../components/screen/UpgradeCharacter/UpgradeLoading";
import UpgradeModal from "../components/screen/UpgradeCharacter/UpgradeModal";
import CommonNav from "../components/shared/Navbar/CommonNav";

const UpgradeCharacterEthPage = () => {
  const [level, setLevel] = useState(1);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isUpgrading, setIsUpgrading] = useState(false);
  const [isDisabled, setIsDisabled] = useState(false);

  const handleUpgradeClick = () => {
    setIsModalOpen(true);
    setIsUpgrading(true);
    setIsDisabled(true);

    // Simulate upgrade process
    setTimeout(() => {
      setIsUpgrading(false);
      setLevel(2);
      setTimeout(() => setIsModalOpen(false), 2700);
    }, 3000);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen w-screen lg:w-full overflow-x-hidden">
      <div className="w-screen lg:w-[812px] h-screen lg:h-[375px] bg-[url('/upgrade-cha-page-bg.svg')] bg-[#081626] text-white overflow-hidden">
        <div className="w-screen lg:w-[812px] h-screen lg:h-[375px] bg-[url('/upgrade-cha-page-bg-light.svg')] text-white relative overflow-hidden">
          <CommonNav navTitle="Upgrades" backLink="/homeeth" />
          {/* character part left side */}
          <div className="absolute top-[34.36px] left-[-29px]">
            <Image src={upDateChaLight} alt="upDateChaLight" />
          </div>
          <div className="absolute top-[3px] left-[40px] lg:left-[61px] z-30">
            <div className="w-[235px] h-full">
              <Image
                alt={"image"}
                src={pepeCharacter}
                className="w-full h-full"
              />
            </div>
          </div>
          {/* right side */}
          {/* character Heading part */}
          <div className="absolute top-12 lg:top-[58px] left-[305px] lg:left-[325px]">
            <div className="h-[49px] w-[291px] relative flex justify-between">
              <div className="w-[123px] h-[29px] upCharacter-title-bg flex items-center justify-center gap-1 rounded-sm">
                <Image src={ethUpIcon} alt="ethUpIcon" />
                <h4 className="text-sm tracking-[-1%] font-medium text-white uppercase">
                  PEPE
                </h4>
              </div>
              <div className="absolute top-[38px]">
                <div className="w-[229.8px] h-[4.62px] progress-bg rounded-[0.69px] rounded-tr-[4.62px]"></div>
              </div>
              <div className=" absolute top-[23px] left-[179px]">
                <p
                  className="text-[10px] font-semibold text-white tracking-[-1%]"
                  style={{
                    WebkitTextStroke: "0.6px #295812",
                  }}
                >
                  {level === 1 ? "300/300" : "350/250"}
                </p>
              </div>
              <div className="w-[35px] h-[49px] flex flex-col items-center">
                <p className="text-[8px] leading-[12.4px] tracking-[-1%] text-white/[50%]">
                  Level
                </p>
                <h3 className="text-[27px] font-semibold leading-[41px] text-[#E7E9EC] tracking-[-1%]">
                  0{level}
                </h3>
              </div>
            </div>
          </div>
          {/* data table part */}
          <div className="absolute top-[100px] lg:top-[122.14px] left-[305px] lg:left-[325px]">
            {level === 1 ? <DataTable /> : <DataTableLevelTwo />}
          </div>
          {/* bottom part */}
          <div className="absolute top-[280px] lg:top-[309px] left-[305px] lg:left-[325px]">
            <div className="flex items-center justify-between w-[245px] h-[49px] pt-[3px] px-2 level-main">
              <div className="w-[35px]  flex flex-col items-center">
                <p className="text-[8px] leading-[12.4px] tracking-[-1%] text-white/[50%]">
                  Level
                </p>
                <h3 className="text-[27px] mt-[-5px] font-semibold  text-[#E7E9EC] tracking-[-1%]">
                  0{level}
                </h3>
              </div>
              <div className="w-[82.5px]  flex items-center justify-center">
                <RightArrowLoader />
              </div>
              <div className="w-[35px] flex flex-col items-center">
                <p className="text-[8px] leading-[12.4px] tracking-[-1%] text-white/[50%]">
                  Level
                </p>
                <div
                  className="text-[27px] mt-[-5px] font-semibold text-gradient-next  tracking-[-1%]"
                  style={{
                    textShadow: "0px 0px 9.9px #b5c02ca3",
                  }}
                >
                  0{level + 1}
                </div>
              </div>
            </div>
          </div>
          <div className="absolute top-[290px] lg:top-[323.5px] left-[620px] lg:left-[680px]">
            <button
              onClick={handleUpgradeClick}
              disabled={isDisabled}
              className={`w-[108px] h-[32px] rounded flex items-center justify-center gap-[3px] relative ${
                isDisabled ? "bg-[#4B5111] cursor-default " : "button-bg"
              }`}
            >
              <div className="flex items-center gap-1">
                {isDisabled ? (
                  <Image src={coinDis} alt="coinDis" />
                ) : (
                  <Image src={Coin} alt="Coin" />
                )}

                <span
                  className={`text-xs font-semibold ${
                    isDisabled ? "text-[#979EAC]" : "text-[#0C1A35]"
                  }`}
                >
                  {isDisabled ? "1500" : "1,000"}
                </span>
              </div>
              <Image src={rightIcon} alt="rightIcon" />
              {isDisabled ? (
                ""
              ) : (
                <div className="absolute bottom-[1px] left-1/2 transform -translate-x-1/2 w-[69px] h-[.97px] button-line"></div>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Upgrade Modal */}
      <UpgradeModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
        {isUpgrading ? <UpgradeLoading /> : <SuccessLoader />}
      </UpgradeModal>
    </div>
  );
};

export default UpgradeCharacterEthPage;

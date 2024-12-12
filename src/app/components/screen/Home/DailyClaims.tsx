"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import claimCoin from "../../../../assets/home/claim-coin.svg";

interface buttonStyle {
  background: string;
  boxShadow: string;
}

const DailyClaims = () => {
  const [progress, setProgress] = useState<number>(0);
  const [buttonText, setButtonText] = useState<string>("6:00:00");
  const [buttonStyle, setButtonStyle] = useState<buttonStyle>({
    background: "#4B5111",
    boxShadow: "none",
  });
  const [textColor, setTextColor] = useState<string>("text-[#C5C9D1]");
  const [claimCount, setClaimCount] = useState<number>(0);

  const updateTime = (secondsLeft: number) => {
    const hours = Math.floor(secondsLeft / 3600);
    const minutes = Math.floor((secondsLeft % 3600) / 60);
    const seconds = secondsLeft % 60;
    return `${hours}:${String(minutes).padStart(2, "0")}:${String(
      seconds
    ).padStart(2, "0")}`;
  };

  useEffect(() => {
    let countdownSeconds = 6 * 60 * 60;

    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setButtonText("Claim Rewards");
          setButtonStyle({
            background:
              "linear-gradient(180deg, #ABB628 0%, #C4D030 50%, #C4D030 100%)",
            boxShadow: "0px 1px 0px 0px #FBF86B inset",
          });
          setTextColor("text-[#0C1A35]");
          return 100;
        }
        return prev + 1;
      });

      countdownSeconds -= 1;
      setButtonText(updateTime(countdownSeconds));
    }, 50);

    return () => clearInterval(interval);
  }, [claimCount]);

  const handleClaimClick = () => {
    if (buttonText === "Claim Rewards" && claimCount < 4) {
      setClaimCount((prev) => prev + 1);
      setProgress(0);
      setButtonText("6:00:00");
      setButtonStyle({
        background: "#4B5111",
        boxShadow: "none",
      });
      setTextColor("text-[#C5C9D1]");
    }
  };

  return (
    <div className="w-[231px] h-[106px] daily-claim-bg rounded relative">
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[230px] h-[105px] daily-claim bg-[#102237] rounded p-2 z-20">
        <div className="space-y-[2px]">
          <div className="flex items-center justify-between">
            <h4 className="text-[10px] tracking-[-1%] text-[#C5C9D1]">
              Daily Claims
            </h4>
            <h4 className="text-[10px] tracking-[-1%] text-[#C5C9D1]">
              {claimCount}/<span className="text-[#b8c42d]">4</span>
            </h4>
          </div>
          <div>
            <div className="w-[213px] h-[26px] coin-claim flex items-center justify-center gap-1">
              <Image src={claimCoin} alt="claimCoin" />
              <h4 className="text-sm font-medium tracking-[-1%] text-white/[80%]">
                500
              </h4>
            </div>

            <div className="w-full bg-gray-200 h-[4px] rounded-[0.69px] overflow-hidden">
              {/* Progress Bar */}
              <div
                className="h-full rounded-[0.69px]"
                style={{
                  width: `${progress}%`,
                  background:
                    "linear-gradient(180deg, #ABB628 0%, #C4D030 50%, #C4D030 100%)",
                  transition: "width 0.1s ease-in-out",
                }}
              ></div>
            </div>
          </div>
        </div>
        <button
          onClick={handleClaimClick}
          className="mt-[11px] w-[213px] h-[28px] p-2.5 rounded flex items-center justify-center"
          style={buttonStyle}
        >
          <h4 className={`text-xs font-semibold ${textColor}`}>{buttonText}</h4>
        </button>
      </div>
    </div>
  );
};

export default DailyClaims;

import Image from "next/image";
import { useEffect, useState } from "react";
import frameTitle from "../../../../assets/upgrade-character/frame-title-pn.png";
import rightBig1 from "../../../../assets/upgrade-character/right-big-1.svg";
import rightBig2 from "../../../../assets/upgrade-character/right-big-2.svg";
import rightBig3 from "../../../../assets/upgrade-character/right-big-3.svg";

const UpgradeLoading = () => {
  const [step, setStep] = useState(1);

  useEffect(() => {
    const interval = setInterval(() => {
      setStep((prev) => (prev === 3 ? 1 : prev + 1));
    }, 400);
    return () => clearInterval(interval);
  }, []);
  return (
    <div>
      <div className="flex items-center justify-center mt-3">
        <div className="w-[394px] flex flex-col items-center justify-center">
          <Image src={frameTitle} alt="frameTitle" />
          <h2 className="text-[37.86px] mt-[-10px] text-white tracking-[2%] font-medium">
            Upgrading
          </h2>
        </div>
        <div className="absolute top-[111.7px] left-[127.3px]">
          <div className="w-[558.25px] h-[111.61px] level-upgrading flex items-center justify-between px-[18.23px] gap-2">
            <div className="w-[79.75px] h-full flex flex-col items-center">
              <p className="text-[18.23px] leading-[28.25px] tracking-[-1%] text-white/[50%]">
                Level
              </p>
              <h3 className="text-[61px] mt-[-12px] font-semibold  text-[#E7E9EC] tracking-[-1%]">
                01
              </h3>
            </div>
            <div className="w-[344px] flex items-center justify-center">
              <div className="flex">
                <Image
                  src={rightBig1}
                  alt="rightBig1"
                  className={`transition-opacity duration-300 ${
                    step >= 1 ? "opacity-100" : "opacity-0"
                  }`}
                />
                <Image
                  src={rightBig2}
                  alt="rightBig2"
                  className={`transition-opacity duration-300 ml-[-18px] ${
                    step >= 2 ? "opacity-100" : "opacity-0"
                  }`}
                />
                <Image
                  src={rightBig3}
                  alt="rightBig3"
                  className={`transition-opacity duration-300 ml-[-18px] ${
                    step >= 3 ? "opacity-100" : "opacity-0"
                  }`}
                />
              </div>
            </div>

            <div className="w-[79.75px] h-full flex flex-col items-center">
              <p className="text-[18.23px] leading-[28.25px] tracking-[-1%] text-white/[50%]">
                Level
              </p>
              <h3
                className="text-[61px] mt-[-12px] font-semibold  text-[#E7E9EC] tracking-[-1%] text-gradient-next"
                style={{
                  textShadow: "0px 0px 22.56px #b5c02ca3",
                }}
              >
                02
              </h3>
            </div>
          </div>
        </div>
        <div className="absolute top-[241.82px] left-[300.5px]">
          <h4 className="text-xs text-[#C5C9D1]">
            M’Fren has been upgrade to Level 2
          </h4>
        </div>
      </div>
    </div>
  );
};

export default UpgradeLoading;

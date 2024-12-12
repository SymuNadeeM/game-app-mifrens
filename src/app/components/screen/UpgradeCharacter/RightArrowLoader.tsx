import Image from "next/image";
import { useEffect, useState } from "react";
import rightOne from "../../../../assets/upgrade-character/right-1.svg";
import rightTwo from "../../../../assets/upgrade-character/right-2.svg";
import rightThree from "../../../../assets/upgrade-character/right-3.svg";

const RightArrowLoader = () => {
  const [step, setStep] = useState(1);

  useEffect(() => {
    const interval = setInterval(() => {
      setStep((prev) => (prev === 3 ? 1 : prev + 1));
    }, 500);
    return () => clearInterval(interval);
  }, []);
  return (
    <div className="flex">
      <Image
        src={rightOne}
        alt="rightOne"
        className={`transition-opacity duration-300 ${
          step >= 1 ? "opacity-100" : "opacity-0"
        }`}
      />
      <Image
        src={rightTwo}
        alt="rightTwo"
        className={`transition-opacity duration-300 ml-[-8px] ${
          step >= 2 ? "opacity-100" : "opacity-0"
        }`}
      />
      <Image
        src={rightThree}
        alt="rightBig3"
        className={`transition-opacity duration-300 ml-[-8px] ${
          step >= 3 ? "opacity-100" : "opacity-0"
        }`}
      />
    </div>
  );
};

export default RightArrowLoader;

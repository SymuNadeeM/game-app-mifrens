"use client";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import closeICon from "../../assets/wager/close-button.png";
import WagerAllCard from "../components/screen/Wager/WagerAllCard";
const WagerEthPage = () => {
  const router = useRouter();
  return (
    <div className="flex flex-col items-center justify-center min-h-screen w-screen lg:w-full overflow-x-hidden">
      <div className="w-screen lg:w-[812px] h-screen lg:h-[375px] bg-[url('/wager-bg.svg')] bg-[#081626] text-white overflow-hidden relative">
        <div className="flex items-center justify-end pt-3 lg:pt-[24.5px] pr-[24.5px]">
          <button
            onClick={() => router.back()}
            className="w-[30.39px] h-[30.39px]"
          >
            <Image src={closeICon} alt="closeICon" className="" />
          </button>
        </div>
        <WagerAllCard />
        <div className="flex items-center justify-end">
          <div className="mt-5 lg:mt-7 mr-8 lg:mr-6">
            <Link
              href={"./searching-opponent-eth"}
              className="w-[142px] h-8 next-button rounded flex items-center justify-center font-semibold text-darkBlue relative z-20"
            >
              Battle
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WagerEthPage;

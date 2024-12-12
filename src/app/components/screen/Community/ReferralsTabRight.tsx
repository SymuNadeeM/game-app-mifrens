import { referralsData } from "@/app/data/referralsData";
import Image from "next/image";
import bottomLine from "../../../../assets/community/bottom-line.svg";

const ReferralsTabRight = () => {
  return (
    <div className="w-[533px] h-[243px] lg:h-full px-2 py-2.5 rounded bg-[#293557]/[20%] border-[.5px] border-white/[10%] backdrop-blur space-y-1">
      {referralsData.map((referral) => (
        <div
          key={referral.id}
          className="px-2 py-1 rounded bg-[#293557]/[20%] border-[.5px] border-white/[10%] backdrop-blur flex items-center justify-between gap-2.5"
        >
          <div className="flex items-center justify-between gap-2.5">
            <div className="w-[30px] h-[30px] rounded-[5px]">
              <Image
                src={referral.charRef}
                alt="charRef"
                className="rounded-[5px]"
              />
            </div>
            <div>
              <p className="text-xs leading-[18.6px] tracking-[-1%] text-white">
                {referral.name}
              </p>
              <div className="flex items-center gap-[3px]">
                <h5 className="text-[10px] leading-[15.5px] tracking-[-1%] text-white/[50%] font-semibold uppercase">
                  LVL
                </h5>
                <h5 className="text-[10px] leading-[15.5px] tracking-[-1%] text-[#C9D15E] font-semibold uppercase">
                  {referral.level}
                </h5>
              </div>
            </div>
          </div>
          <button className="w-[83px] h-[26px] border-t flex items-center justify-center Challenge-button rounded relative text-xs font-medium text-[#E7E9EC]">
            Challenge
            <div className=" absolute bottom-[1px] left-1/2 transform -translate-x-1/2">
              <Image src={bottomLine} alt="bottomLine" />
            </div>
          </button>
        </div>
      ))}
    </div>
  );
};

export default ReferralsTabRight;

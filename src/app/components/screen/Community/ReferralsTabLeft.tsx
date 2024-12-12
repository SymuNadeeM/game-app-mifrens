import Image from "next/image";
import Link from "next/link";
import coinRef from "../../../../assets/community/coinRef.png";

const ReferralsTabLeft = () => {
  return (
    <div className="w-[219px] h-[243px] lg:h-full border-[.5px] referrals-link border-white/[10%] backdrop-blur rounded p-2 lg:p-[13px]">
      <h4 className="text-xs font-medium text-white text-center">
        Referral Links
      </h4>
      <div className="mt-1 lg:mt-2 px-[14px] py-2 lg:py-2.5 border-[.5px] border-white/[10%] bg-[#293557]/[20%] backdrop-blur rounded space-y-2.5">
        <div className="flex items-center justify-between">
          <h4 className="text-[11px] text-[#C5C9D1]">My referrals</h4>
          <p className="text-[11px] text-[#E7E9EC]">3</p>
        </div>
        <div className="flex items-center justify-between">
          <h4 className="text-[11px] text-[#C5C9D1]">Referral rewards</h4>
          <div className="flex items-center gap-1">
            <div className="w-3 h-3">
              <Image src={coinRef} alt="coinRef" />
            </div>
            <p className="text-xs text-white">300</p>
          </div>
        </div>
      </div>
      <div className="mt-2 lg:mt-4 h-[135px] px-[14px] py-2 lg:py-2.5 border-[.5px] border-white/[10%] bg-[#293557]/[20%] backdrop-blur rounded space-y-2.5 flex flex-col items-center">
        <h4 className="text-[13px] leading-[15px] font-semibold text-center text-[#E7E9EC]">
          Invitation Link
        </h4>
        <Link
          href={"#"}
          className="underline text-[10px] leading-[15px] tracking-[-1%] text-[#ABB628]"
        >
          www.link.com/friendsinvite
        </Link>
        <div className="w-full h-[19px] flex items-center justify-between">
          <div className="w-[120px] text-center text-[10px] leading-[15px] text-[#C5C9D1]">
            Rewards per refferal
          </div>
          <div className="flex items-center gap-1">
            <div className="w-3 h-3">
              <Image src={coinRef} alt="coinRef" />
            </div>
            <p className="text-xs text-white">100</p>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <button className="w-[53px] h-[26px] rounded flex items-center justify-center border-t copy-button text-xs font-medium text-[#E7E9EC]">
            Copy
          </button>
          <button className="w-[102px] h-[26px] next-button-character rounded flex items-center justify-center text-xs border-t  font-semibold text-darkBlue relative z-20 cursor-pointer">
            Invite Friends
          </button>
        </div>
      </div>
    </div>
  );
};

export default ReferralsTabLeft;

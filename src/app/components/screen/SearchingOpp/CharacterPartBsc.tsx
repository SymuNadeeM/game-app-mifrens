import Image from "next/image";
import bscIcon from "../../../../assets/searching-opp/bsc/block-chain.png";
import charDoge from "../../../../assets/searching-opp/bsc/char-doge.png";
import coinF from "../../../../assets/searching-opp/F_Coin.png";
import starIcon from "../../../../assets/searching-opp/star-icon.png";

const CharacterPartBsc = () => {
  return (
    <div className="pt-8 lg:pt-[60px] px-8 pb-10">
      <div className="w-[174px] h-[181px] rounded border-[.5px] border-white/[12%] bg-[#293557]/[20%] backdrop-blur overflow-hidden relative z-20 flex items-center justify-center">
        <div className="w-[149px]">
          <Image src={charDoge} alt="charDoge" />
        </div>
        <div className="absolute bottom-0">
          <div className="w-[173px] h-[46px] bg-[#1E2A4C] backdrop-blur rounded-bl rounded-br relative">
            <div className="bg-[#051F45] absolute w-[46px] h-[23px] bottom-[11.5px] left-[-11.5px] -rotate-90">
              <div className="w-[46px] h-[23px] flex items-center justify-center gap-1">
                <Image
                  src={bscIcon}
                  alt="bscIcon"
                  className="rotate-90 w-3 h-3"
                />
                <h5 className="text-[10px] text-white/[50%] tracking-[-1%]">
                  BSC
                </h5>
              </div>
            </div>
            <div className="pl-[33px] py-[5px]">
              <h4 className="text-sm font-medium text-white leading-[21px] tracking-[-1%]">
                DOGE
              </h4>
              <div className="flex items-center gap-[3px]">
                <h5 className="text-[10px] text-white/[50%] tracking-[-1%]">
                  LVL
                </h5>
                <h5 className="text-[10px] font-semibold text-[#E7E9EC] tracking-[-1%]">
                  1
                </h5>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-[17px] space-y-1">
        <div className="px-2 py-1 flex items-center gap-2 bg-[#24345F]/[28%] rounded backdrop-blur relative z-20">
          <div className="w-[15px] h-[15px]">
            <Image src={starIcon} alt="starIcon" />
          </div>
          <div>
            <h4 className="text-sm leading-[21px] tracking-[-1%] text-white">
              Johnny
            </h4>
            <div className="flex items-center gap-[3px]">
              <p className="text-[10px] leading-[15px] tracking-[-1%] text-white/[50%] uppercase">
                RANK
              </p>
              <p className="text-[10px] leading-[15px] tracking-[-1%] text-[#C9D15E] uppercase">
                1
              </p>
            </div>
          </div>
        </div>
        <div className="px-2 py-1 flex items-center justify-center gap-1 bg-[#18233F] rounded relative z-20">
          <div className="w-[14px] h-[14px]">
            <Image src={coinF} alt="coinF" />
          </div>
          <p className="text-sm leading-[21px] tracking-[-1%] text-white/[80%]">
            5,000
          </p>
        </div>
      </div>
    </div>
  );
};

export default CharacterPartBsc;

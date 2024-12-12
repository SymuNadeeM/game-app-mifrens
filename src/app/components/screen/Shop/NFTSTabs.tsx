import { shopCardData, ShopCardItem } from "@/app/data/shopCardData";
import Image from "next/image";
import sectionIcon from "../../../../assets/home/section-home.svg";
import coin from "../../../../assets/shop/coinRef.png";

const NFTSTabs: React.FC = () => {
  return (
    <div className="w-[590px] lg:w-[656px] h-[308px] overflow-y-scroll custom-scrollbar">
      <div className="rounded border-[.5px] border-white/[10%] bg-[#293557]/[20%] backdrop-blur px-3 lg:px-4 py-3 lg:py-4 grid grid-cols-4 gap-3 lg:gap-4 ">
        {shopCardData.map((item: ShopCardItem) => (
          <div
            key={item.id}
            className="h-[163px] lg:h-[173px] border-[.5px] border-white/[12%] bg-[#293557]/[20%] rounded backdrop-blur"
          >
            {/* Image Section */}
            <div className="w-full h-[131.43px] lg:h-[141.43px] pt-[0.57px] pl-[0.57px] relative">
              <Image
                src={item.img}
                alt={`Shop item ${item.id}`}
                layout="fill"
                objectFit="cover"
                className="rounded-tl rounded-tr"
              />
              {/* Rotated Section Icon */}
              <div className="bg-[#051F45] absolute w-[46px] h-[23px] top-[11.4px] left-[-11.7px] -rotate-90 rounded-tr">
                <div className="w-[46px] h-[23px] flex items-center justify-center gap-1">
                  <Image
                    src={sectionIcon}
                    alt="section icon"
                    className="rotate-90 w-3 h-3"
                  />
                  <h5 className="text-[10px] text-white/[50%] tracking-[-1%]">
                    TON
                  </h5>
                </div>
              </div>
            </div>

            {/* Points Section */}
            <div className="mt-[5px] flex items-center justify-center">
              <div className="flex items-center gap-1">
                <div className="w-[11.93px] h-3">
                  <Image src={coin} alt="coin" width={12} height={12} />
                </div>
                <p className="text-sm font-medium tracking-[-1%] text-white">
                  {item.point}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NFTSTabs;

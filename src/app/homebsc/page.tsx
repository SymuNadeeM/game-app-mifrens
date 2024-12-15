import Image from "next/image";
import Link from "next/link";
import blurLayer from "../../assets/home/blur-layer.svg";
import sectionIcon from "../../assets/home/bsc/block-chain.png";
import characterBig from "../../assets/home/bsc/for-bsc-character.png";
import buttonShapes from "../../assets/home/button-shape.svg";
import splashScreen from "../../assets/home/splash-screen.svg";
import AllDetailsButton from "../components/screen/Home/AllDetailsButton";
import DailyClaims from "../components/screen/Home/DailyClaims";
import HomeNav from "../components/shared/Navbar/HomeNav";

const HomeBSCPage = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen w-screen lg:w-full overflow-x-hidden">
      <div className="w-screen lg:w-[812px] h-screen lg:h-[375px] bg-[url('/home-bg-forest.svg')] bg-[#081626] text-white relative overflow-hidden">
        <HomeNav />
        {/* character image */}
        <div className=" absolute top-0 left-[138px] pointer-events-none z-40">
          <div className="w-[234px] lg:h-[375px]">
            <Image
              width={234}
              height={375}
              src={characterBig}
              alt="characterBig"
              className="w-full h-full"
            />
          </div>
        </div>
        {/* from categories */}
        <div className="absolute top-[75px] left-[2.5rem] lg:left-[34.67px]  from-categories rounded z-30">
          <div className="w-[196px] h-[52px] relative z-20">
            <div className="bg-[#051F45] absolute w-[52px] h-[23px] bottom-[14.5px] left-[-14.5px] -rotate-90 rounded-tl rounded-tr">
              <div className="w-[52px] h-[23px] flex items-center justify-center gap-1">
                <div className="w-[15px] h-[15px]">
                  <Image
                    src={sectionIcon}
                    alt="sectionIcon"
                    className="rotate-90"
                  />
                </div>
                <h5 className="text-[10px] text-white/[50%] tracking-[-1%]">
                  BSC
                </h5>
              </div>
            </div>
            <div className="ml-[23px] pl-4 py-[9px]">
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
        {/* Upgrade button */}
        <div className="absolute top-[126px] left-[4rem] lg:left-[58px] z-30">
          <Link href={"./upgrade-character-bsc"}>
            <div className="w-[70px] h-[28px] upgrade-button text-[10px] text-[#E7E9EC] relative flex items-center justify-center">
              Upgrade
              <div className="absolute bottom-[2px] left-1/2 transform -translate-x-1/2">
                <Image src={buttonShapes} alt="buttonShapes" />
              </div>
            </div>
          </Link>
        </div>
        <div className="absolute top-[49.67px] left-0 z-10">
          <Image src={splashScreen} alt="splashScreen" />
        </div>
        <div className="absolute top-[0px] bottom-0 left-[0px] z-10">
          <Image src={blurLayer} alt="blurLayer" />
        </div>
        {/* all details button */}
        {/* className="absolute right-2 top-[23%] lg:right-8 lg:top-[113px] scale-[80%] lg:scale-100" */}
        <div className="absolute top-[23%] lg:top-[113px] right-6 lg:right-8 z-30">
          <AllDetailsButton />
        </div>

        <div className="absolute top-[65%] lg:top-[253px] left-[135px] z-40">
          <DailyClaims />
        </div>
      </div>
    </div>
  );
};

export default HomeBSCPage;

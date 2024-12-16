import Image from "next/image";
import frameTitle from "../../../../assets/upgrade-character/frame-title-pn.png";

interface SuccessLoaderProps {
  name: string;
}

const SuccessLoader: React.FC<SuccessLoaderProps> = ({ name }) => {
  return (
    <div>
      <div className="flex items-center justify-center mt-3">
        <div className="w-[394px] flex flex-col items-center justify-center">
          <Image src={frameTitle} alt="frameTitle" />
          <h2 className="text-[37.86px] mt-[-10px] text-white tracking-[2%] font-medium">
            Successful
          </h2>
        </div>
        <div className="absolute top-[87px] left-[332px]">
          <div className="w-[149px] h-[143px] level-upgrading flex items-center justify-center">
            <div className="w-[80px] h-[112px] flex flex-col items-center">
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
            {name} has been upgraded to Level 2
          </h4>
        </div>
      </div>
    </div>
  );
};

export default SuccessLoader;

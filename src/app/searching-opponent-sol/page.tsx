import Image from "next/image";
import cardBgBlur from "../../assets/searching-opp/card-bg-blur.svg";
import CharacterPartSol from "../components/screen/SearchingOpp/CharacterPartSol";
import SearchingLoad from "../components/screen/SearchingOpp/SearchingLoad";

const SearchingOpponentSolPage = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen w-screen lg:w-full overflow-x-hidden">
      <div className="w-screen lg:w-[812px] h-screen lg:h-[375px] bg-[url('/searching-opponent-bg.svg')] bg-[#081626] text-white overflow-hidden relative flex items-center justify-center">
        <div className="absolute left-[65px] top-0 bottom-0">
          <div className="w-[240px] h-[375px] relative">
            <CharacterPartSol />
            <div className="absolute inset-0 z-10">
              <Image src={cardBgBlur} alt="cardBgBlur" className="h-[375px]" />
            </div>
          </div>
        </div>
        <div>
          <h2 className="text-[48px] font-semibold text-center text-white">
            VS
          </h2>
        </div>
        <div className="absolute top-[124px] lg:top-[146px] left-[561px]">
          <div className="w-[148px] flex flex-col items-center gap-[21px]">
            <SearchingLoad />
            <p className="text-xs text-white/[70%]">Searching for Opponent</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchingOpponentSolPage;

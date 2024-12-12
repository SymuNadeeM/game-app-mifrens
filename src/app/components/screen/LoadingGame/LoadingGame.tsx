"use client";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import loadingImage from "../../../../assets/loading-bg.png";
import PlayNowModal from "./PlayNowModal";

const LoadingGame = () => {
  const [loading, setLoading] = useState<boolean>(true);
  const [progress, setProgress] = useState<number>(0);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setLoading(false);
          return 100;
        }
        return prev + 1;
      });
    }, 50);
  }, []);
  const openModal = () => setIsModalOpen(true);
  // const closeModal = () => setIsModalOpen(false);
  return (
    <div className="relative flex flex-col items-center justify-center h-screen lg:min-h-screen w-screen lg:w-full overflow-x-hidden">
      {/* Background Image */}
      <div className="relative">
        <Image
          src={loadingImage}
          alt="Loading Background"
          className="w-screen lg:w-[812px] h-screen lg:h-[375px] lg:object-cover"
        />
        {/* Loading Progress Bar */}
        {loading && (
          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 w-[85%] h-[9.6px] bg-grayLoad rounded-sm overflow-hidden flex items-center">
            <div
              className="h-[7.29px] loading-bg transition-all duration-100"
              style={{ width: `${progress}%` }}
            ></div>
          </div>
        )}
        {!loading && (
          <div className="space-y-2">
            <button
              onClick={openModal}
              className="absolute top-[75%] left-1/2 transform -translate-x-1/2 p-2.5 rounded h-8 play-button flex items-center justify-center font-semibold text-darkBlue"
            >
              Play Now
            </button>
            <Link
              href="#"
              className="absolute top-[86%] left-1/2 transform -translate-x-1/2 font-medium text-[13px] tracking-[-1%] text-center text-[#CFDF14] underline"
            >
              Learn More
            </Link>
          </div>
        )}
      </div>
      {/* Modal */}
      {isModalOpen && <PlayNowModal />}
    </div>
  );
};

export default LoadingGame;

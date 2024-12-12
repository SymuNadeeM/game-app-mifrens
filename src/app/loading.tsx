const LoadingSite = () => {
  return (
    <div className="flex-col gap-4 w-full h-screen flex items-center justify-center">
      <div className="w-20 h-20 border-4 border-transparent text-[#C4D030] text-4xl animate-spin flex items-center justify-center border-t-[#C4D030] rounded-full">
        <div className="w-16 h-16 border-4 border-transparent text-white text-2xl animate-spin flex items-center justify-center border-t-white rounded-full"></div>
      </div>
    </div>
  );
};

export default LoadingSite;

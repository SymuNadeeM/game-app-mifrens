import { tableData } from "@/app/data/tableData";
import Image from "next/image";

const DataTable = () => {
  return (
    <div className="w-[392px] h-[166px] space-y-1">
      {tableData.map((row, index) => (
        <div
          key={index}
          className="w-full h-[30px] px-2 flex items-center gap-1 table-row-bg"
        >
          <div>
            <Image src={row.icon} alt={row.title} />
          </div>
          <div className="py-1.5 w-full flex items-center gap-1">
            <div className="w-[82.5px]">
              <h4 className="text-xs text-[#C5C9D1]">{row.title}</h4>
            </div>
            <div className="w-[82.5px]">
              <p className="text-xs text-white">{row.currentValue}</p>
            </div>
            <div className="w-[82.5px] flex items-center justify-center">
              {row.images.map((image, imgIndex) => (
                <Image
                  key={imgIndex}
                  src={image}
                  alt={`${row.title} icon ${imgIndex}`}
                  className={imgIndex > 0 ? "ml-[-8px]" : ""}
                />
              ))}
            </div>
            <div className="w-[82.5px]">
              <div
                className="text-xs text-[#B5C02C]"
                style={{
                  textShadow: "0px 0px 5.7px rgba(181, 192, 44, 0.93)",
                }}
              >
                {row.newValue}
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default DataTable;

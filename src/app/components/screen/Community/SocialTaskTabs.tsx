import Image from "next/image";
import { useState } from "react";
import coinRef from "../../../../assets/community/coinRef.png";
import { Task, tasks } from "../../../data/taskData";

const SocialTaskTabs = () => {
  const [taskList, setTaskList] = useState<Task[]>(tasks);

  const handleClaim = (id: number) => {
    setTaskList((prevTasks) =>
      prevTasks.map((task) =>
        task.id === id ? { ...task, claimed: true } : task
      )
    );
  };

  return (
    <div className="mt-[9px] w-full h-[286px] overflow-y-scroll custom-scrollbar">
      <div className="p-2.5 rounded border-[.5px] border-white/[15%] bg-[#293557]/[5%] backdrop-blur space-y-2 lg:space-y-2.5">
        {taskList.map((task) => (
          <div
            key={task.id}
            className="w-full h-11 lg:h-[50px] px-[14px] lg:py-2.5 flex items-center justify-between gap-2.5 border-[.5px] border-white/[5%] bg-[#293557]/[20%] rounded backdrop-blur"
          >
            <div className="space-y-[2px] w-[329px]">
              <h4 className="text-sm font-medium text-[#E7E9EC]">
                {task.title}
              </h4>
              <p className="text-[8px] tracking-[-1%] text-[#979EAC]">
                {task.description}
              </p>
            </div>
            <div className="flex items-center gap-[5px] w-[293px]">
              <div className="w-[14px] h-[14px]">
                <Image src={coinRef} alt="coinRef" />
              </div>
              <p
                className="text-[9.83px] font-medium text-white"
                style={{
                  WebkitTextStroke: ".60px #323508",
                }}
              >
                <span className="text-[7.37px]">X</span>
                {task.points}
              </p>
            </div>
            <div className="w-[73px] flex items-center justify-end">
              {task.claimed ? (
                <button className="w-[73px] h-[26px] bg-[#4B5111] rounded flex items-center justify-center text-xs font-semibold text-[#C5C9D1]">
                  Claimed
                </button>
              ) : (
                <button
                  onClick={() => handleClaim(task.id)}
                  className="w-[37px] h-[26px] flex items-center justify-center rounded border-t go-button text-xs font-semibold text-[#0C1A35]"
                >
                  Go
                </button>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SocialTaskTabs;

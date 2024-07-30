import clock from "@/icons/clock.svg";
import Image from "next/image";

const TaskCard = () => {
  return (
    <div className="flex h-fit flex-col justify-start gap-4 py-[14px] px-[13px] rounded-lg bg-[#f9f9f9] border border-[#dedede]">
      <span className="font-medium text-base leading-[19.36px] text-[#606060]">
        Implement User Authentication
      </span>
      <p className="font-normal text-[14px] leading-[16.94px] text-[#797979]">
        Develop and integrate user authentication using email and password.
      </p>
      <Urgent />
      <div className="flex gap-2">
        <Image src={clock} alt="" />
        <p className="font-semibold text-[14px] leading-[16.94px] text-[#606060]">
          2024-08-15
        </p>
      </div>
    </div>
  );
};

export default TaskCard;

const Urgent = () => {
  return (
    <div className="flex gap-[10px] bg-[#ff6b6b] text-white py-[6px] px-2 rounded-lg w-[55px] h-[27px]">
      <span className="font-normal text-xs leading-[14.52px]">Urgent</span>
    </div>
  );
};

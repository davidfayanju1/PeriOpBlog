import { TbNurse } from "react-icons/tb";

const Footer = () => {
  return (
    <div className="w-full bg-[#000055] min-h-[15rem] px-4 py-[4rem] flex items-center jusitfy-center flex-wrap">
      <div className="section_container poppins-bold text-white font-mono font-bold text-[2rem]">
        POB.
      </div>

      <div className="icon_continer">
        <TbNurse color="#FFFFFF" size={70} />
      </div>
    </div>
  );
};

export default Footer;

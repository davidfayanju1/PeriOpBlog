import { MdConstruction } from "react-icons/md";

const WIP = () => {
  return (
    <div className="h-full flex items-center justify-center">
      <div className="container h-full w-full flex items-center justify-center text-center flex-col">
        <div className="item_container mt-[2rem]">
          <MdConstruction size={150} color="#0358BD" />
        </div>
        <h1 className="poppins-bold md:text-[2rem] text-[1.7rem]">
          Be Patient With Us
        </h1>
        <span className="block poppins-regular text-gray-400">
          This page is under construction
        </span>
      </div>
    </div>
  );
};

export default WIP;

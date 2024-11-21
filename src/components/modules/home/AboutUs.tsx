import { IoBookSharp } from "react-icons/io5";
import { ImBooks } from "react-icons/im";
import { FaMoneyBillTrendUp } from "react-icons/fa6";
import { FaUserTie } from "react-icons/fa";
import { PiUserFocusFill } from "react-icons/pi";

const AboutUs = () => {
  const sizes = 50;

  const colors = "#e6e6e6";

  const ourInfo = [
    {
      name: "Titles",
      number: 10,
      icon: <IoBookSharp size={sizes} color={colors} />,
    },
    {
      name: "Sold",
      number: 0,
      icon: <ImBooks size={sizes} color={colors} />,
    },
    {
      name: "Members",
      number: 20,
      icon: <PiUserFocusFill size={sizes} color={colors} />,
    },

    {
      name: "Revenue",
      number: "$50",
      icon: <FaMoneyBillTrendUp size={sizes} color={colors} />,
    },
    {
      name: "Authors",
      number: "20",
      icon: <FaUserTie size={sizes} color={colors} />,
    },
  ];

  return (
    <>
      <div className="flex items-center md:py-0 py-7 bg-white min-h-[15rem] w-full md:px-[3rem] mx-auto justify-around md:flex-row flex-col md:gap-0 gap-6">
        {ourInfo.map((item) => (
          <div
            key={item.name}
            className="item_card flex flex-col items-center justify-center"
          >
            <div className="icon_container mx-auto">{item.icon}</div>
            <span className="block poppins-semibold text-[2.6rem] text-blue-900 text-center">
              {item.number}
            </span>
            <span className="block poppins-regular font-semibold text-gray-400 text-[.9rem]">
              {item.name}
            </span>
          </div>
        ))}
      </div>
    </>
  );
};

export default AboutUs;

import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaUserAlt } from "react-icons/fa";
import { FaCircleUser } from "react-icons/fa6";

interface NavProps {
  active: number;
}

interface LinkItems {
  name: string;
  route: string;
  activeI: number;
}

const Nav = ({ active }: NavProps) => {
  const links = [
    {
      name: "Book-Shop",
      route: "/books",
      activeI: 1,
    },
    {
      name: "Articles",
      route: "/articles",
      activeI: 2,
    },
    {
      name: "Blogs",
      route: "/blogs",
      activeI: 3,
    },
    {
      name: "Events",
      route: "/events",
      activeI: 4,
    },
  ];

  const [toggle, setToggle] = useState(false);
  const [toggleModal, setToggleModal] = useState(false);
  const [activepage, setActivePage] = useState(1);
  const navigate = useNavigate();

  const route = (item: LinkItems) => {
    navigate(item.route);
    setActivePage(item.activeI);
  };

  return (
    <div>
      <nav className="item_container z-30 fixed top-0 left-0 flex items-center justify-between w-full min-h-[6rem] bg-white md:px-[5.7rem] px-[1rem]">
        <div className="text_title">
          <Link to={"/"}>
            <h1 className="font-bold md:text-[1.5rem] text-[1.2rem] poppins-bold">
              POB.
            </h1>
          </Link>
        </div>

        <ul className="md:block hidden">
          <li className=" flex items-center justify-center gap-[18.5px]">
            {links.map((item) => (
              <button
                onClick={() => route(item)}
                className={`poppins-regular outline-none border-none ${
                  activepage && ""
                } text-[1rem] ${
                  active === item?.activeI
                    ? "text-[#0358BD] underline"
                    : "text-black"
                }`}
              >
                {item.name}
              </button>
            ))}
          </li>
        </ul>

        {toggle && (
          <ul className="mobile_nav block md:hidden bg-white absolute top-[6rem] left-0 w-full p-5 min-h-[15rem]">
            <li className=" flex flex-col items-center justify-center gap-4">
              {links.map((item) => (
                <button
                  onClick={() => route(item)}
                  className={`poppins-regular outline-none border-none ${
                    activepage && ""
                  } text-[1rem] ${
                    active === item?.activeI
                      ? "text-[#0358BD] underline"
                      : "text-black"
                  }`}
                >
                  {item.name}
                </button>
              ))}
            </li>
          </ul>
        )}

        <div className="icon_container relative  flex items-center justify-center gap-5 h-full">
          <button
            title="Profile"
            onClick={() => setToggleModal(!toggleModal)}
            className="text-[1.1rem] text-black"
          >
            <FaUserAlt />
          </button>
          {toggleModal && (
            <div className="modal_container flex flex-col items-center justify-center gap-3 absolute top-full mt-2 left-1/2 transform -translate-x-1/2 p-2 bg-white rounded-[6px] h-[8rem] shadow-xl w-[11rem]">
              <div className="profile_icon">
                <FaCircleUser color="gray" size={30} />
              </div>
              <button
                onClick={() => navigate("/login")}
                className="bg-blue-800 text-white w-full hover:bg-blue-900 rounded-[6px] py-1.5 px-1 text-center font-semibold text-[.9rem] transition-colors duration-300 ease-in-out"
              >
                Sign In
              </button>
            </div>
          )}
          <button
            title="Your Cart"
            className="text-[1.1rem] text-black md:block hidden"
          >
            <i className="fa-solid fa-cart-shopping"></i>
          </button>

          <button
            onClick={() => setToggle(!toggle)}
            className="text-black text-[1.1rem] md:hidden block"
          >
            {toggle ? (
              <i className="fa-solid fa-xmark"></i>
            ) : (
              <i className="fa-solid fa-bars"></i>
            )}
          </button>
        </div>
      </nav>
    </div>
  );
};

export default Nav;

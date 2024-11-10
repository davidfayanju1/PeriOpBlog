import { Link } from "react-router-dom";

const Nav = () => {
  const links = [
    {
      name: "Books",
      route: "/books",
    },
    {
      name: "Articles",
      route: "/articles",
    },
    {
      name: "Book Details",
      route: "/book-details",
    },

    {
      name: "Blogs",
      route: "/blogs",
    },

    {
      name: "Event",
      route: "/events",
    },
  ];

  return (
    <div>
      <nav className="item_container fixed top-0 left-0 flex items-center justify-between w-full min-h-[6rem] bg-white md:px-[2rem] px-[1rem]">
        <div className="text_title">
          <h1 className="font-bold md:text-[1.5rem] text-[1.2rem] font-mono">
            POB.
          </h1>
        </div>

        <ul className="md:block hidden">
          <li className=" flex items-center justify-center gap-4">
            {links.map((item) => (
              <Link to={item.route} className="font-semibold text-[1rem]">
                {item.name}
              </Link>
            ))}
          </li>
        </ul>

        <div className="icon_container flex items-center justify-center gap-5 h-full">
          <button className="text-[1.1rem] text-black">
            <i className="fa-solid fa-magnifying-glass"></i>
          </button>
          <button className="text-[1.1rem] text-black md:block hidden">
            <i className="fa-solid fa-cart-shopping"></i>
          </button>

          <button className="text-black text-[1.1rem] md:hidden block">
            <i className="fa-solid fa-bars"></i>
          </button>
        </div>
      </nav>
    </div>
  );
};

export default Nav;

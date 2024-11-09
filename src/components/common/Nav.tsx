import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <div>
      <nav className="item_container fixed top-0 left-0 flex items-center justify-between w-full min-h-[6rem] bg-gray-500 md:px-[2rem] px-[1rem]">
        <div className="text_title">
          <h1 className="font-bold md:text-[2rem] font-mono">POB.</h1>
        </div>

        <div className="links_section">
          <ul className="">
            <li className=" flex items-center justify-center gap-3">
              <Link to={"/"}>Books</Link>
              <Link to={"/article"}>Articles</Link>
              <Link to={"/book-details"}>Book Details</Link>
              <Link to={"/blods"}>Blogs</Link>
              <Link to={"/events"}>Events</Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Nav;

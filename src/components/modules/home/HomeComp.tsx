import { generateYearOptions } from "../../../lib/Date";
import Button from "../../common/Button";
import Input from "../../common/Input";
import { useState } from "react";
import { GiBookshelf } from "react-icons/gi";
import { BsCartPlus } from "react-icons/bs";
import { RiSecurePaymentLine } from "react-icons/ri";
import { FaDownload } from "react-icons/fa6";
import { FaSignInAlt } from "react-icons/fa";
import Reviews from "./Reviews";
import Title from "../../UI/Title";
import Testimonials from "./Testimonials";

interface SearchState {
  title: string;
  author: string;
  year: number;
}

const HomeComp = () => {
  const [search, setSearch] = useState<SearchState>({
    title: "",
    author: "",
    year: 2024,
  });

  const startYear = 1990;

  const endYear = new Date().getFullYear();

  const yearOptions = generateYearOptions(startYear, endYear);

  const handleInputChange = (field: string, value: string | number) => {
    setSearch((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const userStory = [
    {
      name: "First",
      action: "Sign Up/ Login",
      icon: <FaSignInAlt />,
    },

    {
      name: "Second",
      action: "Pick The book",
      icon: <GiBookshelf />,
    },

    {
      name: "Third",
      action: "Add to Cart",
      icon: <BsCartPlus />,
    },

    {
      name: "Fourth",
      action: "Pay the bill",
      icon: <RiSecurePaymentLine />,
    },

    {
      name: "Fifth",
      action: "Download",
      icon: <FaDownload />,
    },
  ];

  return (
    <div className="bg-gray-50 min-h-screen">
      <div className="item-container md:h-[35rem] h-[79rem] flex items-center md:flex-row flex-col justify-center gap-10 p-3 py-[1rem] w-full">
        <section className="section_container flex md:flex-row flex-col items-center justify-between overflow-hidden bg-white md:px-[3.5rem] py-[3rem] h-full md:shadow-lg shadow-md rounded-[10px] md:w-[70%] w-full gap-[1.5rem]">
          <div className="desktop-container h-full flex flex-col justify-center">
            <h1 className="poppins-bold text-[#0358BD] mb-3 leading-tight md:w-[70%] w-full md:text-left text-center md:text-[3vw] text-[1.4rem]">
              WELCOME TO PERIOPBLOG
            </h1>
            <span className="block poppins-regular mt-1 text-gray-400 md:text-left text-center text-[.8rem] md:text-[.9rem] md:w-[68%] w-full">
              Home to millions of digital and non-digital books.
            </span>
            <span className="text-gray-400 md:text-left text-center text-[.8rem] md:text-[.9rem] md:w-[68%] w-full">
              Elevate Your Practice with Every Click.
            </span>

            <div className="item_container p-3">
              <div className="input_container flex items-center px-7 justify-center border-solid mt-9  rounded-full md:w-[65%] shadow-lg shadow-gray-100 w-full md:h-[3rem] h-[2.5rem]">
                <input
                  type="text"
                  className="outline-none poppins-regular bg-transparent w-full text-[16px]"
                  placeholder="Enter Book Title"
                  value={search.title}
                />

                <Button
                  title="Search"
                  onPress={() => console.log("ok")}
                  buttonStyle="h-full bg-[#0358BD] poppins-medium text-white font-semibold w-full mr-[-2rem] rounded-full"
                />
              </div>
            </div>
          </div>

          <div className="picture_container relative mx-auto md:w-[50%] w-[70%]">
            <div className="image_container md:max-h-[25rem] max-h-[22rem] md:h-[80%] h-full w-full rounded-full max-w-[25rem] md:min-w-[15rem] min-w-[15rem] overflow-hidden border-r-[18px] border-[#0358BD]">
              <img
                src="/images/Opeyemi.jpg"
                alt="hero-image"
                className=" object-cover w-full h-full"
              />
            </div>
            <img
              src="/images/myImage.jpg"
              alt=""
              className="rounded-full absolute left-[-15%] bottom-[-3%] md:h-[12rem] h-[9rem] md:w-[12rem] w-[9rem] object-top"
            />
          </div>
        </section>
        <section className="h-full relative bg-[#F3F3F3] shadow-lg md:w-[25%] w-full rounded-[10px] overflow-hidden flex items-center justify-center">
          <div className="item_container h-[50rem] w-[40rem] absolute z-0 top-[-20%] left-[-25%] right-0 flex items-center justify-center">
            <img src="/icons/circles.svg" alt="" className="w-full h-full" />
          </div>
          <div className="book_container relative z-50000">
            <h1 className="poppins-semibold mb-3 text-[#0358BD] text-center text-[1.8rem]">
              NEW RELEASE
            </h1>
            <div className="book_container mb-4 h-[12rem] mx-auto">
              <img
                src="/images/shift.jpg"
                alt="book/article-cover"
                className="h-full mx-auto shadow-md"
              />
            </div>
            <div className="texts">
              <span className="title block text-[#0358BD] poppins-semibold text-center text-[20px]">
                The Shift
              </span>
              <span className="author block poppins-regular text-center text-gray-400 text-[14px]">
                Theresa Brown
              </span>

              <Button
                title="Preview"
                buttonStyle="bg-[#0358BD] text-white poppins-medium mt-4 rounded-full h-[3rem] w-[60%] mx-auto"
                onPress={() => console.log("Ok")}
              />
            </div>
          </div>
        </section>
      </div>

      <section className="section_container min-h-[10rem] w-full md:px-[2.5rem] px-[.5rem] flex items-center justify-start md:gap-4 gap-2 mx-auto">
        <div className="item_container flex items-center justify-center md:gap-5 gap-2 md:w-[70%] w-[89%]">
          <Input
            placeholder="Enter Author Name"
            label=""
            type="text"
            handleChangeText={(value) => handleInputChange("author", value)}
            value={search.author}
            containerStyle="border-solid w-[55%] border-gray-300 border-[1px] rounded-full px-[.9rem] py-3"
            inputStyle="text-[16px]"
          />
          <Input
            type="select"
            placeholder="Enter Year"
            label=""
            handleChangeText={(value) => handleInputChange("year", value)}
            value={search.year}
            containerStyle="border-solid border-gray-300 border-[1px] rounded-full px-[.9rem] w-[45%] py-3"
            options={yearOptions}
            inputStyle="text-[16px] w-full"
          />
        </div>
        <div className="button_container md:w-[10%] w-[25%]">
          <Button
            title="Search"
            buttonStyle="bg-[#0358BD] text-white poppins-medium rounded-full h-[3rem] w-full text-[.9rem]"
            onPress={() => console.log("Ok")}
          />
        </div>
      </section>

      <section className="howitworks py-[3rem]">
        <Title textStyle="text-center mb-[3rem]">How it works</Title>
        <div className="flow_blob flex items-center md:pl-[5rem] justify-center md:flex-row flex-col w-full">
          {userStory.map((item, index) => (
            <div
              key={item.name}
              className="md:w-full !mx-auto md:max-w-full w-full max-w-[13rem] flex md:flex-col flex-row-reverse"
            >
              <div className="flex-container md:flex-row flex-col flex items-center justify-start">
                <div className="item_card blob text-center flex items-center justify-center">
                  <span className="inner-text block text-white md:text-[1.6rem] text-[1.4rem]">
                    {item.icon}
                  </span>
                </div>
                {index !== userStory.length - 1 && (
                  <div className="item_container md:w-[71%] w-[.1rem] h-[4rem] md:h-[.1rem] bg-[#0358bd] ml-0 md:ml-0 mt-0 md:mt-0"></div>
                )}
              </div>
              <span className="block self-start mt-[2rem] poppins-regular text-[.7rem] md:mt-5 text-left w-full">
                {item.action}
              </span>
            </div>
          ))}
        </div>
      </section>

      <section className="reviews my-[4rem]">
        <Reviews />
      </section>

      <section className="testimonials min-h-[20rem] md:p-[3rem] px-[1rem]">
        <Testimonials />
      </section>
    </div>
  );
};

export default HomeComp;

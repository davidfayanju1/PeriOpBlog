import Button from "../../common/Button";

const HomeComp = () => {
  return (
    <div className="bg-gray-50 min-h-screen">
      <div className="item-container md:h-[35rem] h-[69rem] flex items-center md:flex-row flex-col justify-center gap-10 p-3 w-full">
        <section className="section_container flex items-center justify-between overflow-hidden md:px-[3.5rem] md:py-[3rem] h-full bg-white rounded-[10px] md:w-[70%] w-full">
          <div className="mobile_image_container md:hidden relative block h-full w-full">
            <div className="bg-[#000000]/25 z-10 h-full w-full absolute top-0 left-0 right-0 bottom-0"></div>
            <img
              src="/images/heroOfficial.jpg"
              alt="hero-image"
              className="h-full w-full object-cover relative"
            />
            <div className="text_container w-[90%] absolute z-20 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
              <h1 className="poppins-bold text-white w-full text-center text-[1.9rem]">
                WELCOME TO PERIOPBLOG
              </h1>
              <span className="block poppins-regular mt-1 text-white md:text-left text-center text-[1rem] w-full">
                Home to millions of digital and non-digital books.
              </span>

              <div className="input_container flex items-center px-7 justify-center border-solid mt-9 border-[2px] border-white rounded-full md:w-[60%] w-full h-[3rem]">
                <input
                  type="text"
                  className="outline-none text-white poppins-regular placeholder:text-[14px] bg-transparent w-full text-[16px]"
                  placeholder="Write Title Here"
                />

                <Button
                  title="Search"
                  onPress={() => console.log("ok")}
                  buttonStyle="!h-full bg-white poppins-medium text-black font-semibold w-full mr-[-2rem] rounded-full"
                />
              </div>
            </div>
          </div>

          <div className="desktop-container h-full md:flex flex-col justify-center hidden">
            <h1 className="poppins-bold text-[#0358BD] mb-3 leading-tight md:w-[70%] w-full md:text-left text-center md:text-[3vw] text-[2rem]">
              WELCOME TO PERIOPBLOG
            </h1>
            <span className="block poppins-regular mt-1 text-gray-400 md:text-left text-center text-[.92rem] md:w-[68%] w-full">
              Home to millions of digital and non-digital books. <br /> Elevate
              Your Practice with Every Click.
            </span>

            <div className="input_container flex items-center px-7 justify-center border-solid mt-9 border-[1px] border-gray-400 rounded-full md:w-[65%] w-full h-[3rem]">
              <input
                type="text"
                className="outline-none poppins-regular placeholder:text-[14px] bg-transparent w-full text-[16px]"
                placeholder="Write Title Here"
              />

              <Button
                title="Search"
                onPress={() => console.log("ok")}
                buttonStyle="h-full bg-[#0358BD] poppins-medium text-white font-semibold w-full mr-[-2rem] rounded-full"
              />
            </div>
          </div>

          <div className="picture_container relative h-[26rem] md:block hidden w-[50%] rounded-full">
            <img
              src="/images/Opeyemi.jpg"
              alt="hero-image"
              className="h-full rounded-full w-full object-cover object-right border-r-[18px] border-[#0358BD]"
            />
            <img
              src="/images/myImage.jpg"
              alt=""
              className="rounded-full absolute left-[-15%] bottom-[-3%] h-[12rem] w-[12rem] object-top"
            />
          </div>
        </section>
        <section className="h-full relative bg-white md:w-[25%] w-full rounded-[10px] overflow-hidden">
          <div className="bubble rounded-full bg-gray-300 h-[8rem] w-[8rem] ml-[-3rem] mt-[-3rem]"></div>
          <div className="bubble absolute right-[5%] rounded-full bg-gray-300 h-[2.8rem] w-[2.8rem]"></div>
          <div className="book_container">
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
                buttonStyle="bg-[#0358BD] text-white poppins-medium mt-4 rounded-full h-[3rem] w-[50%] mx-auto"
                onPress={() => console.log("Ok")}
              />
            </div>
            <div className="bubble absolute bottom-[10%] left-[5%] rounded-full bg-gray-300 h-[2.8rem] w-[2.8rem]"></div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default HomeComp;

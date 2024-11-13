import Button from "../../common/Button";

const HomeComp = () => {
  return (
    <div className="bg-gray-50 min-h-screen">
      <div className="item-container md:h-[35rem] h-[79rem] flex items-center md:flex-row flex-col justify-center gap-10 p-3 w-full">
        <section className="section_container flex md:flex-row flex-col items-center justify-between overflow-hidden bg-white md:px-[3.5rem] py-[3rem] h-full shadow-lg rounded-[10px] md:w-[70%] w-full">
          <div className="desktop-container h-full flex flex-col justify-center">
            <h1 className="poppins-bold text-[#0358BD] mb-3 leading-tight md:w-[70%] w-full md:text-left text-center md:text-[3vw] text-[1.4rem]">
              WELCOME TO PERIOPBLOG
            </h1>
            <span className="block poppins-regular mt-1 text-gray-400 md:text-left text-center text-[.92rem] md:w-[68%] w-full">
              Home to millions of digital and non-digital books. <br /> Elevate
              Your Practice with Every Click.
            </span>

            <div className="item_container px-3">
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
          </div>

          <div className="picture_container relative h-[26rem] md:w-[50%] w-[70%] rounded-full">
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
    </div>
  );
};

export default HomeComp;

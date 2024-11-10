import Button from "../../common/Button";

const HomeComp = () => {
  return (
    <div className="bg-gray-50 min-h-screen">
      <div className="item-container md:h-[35rem] h-[30rem] flex items-center justify-center gap-10 p-3 w-full">
        <section className="section_container flex items-center justify-between md:px-[3.5rem] px-[1rem] md:py-[3rem] py-[6rem] h-full bg-white rounded-[10px] md:w-[70%] w-full">
          <div className="text-container h-full flex flex-col justify-center">
            <h1 className="poppins-bold md:w-[70%] w-full md:text-left text-center md:text-[3vw] text-[2rem]">
              WELCOME TO PERIOPBLOG
            </h1>
            <span className="block poppins-regular mt-1 text-gray-400 md:text-left text-center text-[1rem] md:w-[60%] w-full">
              A house to millions of digital and non-digital books.
            </span>

            <div className="input_container flex items-center px-7 justify-center border-solid mt-9 border-[2px] border-black rounded-full md:w-[60%] w-full h-[3rem]">
              <input
                type="text"
                className="outline-none poppins-regular placeholder:text-[14px] bg-transparent w-full text-[16px]"
                placeholder="Write Title Here"
              />

              <Button
                title="Search"
                onPress={() => console.log("ok")}
                buttonStyle="h-full bg-black poppins-medium text-white font-semibold w-full mr-[-2rem] rounded-full"
              />
            </div>
          </div>

          <div className="picture_container md:block hidden w-[40%] rounded-[10px] overflow-hidden">
            <img
              src="/images/useThis.jpg"
              alt="hero-image"
              className="h-[30rem] w-full"
            />
          </div>
        </section>
        <section className="h-full bg-white w-[25%] md:block hidden rounded-[10px] overflow-hidden">
          <div className="bubble rounded-full bg-gray-300 h-[8rem] w-[8rem] ml-[-3rem] mt-[-3rem]"></div>
          <div className="bubble rounded-full bg-gray-300 h-[8rem] w-[8rem]"></div>
          <div className="book_container"></div>
        </section>
      </div>
    </div>
  );
};

export default HomeComp;

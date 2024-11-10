import Button from "../../common/Button";

const HomeComp = () => {
  return (
    <div className="bg-white min-h-screen">
      <div className="item-container md:h-[35rem] h-[30rem] flex items-center justify-center gap-10 p-3 w-full">
        <section className="section_container md:px-[3.5rem] px-[1rem] md:py-[3rem] py-[6rem] h-full bg-gray-100 rounded-[10px] md:w-[70%] w-full">
          <div className="text-container">
            <h1 className="font-bold poppins-bold md:w-[50%] w-full md:text-left text-center md:text-[3.1rem] text-[2rem]">
              WELCOME TO PERIOPBLOG
            </h1>
            <span className="block poppins-regular mt-1 text-gray-400 md:text-[1.4rem] md:text-left text-center text-[1rem]">
              A house to millions of digital and non-digital books.
            </span>

            <div className="input_container flex items-center px-7 justify-center border-solid mt-9 border-[2px] border-black rounded-full w-full h-[3rem]">
              <input
                type="text"
                className="outline-none poppins-regular bg-transparent w-full text-[16px]"
                placeholder="Write Title Here"
              />

              <Button
                title="Search"
                onPress={() => console.log("ok")}
                buttonStyle="h-full bg-black poppings-regular text-white font-semibold w-full mr-[-2rem] rounded-full"
              />
            </div>
          </div>
        </section>
        <section className="h-full bg-gray-100 w-[25%] md:block hidden"></section>
      </div>
    </div>
  );
};

export default HomeComp;

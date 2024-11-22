import { Link } from "react-router-dom";
import Button from "../components/common/Button";
import Input from "../components/common/Input";
import { BiSolidQuoteLeft } from "react-icons/bi";

const SignUp = () => {
  return (
    <div className="page_container min-h-screen">
      <div className="flex-Container p-4 flex items-center justify-center w-full h-full">
        <div className="blue_side md:block relative hidden rounded-[10px] overflow-y-scroll h-screen w-[50%] bg-blue-800">
          <img src="/icons/circle.svg" alt="" />
          <div className="overlay absolute top-0 left-0 bottom-0 right-0 bg-blue-900/30"></div>
          <img
            src="/images/nursesF.jpg"
            alt=""
            className="w-full h-full object-cover"
          />

          <div className="text_container absolute top-0 right-0 left-0 p-[3rem] bottom-0">
            <h1 className="poppins-bold text-[1.5rem] text-white">POB.</h1>
            <div className="text_container mt-[8rem]">
              <span className="text-white poppins-bold text-[2.5rem] block">
                Select.
              </span>
              <span className="text-white poppins-bold text-[2.5rem] block">
                Add to Cart.
              </span>
              <span className="text-white poppins-bold text-[2.5rem] block">
                Checkout.
              </span>
              <span className="title_text block mt-4 poppins-regular w-[60%] text-white">
                We have the resources you need, all you have to do is signup...
              </span>

              <div className="card_container bg-black w-full px-6 rounded-[10px] min-h-[15rem] mt-[10rem] mx-auto">
                <BiSolidQuoteLeft color="#515151" size={90} className="" />
                <div className="text_container mt-6">
                  <blockquote className="poppins-regular text-white text-[.9rem]">
                    I'm impressed with the level of progress we've been able to
                    make so far since the inception of this beautiful idea as a
                    whole
                  </blockquote>
                  <div className="author text-white mt-6 poppins-semibold">
                    - Adesina Emmanuel,{" "}
                    <span className="poppins-light">CEO</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="form-container md:w-[50%] w-full md:p-[3rem] p-2">
          <h1 className="poppins-bold text-blue-900 md:text-[3rem] text-[2.5rem]">
            Get Started
          </h1>
          <small className="text-gray-400 block mb-11 text-[1rem]">
            Have an account with us and start enjoying the benefits
          </small>

          <form>
            <Input
              placeholder="Enter Full Name"
              label="Full Name"
              type="text"
              handleChangeText={(value) => console.log("author", value)}
              value={""}
              containerStyle="border-solid mb-8 w-full border-gray-300 border-[1px] rounded-[9px] px-[1rem] py-4"
              inputStyle="text-[16px] placeholder:text-gray-300"
              password
            />
            <Input
              placeholder="Enter Email Address"
              label="Email"
              type="text"
              handleChangeText={(value) => console.log("author", value)}
              value={""}
              containerStyle="border-solid mb-8 w-full border-gray-300 border-[1px] rounded-[9px] px-[1rem] py-4"
              inputStyle="text-[16px] placeholder:text-gray-300"
              password
            />
            <Input
              placeholder="Enter Preferred Password"
              label="Password"
              type="text"
              handleChangeText={(value) => console.log("author", value)}
              value={""}
              containerStyle="border-solid mb-12 w-full border-gray-300 border-[1px] rounded-[9px] px-[1rem] py-4"
              inputStyle="text-[16px] placeholder:text-gray-300"
              password={true}
            />

            <Button
              title="Sign Up"
              onPress={() => console.log("")}
              buttonStyle="rounded-[9px] min-h-[3rem] w-full bg-blue-800 text-white poppins-semibold"
            />

            <span className="block poppins-regular text-gray-500 text-center mt-4">
              Already have an account?{" "}
              <Link to={"/login"} className="text-blue-800">
                Login
              </Link>
            </span>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignUp;

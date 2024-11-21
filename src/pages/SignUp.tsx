import Button from "../components/common/Button";
import Input from "../components/common/Input";

const SignUp = () => {
  return (
    <div className="page_container min-h-screen">
      <div className="flex-Container p-4 flex items-center justify-center w-full h-full">
        <div className="blue_side md:block relative hidden rounded-[10px] overflow-y-scroll h-screen w-[40%] bg-blue-800">
          <div className="overlay absolute top-0 left-0 bottom-0 right-0 bg-blue-900/30"></div>
          <img
            src="/images/nursesF.jpg"
            alt=""
            className="w-full h-full object-cover"
          />

          <div className="text_container absolute top-[5%] right-0 left-[7%] bottom-0">
            <h1 className="poppins-bold text-[1.5rem] text-white">POB.</h1>
            <div className="text_container mt-[15rem]">
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
            </div>
          </div>
        </div>
        <div className="form-container md:w-[60%] w-full md:p-10">
          <h1 className="poppins-bold text-blue-900 mb-5 text-[3rem]">
            Sign Up
          </h1>
          <small className="text-gray-400 block mb-5 text-[1rem]">
            Have an account with us and start enjoying the benefits
          </small>

          <form>
            <Input
              placeholder="Enter Full Name"
              label=""
              type="text"
              handleChangeText={(value) => console.log("author", value)}
              value={""}
              containerStyle="border-solid mb-4 w-full border-gray-300 border-[1px] rounded-[9px] px-[1rem] py-4"
              inputStyle="text-[16px] placeholder:text-gray-300"
            />
            <Input
              placeholder="Enter Email Address"
              label=""
              type="text"
              handleChangeText={(value) => console.log("author", value)}
              value={""}
              containerStyle="border-solid mb-4 w-full border-gray-300 border-[1px] rounded-[9px] px-[1rem] py-4"
              inputStyle="text-[16px] placeholder:text-gray-300"
            />
            <Input
              placeholder="Enter Preferred Password"
              label=""
              type="text"
              handleChangeText={(value) => console.log("author", value)}
              value={""}
              containerStyle="border-solid mb-12 w-full border-gray-300 border-[1px] rounded-[9px] px-[1rem] py-4"
              inputStyle="text-[16px] placeholder:text-gray-300"
            />

            <Button
              title="Sign Up"
              onPress={() => console.log("")}
              buttonStyle="rounded-[9px] min-h-[3rem] w-full bg-blue-800 text-white poppins-semibold"
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignUp;

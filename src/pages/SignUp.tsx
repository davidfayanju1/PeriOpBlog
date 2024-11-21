import Button from "../components/common/Button";
import Input from "../components/common/Input";

const SignUp = () => {
  return (
    <div className="page_container min-h-screen">
      <div className="flex-Container p-4 flex items-center justify-center w-full h-full">
        <div className="blue_side md:block hidden rounded-[10px] overflow-y-scroll h-screen w-[40%] bg-blue-800">
          <h1 className="poppins-bold">Join Us</h1>
        </div>
        <div className="form-container w-[60%] md:p-10">
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
              inputStyle="text-[16px]"
            />
            <Input
              placeholder="Enter Email Address"
              label=""
              type="text"
              handleChangeText={(value) => console.log("author", value)}
              value={""}
              containerStyle="border-solid mb-4 w-full border-gray-300 border-[1px] rounded-[9px] px-[1rem] py-4"
              inputStyle="text-[16px]"
            />
            <Input
              placeholder="Enter Preferred Password"
              label=""
              type="text"
              handleChangeText={(value) => console.log("author", value)}
              value={""}
              containerStyle="border-solid mb-12 w-full border-gray-300 border-[1px] rounded-[9px] px-[1rem] py-4"
              inputStyle="text-[16px]"
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

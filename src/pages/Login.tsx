import { Link, useNavigate } from "react-router-dom";
import { BiSolidQuoteLeft } from "react-icons/bi";
import Input from "../components/common/Input";
import Button from "../components/common/Button";

const Login = () => {
  const navigate = useNavigate();

  const handleLogin = () => {
    console.log("Ok");
    navigate("/signup");
  };

  return (
    <div className="page_container">
      <div className="desktop_image_container md:block hidden relative">
        <div className="overlay absolute top-0 left-0 bottom-0 right-0 bg-blue-900/30"></div>
        <img loading="lazy" src="/images/Login.jpeg" alt="" />
        <div className="form-container z-10 absolute bottom-[20%] right-[2%] rounded-[10px] bg-white md:w-[50%] w-full md:p-[3rem] p-2">
          <h1 className="poppins-bold text-blue-900 md:text-[3rem] text-[2.5rem]">
            Login
          </h1>
          <small className="text-gray-400 block mb-11 text-[1rem]">
            Please enter your credentials to access your account.
          </small>

          <form className="">
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
              title="Login"
              onPress={handleLogin}
              buttonStyle="rounded-[9px] min-h-[3rem] w-full bg-blue-800 text-white poppins-semibold"
            />

            <Link
              to={"/signup"}
              className="text-blue-700 block mt-1.5 text-[.9rem]"
            >
              Forgot Password?
            </Link>

            <span className="block poppins-regular text-gray-500 text-center mt-4">
              Don't have an account?{" "}
              <Link to={"/signUp"} className="text-blue-800">
                Signup
              </Link>
            </span>
          </form>
        </div>
      </div>

      <div className="mobile_image_container md:hidden block">
        <div className="form-container bg-white w-full p-4">
          <h1 className="poppins-bold text-blue-900 md:text-[3rem] text-[2.5rem]">
            Login
          </h1>
          <small className="text-gray-400 block mb-11 text-[1rem]">
            Please enter your credentials to access your account.
          </small>

          <form className="">
            <Input
              placeholder="Enter Email Address"
              label="Email"
              type="text"
              handleChangeText={(value) => console.log("author", value)}
              value={""}
              containerStyle="border-solid mb-5 w-full border-gray-300 border-[1px] rounded-[9px] px-[1rem] py-4"
              inputStyle="text-[16px] placeholder:text-gray-300"
              password
            />
            <Input
              placeholder="Enter Preferred Password"
              label="Password"
              type="text"
              handleChangeText={(value) => console.log("author", value)}
              value={""}
              containerStyle="border-solid mb-8 w-full border-gray-300 border-[1px] rounded-[9px] px-[1rem] py-4"
              inputStyle="text-[16px] placeholder:text-gray-300"
              password={true}
            />

            <Button
              title="Login"
              onPress={handleLogin}
              buttonStyle="rounded-[9px] min-h-[3rem] w-full bg-blue-800 text-white poppins-semibold"
            />
            <Link
              to={"/signup"}
              className="text-blue-700 block mt-1.5 text-[.9rem]"
            >
              Forgot Password?
            </Link>

            <span className="block poppins-regular text-[.9rem] text-gray-500 text-center mt-5">
              Don't have an account?{" "}
              <Link to={"/signUp"} className="text-blue-800">
                Signup
              </Link>
            </span>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;

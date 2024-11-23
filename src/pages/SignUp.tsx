import { Link, useNavigate } from "react-router-dom";
import Button from "../components/common/Button";
import Input from "../components/common/Input";
import { BiSolidQuoteLeft } from "react-icons/bi";
import { useState } from "react";

interface FormState {
  fullName: string;
  email: string;
  password: string;
}

const SignUp = () => {
  const navigate = useNavigate();
  const [form, setForm] = useState<FormState>({
    fullName: "",
    email: "",
    password: "",
  });

  const handleInputChange = (field: string, value: string | number) => {
    setForm((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const handleSignup = () => {
    console.log(form);
    navigate("/");
  };

  return (
    <div className="page_container min-h-screen">
      <div className="flex-Container p-4 flex items-center justify-center w-full h-full">
        <div className="md:block fixed bg-transparent hidden rounded-[10px] overflow-hidden h-[95vh] w-[47%] top-[2%] left-[1%]">
          <div className="overlay absolute inset-0 bg-blue-900/30"></div>
          <img
            src="/images/nursesF.jpg"
            alt=""
            className="w-full h-full object-cover rounded-inherit"
          />

          <div className="text_container absolute inset-0 p-[3rem]">
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

              {/* <div className="card_container bg-black w-full px-6 rounded-[10px] min-h-[15rem] pb-3 mt-[10rem] mx-auto">
                <BiSolidQuoteLeft color="#515151" size={90} />
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
              </div> */}
            </div>
          </div>
        </div>
        <div className="form-container md:ml-[50%] md:w-[50%] w-full md:px-[3rem] px-0 md:py-[5rem] pt-[3rem]">
          <h1 className="poppins-bold text-blue-900 md:text-[3rem] text-[2.5rem]">
            Get Started
          </h1>
          <small className="text-gray-400 block mb-11 text-[1rem]">
            Have an account with us and start enjoying the benefits
          </small>

          <form className="">
            <Input
              placeholder="Enter Full Name"
              label="Full Name"
              type="text"
              handleChangeText={(value) => handleInputChange("fullName", value)}
              value={form.fullName}
              containerStyle="border-solid mb-8 w-full border-gray-300 border-[1px] rounded-[9px] px-[1rem] py-4"
              inputStyle="text-[16px] placeholder:text-gray-300"
              password={false}
            />
            <Input
              placeholder="Enter Email Address"
              label="Email"
              type="text"
              handleChangeText={(value) => handleInputChange("email", value)}
              value={form.email}
              containerStyle="border-solid mb-8 w-full border-gray-300 border-[1px] rounded-[9px] px-[1rem] py-4"
              inputStyle="text-[16px] placeholder:text-gray-300"
              password={false}
            />
            <Input
              placeholder="Enter Preferred Password"
              label="Password"
              type="text"
              handleChangeText={(value) => handleInputChange("password", value)}
              value={form.password}
              containerStyle="border-solid mb-12 w-full border-gray-300 border-[1px] rounded-[9px] px-[1rem] py-4"
              inputStyle="text-[16px] placeholder:text-gray-300"
              password={true}
            />

            <Button
              title="Sign Up"
              onPress={handleSignup}
              buttonStyle="rounded-[9px] min-h-[3rem] w-full bg-blue-800 text-white poppins-semibold"
            />

            <span className="block poppins-regular text-gray-500 text-center mt-4 text-[.9rem]">
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

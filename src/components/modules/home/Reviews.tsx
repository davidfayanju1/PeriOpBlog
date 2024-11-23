import Button from "../../common/Button";
import Input from "../../common/Input";
import Title from "../../UI/Title";

const Reviews = () => {
  return (
    <div className="flex items-center justify-center md:flex-row flex-col min-h-[25rem]">
      <figure className="image_container relative h-full md:w-[50%] w-full">
        <div className="item_container h-full w-full bg-blue-800/5 absolute top-0 left-0 right-0 bottom-0"></div>
        <img
          src="/images/questions.jpg"
          alt="nurse-picture"
          className="w-full md:h-[30rem] h-[18rem] object-cover inset-0"
          loading="lazy"
        />
      </figure>

      <div className="form_container my-auto h-full md:w-[50%] w-full md:px-10 px-5 md:py-0 py-[2.5rem]">
        <Title textStyle="mb-2 text-blue-900">Reviews</Title>
        <span className="block poppins-regular font-semibold md:text-[1rem] text-[.9rem]">
          Send in your reviews
        </span>
        <span className="text-[1rem] text-gray-300">
          This is a work in progress. Your ideas are welcome
        </span>

        <div className="form_container mx-auto mt-6">
          <Input
            type="text"
            placeholder="Enter Your Email"
            label=""
            value={""}
            containerStyle="border-solid mb-5 border-gray-300 border-[1px] rounded-[9px] px-[.9rem] w-[45%] py-3 w-full"
            inputStyle=""
            handleChangeText={() => console.log("ok")}
            password={false}
          />

          <Input
            type="text"
            placeholder="What's your concern?"
            label=""
            value={""}
            containerStyle="border-solid mb-9 border-gray-300 border-[1px] rounded-[9px] px-[.9rem] w-[45%] py-3 w-full"
            inputStyle=""
            handleChangeText={() => console.log("ok")}
            password={false}
          />

          <Button
            title="Send"
            buttonStyle="bg-[#0358BD] text-white poppins-medium mt-4 rounded-[8px] h-[3rem] w-full mx-auto"
            onPress={() => console.log("ok")}
          />
        </div>
      </div>
    </div>
  );
};

export default Reviews;

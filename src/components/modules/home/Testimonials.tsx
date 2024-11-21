import Title from "../../UI/Title";
import Marquee from "react-fast-marquee";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Adesina Emmanuel",
      text: "Easy to navigate, beautiful website overall",
    },

    {
      name: "Fayanju Adebayo",
      text: "Easy to see all needed resources. I searched for a particular novel and I was surprised this website came up",
    },
    {
      name: "Adejumo Akin",
      text: "Seamless payment system. The payment went smoothly and I've been enjoying my paid membership ever since",
    },
  ];

  return (
    <div className="page_container">
      <Title textStyle="text-center mb-[1.7rem]">Testimonials</Title>
      <Marquee className="item_container flex items-center justify-center">
        {testimonials.map((item) => (
          <div className="testimonial_card my-auto bg-white rounded-[9px] min-h-[15rem] p-3 w-[20rem] mr-5">
            <img src="/icons/quote.svg" alt="" className="mx-auto" />
            <blockquote className="poppins-regular mb-5 text-center text-[.8rem] custom-multiline-ellipsis">
              {item?.text}
            </blockquote>
            <span className="author text-center block mt-2 poppins-semibold text-[.9rem]">
              - {item?.name}
            </span>
          </div>
        ))}
      </Marquee>
    </div>
  );
};

export default Testimonials;

import { Link } from "react-router-dom";
import Title from "../../UI/Title";
import { IoIosArrowDroprightCircle } from "react-icons/io";
import Button from "../../common/Button";
import { FaCameraRetro } from "react-icons/fa";

const Blogs = () => {
  const blogPosts = [
    {
      img: "/images/doctors.jpg",
      title: "Be Friends with Books and investment",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis doloremque soluta sunt saepe natus enim amet alias neque suscipit aperiam?",
      createdAt: "2m ago",
    },

    {
      img: "/images/stetoscope.jpg",
      title: "My job my love",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis doloremque soluta sunt saepe natus enim amet alias neque suscipit aperiam?",
      createdAt: "1 hr ago",
    },

    {
      title: "My job my Forte",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis doloremque soluta sunt saepe natus enim amet alias neque suscipit aperiam?",
      createdAt: "2 days ago",
    },
  ];

  return (
    <div className="section_container py-9 min-h-[20rem] md:px-[4rem] px-[1rem]">
      <div className="title">
        <div className="title_flex_container w-full flex items-center justify-between">
          <Title textStyle="text-blue-900">LATEST POSTS</Title>
          <Link
            to={"/blogs"}
            className="flex items-center text-blue-900 justify-center gap-1"
          >
            More
            <IoIosArrowDroprightCircle />
          </Link>
        </div>
        <div className="line w-full my-5 h-[.1rem] bg-gray-300"></div>
        <div className="card_container flex items-center justify-center md:flex-row flex-col gap-7">
          {blogPosts.map((item) => (
            <div
              key={item.title}
              className="card min-h-[20rem] rounded-[9px] overflow-hidden md:max-w-[40%] max-w-full w-full"
            >
              {item.img ? (
                <img
                  loading="lazy"
                  src={item.img}
                  alt=""
                  className="h-[11rem] object-cover w-full"
                />
              ) : (
                <div className="item_container bg-gray-300 w-full h-[11rem] flex items-center justify-center">
                  <FaCameraRetro color="#FFFFFF" size={30} />
                </div>
              )}

              <div className="text_section pt-2">
                <div className="small_text_container mb-3 flex items-center gap-3">
                  <small className="block poppins-semibold text-blue-900">
                    Admin
                  </small>
                  <small className="text-gray-400 poppins-regular">
                    {item.createdAt}
                  </small>
                </div>
                <div className="blog_title">
                  <h1 className="poppins-bold mb-4 single-line-ellipsis">
                    {item?.title}
                  </h1>
                  <small className="block mb-6 custom-multiline-ellipsis poppins-regular text-[.9rem] text-gray-500">
                    {item.text}
                  </small>
                  <Button
                    title="Read More"
                    buttonStyle=" w-[8rem] h-[2.8rem] bg-[#0358BD] rounded-full text-white poppins-regular text-[.9rem]"
                    onPress={() => console.log("")}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blogs;

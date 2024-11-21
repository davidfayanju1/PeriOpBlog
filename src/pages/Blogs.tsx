import BlogsComp from "../components/modules/blogs/BlogsComp";
import DefaultLayout from "../layout/DefaultLayout";

const Blogs = () => {
  return (
    <DefaultLayout active={3}>
      <BlogsComp />
    </DefaultLayout>
  );
};

export default Blogs;

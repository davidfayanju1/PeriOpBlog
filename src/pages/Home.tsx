import DefaultLayout from "../layout/DefaultLayout";
import HomeComp from "../components/modules/home/HomeComp";

const Home = () => {
  return (
    <DefaultLayout active={5}>
      <HomeComp />
    </DefaultLayout>
  );
};

export default Home;

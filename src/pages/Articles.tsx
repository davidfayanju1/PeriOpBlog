import ArticlesComp from "../components/modules/articles/ArticlesComp";
import DefaultLayout from "../layout/DefaultLayout";

const Articles = () => {
  return (
    <DefaultLayout active={2}>
      <ArticlesComp />
    </DefaultLayout>
  );
};

export default Articles;

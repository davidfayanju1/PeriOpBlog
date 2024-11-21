import BookShopComp from "../components/modules/bookShop/BookShopComp";
import DefaultLayout from "../layout/DefaultLayout";

const BookShop = () => {
  return (
    <DefaultLayout active={1}>
      <BookShopComp />
    </DefaultLayout>
  );
};

export default BookShop;

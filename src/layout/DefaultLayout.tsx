import React from "react";
import Nav from "../components/common/Nav";
import Footer from "../components/common/Footer";

interface DefaultLayoutProp {
  children: React.ReactNode;
}

const DefaultLayout = ({ children }: DefaultLayoutProp) => {
  return (
    <div>
      <Nav />
      <div className="mt-[6rem]">{children}</div>
      <Footer />
    </div>
  );
};

export default DefaultLayout;

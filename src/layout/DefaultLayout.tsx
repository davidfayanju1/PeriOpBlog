import React from "react";
import Nav from "../components/common/Nav";
import Footer from "../components/common/Footer";

interface DefaultLayoutProp {
  children: React.ReactNode;
  active: number;
}

const DefaultLayout = ({ children, active }: DefaultLayoutProp) => {
  return (
    <div>
      <Nav active={active} />
      <div className="mt-[6rem]">{children}</div>
      <Footer />
    </div>
  );
};

export default DefaultLayout;
